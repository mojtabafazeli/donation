"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useApp } from "@/app/RealmApp";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormAuth.module.css";
import { signInSchema as schema } from "@/app/validators/yup";

export default function FormSignIn() {
  const [serverError, setServerError] = React.useState<String>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { signIn } = useApp();

  const submitForm = async (data: any) => {
        await (signIn as Function)(data)
        .then((e: { message: string }) => {
          if (e?.message) setServerError(e?.message);
        })
        .catch ((e: any) => {
        console.log(e)
        setServerError(e);
      })
  };

  return (
        <form className="flex flex-col gap-1" onSubmit={handleSubmit(submitForm)}>
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
          {/* {serverError && (
            <p style={{ direction: "rtl" }} role="alert">
              {serverError}
            </p>
          )} */}
            <div>
              <div className="mt-4 flex justify-between font-semibold text-sm">
                {/* TODO to be added in next version */}
                {/* <label className='flex items-center text-slate-500 hover:text-slate-600 cursor-pointer'>
                  <span> مرا به خاطر بسپار</span>
                  <input className='ml-1' type='checkbox' />
                </label> */}
              </div>
              <div className="flex justify-between items-center text-center md:text-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                  ورود
                </button>
                <Link
                  className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                  href="/reset-password"
                >
                  یادآوری رمز عبور
                </Link>
              </div>
              <div className="mt-4 font-semibold text-sm text-slate-500 text-right md:text-center">
                <span>حساب کاربری ندارید؟</span>
                <Link
                  className="text-red-600 hover:underline hover:underline-offset-4 mr-1"
                  href="/register"
                >
                  ثبت نام کنید
                </Link>
              </div>
            </div>
        </form>
  );
}
