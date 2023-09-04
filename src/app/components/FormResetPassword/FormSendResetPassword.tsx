import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "validator";
import styles from "./FormPasswordReset.module.css";

const schema = yup
  .object({
    email: yup
      .string()
      .required("لطفا آدرس ایمیل خود را وارد کنید")
      .test("آدرس ایمیل معتبر نیست", "آدرس ایمیل معتبر نیست", (value) =>
        validator.isEmail(value)
      ),
  })
  .required();

export default function FormSendResetPassword({
  onSubmit,
}: {
  onSubmit: Function;
}) {
  const [emailSent, setEmailSent] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = async ({ email }: { email: string }) => {
    onSubmit(email).then(() => setEmailSent(true));
  };

  return emailSent ? (
    <p className="my-5 text-red-600">
      لینک بازیابی رمز عبور به آدرس ایمیل شما ارسال شد
    </p>
  ) : (
    <form
      className="flex flex-col gap-1 my-3"
      onSubmit={handleSubmit(sendEmail)}
    >
      <input
        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="text"
        placeholder="آدرس ایمیل"
        {...register("email")}
        aria-valid={errors.email ? "true" : "false"}
      />
      {errors.email && (
        <p style={{ direction: "rtl" }} role="alert">
          {errors.email.message}
        </p>
      )}
      <div className="text-center md:text-center">
        <button className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4">
          ارسال ایمیل
        </button>
      </div>
    </form>
  );
}
