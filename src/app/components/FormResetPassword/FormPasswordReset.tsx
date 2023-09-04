"use client";
import React from "react";
import Image from "next/image";
import FormSendResetPassword from "./FormSendResetPassword";
import FormUpdatePassword from "./FormUpdatePassword";
import Link from "next/link";
import * as yup from "yup";
import validator from "validator";
import { useApp } from "@/app/RealmApp";
import { useSearchParams } from "next/navigation";

export default function FormPasswordReset() {
  const { sendPasswordResetEmail: sendEmail, resetPassword } = useApp();

  const searchParams = useSearchParams();
  const token = searchParams?.get("token");

  return (
    <section className="h-screen flex flex-col flex-col mt-5 space-y-10 md:space-y-0 md:space-x-16 items-center">
      <div className="md:w-1/3 max-w-sm">
        <Image
          width={400}
          height={400}
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="text-center md:w-1/3 max-w-sm">
        {token ? (
          <FormUpdatePassword onSubmit={resetPassword} />
        ) : (
          <FormSendResetPassword onSubmit={sendEmail} />
        )}
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
