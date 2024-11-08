//cookies-next
import { setCookie } from "cookies-next";

//next
import { useRouter } from "next/router";

//react-hook-form
import { useForm } from "react-hook-form";

//services
import { useLogin } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./Form.module.css";
import Logo from "../icons/Logo";

function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const username = watch("username");

  const { mutate } = useLogin();

  const onSubmit = () => {
    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          setCookie("token", data.data?.token);
          router.push("/");
          successToast("ورود شما با موفقیت انجام شد");
        },
        onError: (error) => {
          if (error.status === 400)
            errorToast("نام کاربری یا رمز عبور اشتباه است");
        },
      }
    );
  };
  return (
    <div className={styles.formContainer}>
      <h1>بوت کمپ بوتواستارت</h1>
      <div className={styles.form}>
        <Logo />
        <h3>فرم ورود</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="نام کاربری"
              {...register("username", {
                required: "نام کاربری خود را وارد کنید.",
              })}
            />
            <p>{errors.username?.message}</p>
          </div>

          <div>
            <input
              placeholder="رمز عبور"
              type="password"
              {...register("password", {
                required: "رمز عبور خود را وارد کنید.",
                minLength: {
                  value: 6,
                  message: "رمز عبور نباید کمتر از شش کاراکتر باشد.",
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>

          <button type="submit">ورود</button>
        </form>
        <span onClick={() => router.push("/register")}>ایجاد حساب کاربری!</span>
      </div>
    </div>
  );
}

export default Login;
