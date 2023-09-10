import * as yup from "yup";
import validator from "validator";
import { passwordRules } from "@/app/constants/formConstants";

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("لطفا نام خود را وارد کنید"),
    lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    email: yup
      .string()
      .required("لطفا آدرس ایمیل خود را وارد کنید")
      .test("آدرس ایمیل معتبر نیست", "آدرس ایمیل معتبر نیست", (value) =>
        validator.isEmail(value)
      ),
    password: yup
      .string()
      .required("لطفا رمز عبور جدید را وارد کنید")
      .matches(
        passwordRules,
        "رمز عبور باید به انگلیسی و شامل حروف بزرگ و کوچک و عدد باشد."
      ),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمز عبور همسان نیست")
      .required(""),
  })
  .required();

export const signInSchema = yup
  .object({
    email: yup
      .string()
      .required("لطفا آدرس ایمیل خود را وارد کنید")
      .test("آدرس ایمیل معتبر نیست", "آدرس ایمیل معتبر نیست", (value) =>
        validator.isEmail(value)
      ),
    password: yup
      .string()
      .required("لطفا رمز عبور جدید را وارد کنید")
      .matches(
        passwordRules,
        "رمز عبور باید به انگلیسی و شامل حروف بزرگ و کوچک و عدد باشد."
      ),
  })
  .required();
