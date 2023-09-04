import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./FormPasswordReset.module.css";
import { passwordRules } from '@/app/constants/formContstants'

const schema = yup
  .object({
    password: yup
      .string()
      .required("لطفا رمز عبور جدید را وارد کنید")
      .matches(passwordRules, "رمز عبور باید به انگلیسی و شامل حروف بزرگ و کوچک و عدد باشد."),
    confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'رمز عبور همسان نیست')
    .required(''),
  })
  .required();

export default function FormUpdatePassword(
  {
  onSubmit,
}: {
  // eslint-disable-next-line no-unused-vars
  onSubmit: Function;
    }
) {
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const tokenId = searchParams?.get("tokenId");
  const { push } = useRouter();

  const [ serverError, setServerError ] = React.useState<String>('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const resetPassword =async ({ password }: { password: string }) => {
    onSubmit(password, token!, tokenId!)
    .then(() => push('/home'))
    .catch((e:any) => setServerError(e.error));
  }

  return (
    <form
      className="flex flex-col gap-1 my-3"
      onSubmit={handleSubmit(resetPassword)}
    >
      <input
        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="password"
        placeholder="رمز عبور"
        {...register("password")}
        aria-valid={errors.password ? "true" : "false"}
      />
      {errors.password && (
        <p style={{ direction: "rtl", color: 'red' }} role="alert">
          {errors.password.message}
        </p>
      )}
      <input
        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="password"
        placeholder="تکرار رمز عبور"
        {...register("confirmedPassword")}
        aria-valid={errors.confirmedPassword ? "true" : "false"}
      />
      {errors.confirmedPassword && (
        <p style={{ direction: "rtl", color: 'red'}} role="alert">
          {errors.confirmedPassword.message}
        </p>
      )}
       {serverError && (
        <p style={{ direction: "rtl", color: 'red' }} role="alert">
          {'خطای سرور! دوباره تقاضای لینک رمز عبور کنید'}
        </p>
      )}
      <div className="text-center md:text-center">
        <button type="submit" className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4">
          تغییر رمز
        </button>
      </div>
    </form>
  );
}
