"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "validator";
import { useApp } from "@/app/RealmApp";
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

export default function FormPasswordReset() {
  const [emailSent, setEmailSent] = React.useState(false);
  const { sendPasswordResetEmail: sendEmail } = useApp();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const searchParams = useSearchParams();

  const onSubmit = async ({ email }: { email: string; }) => {
    sendEmail(email)
    .then(() => setEmailSent(true));
  }

  return (
    <section className="h-screen flex flex-col flex-col mt-5 space-y-10 md:space-y-0 md:space-x-16 items-center">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="text-center md:w-1/3 max-w-sm">
        {emailSent ? (
          <p className="my-5 text-red-600">
            لینک بازیابی رمز عبور به آدرس ایمیل شما ارسال شد
          </p>
        ) : (
              <form
                className="flex flex-col gap-1 my-3"
                onSubmit={handleSubmit(onSubmit)}
              >
              {searchParams?.get('token') ?
                (
                  <>
                      <input
                        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
                        type="password"
                        placeholder="رمز عبور"
                        {...register("password")}
                        aria-valid={errors.password ? "true" : "false"}
                      />
                      {errors.password &&
                        (
                          <p style={{ direction: "rtl" }} role="alert">
                            {errors.password.message}
                          </p>
                        )
                      } 
                      <input
                        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
                        type="password"
                        placeholder="تکرار رمز عبور"
                        {...register("confirmedPassword")}
                        aria-valid={errors.confirmedPassword ? "true" : "false"}
                      />
                      {errors.confirmedPassword &&
                        (
                          <p style={{ direction: "rtl" }} role="alert">
                            {errors.confirmedPassword.message}
                          </p>
                        )
                      } 
                      <div className="text-center md:text-center">
                        <button className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4">
                           تغییر رمز
                        </button>
                      </div>
                    </>
                ):(
                    <>
                      <input
                        className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
                        type="text"
                        placeholder="آدرس ایمیل"
                        {...register("email")}
                        aria-valid={errors.email ? "true" : "false"}
                      />
                    {errors.email &&
                        (
                          <p style={{ direction: "rtl" }} role="alert">
                            {errors.email.message}
                          </p>
                        )
                      } 
                      <div className="text-center md:text-center">
                        <button className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4">
                          ارسال ایمیل
                        </button>
                      </div>
                    </>
                  )
                }
              </form>
            )
        }
        <Link
          className="center text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
          href="/auth"
        >
          بازگشت
        </Link>
      </div>
    </section>
  );
}
