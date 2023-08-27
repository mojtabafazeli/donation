"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useApp } from "../../RealmApp";

import styles from "./FormLogin.module.css";

export default function FormLogin() {
  const { push } = useRouter();
  const { currentUser } = useApp();

  const [signUp, setSignUp] = React.useState(false);

  if (currentUser) push("/home");

  const { register, handleSubmit } = useForm();
  const { logIn, register: registerUser } = useApp();

  const onSubmit = async (data: any) => {
    if (signUp) {
      await (registerUser as Function)(data);
    } else {
      await (logIn as Function)(data);
    }
  };

  return (
    <section className="h-screen flex flex-col flex-col mt-5 space-y-10 md:space-y-0 md:space-x-16 items-center ">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          ></button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
        </div>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
          {signUp && (
            <>
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
            </>
          )}
          <input
            className={`${styles.input} text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
            type="text"
            placeholder="آدرس ایمیل"
            {...register("email")}
          />
          <input
            className={`${styles.input}  text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded`}
            type="password"
            placeholder="رمز عبور"
            {...register("password")}
          />
          {signUp ? (
            <div className="text-center md:text-center">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                ثبت نام
              </button>
              <button
                className="block mx-auto mt-3 text-red-600 hover:underline hover:underline-offset-4"
                onClick={() => setSignUp(false)}
              >
                حساب کاربری دارید
              </button>
            </div>
          ) : (
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
                <button
                  className="text-red-600 hover:underline hover:underline-offset-4 mr-1"
                  onClick={() => setSignUp(true)}
                >
                  ثبت نام کنید
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
