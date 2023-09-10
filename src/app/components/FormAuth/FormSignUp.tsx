"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useApp } from "../../RealmApp";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormAuth.module.css";
import { signUpSchema as schema } from "@/app/validators/yup";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function FormSignUp() {
  const { push } = useRouter();
  const { register: signUp } = useApp();
  const [serverError, setServerError] = React.useState<string>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async ({ firstName, lastName, email, password }: IFormData) => {
    console.log(firstName, lastName);

    await (signUp as Function)(email, password)
    .then((e: { message: string }) => {
      if (e?.message) setServerError(e?.message);
    })
    .catch((e) => {
      console.log(error);
    });
  };

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(submitForm)}>
      <input
        className={`${styles.input} ${styles.name} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="text"
        placeholder="نام"
        {...register("firstName")}
      />
      <input
        className={`${styles.input} ${styles.name} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="text"
        placeholder="نام خانوادگی"
        {...register("lastName")}
      />
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
      <input
        className={`${styles.input}  text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="password"
        placeholder="رمز عبور"
        {...register("password")}
      />
      {errors.password && (
        <p style={{ direction: "rtl" }} role="alert">
          {errors.password.message}
        </p>
      )}
      <input
        className={`${styles.input}  text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
        type="confirmedPassword"
        placeholder="تکرار رمز عبور"
        {...register("confirmedPassword")}
      />
      {errors.confirmedPassword && (
        <p style={{ direction: "rtl" }} role="alert">
          {errors.confirmedPassword.message}
        </p>
      )}
      {serverError && (
        <p style={{ direction: "rtl" }} role="alert">
          {serverError}
        </p>
      )}
      <div className="text-center md:text-center">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
          ثبت نام
        </button>
        <Link
          className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4"
          href="/login"
        >
          حساب کاربری دارید
        </Link>
      </div>
    </form>
  );
}
