"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import emailI from "@/public/emailIcon.svg";
import passwordI from "@/public/passwordIcon.svg";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { iLoginForm } from "@/Types";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingGithub, setLoadingLoginGithub] = useState<boolean>(false);
  const { data: session, status: sessionStatus } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iLoginForm>();

  const onSubmit: SubmitHandler<iLoginForm> = async (data) => {
    setLoadingLogin(true);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        ...data,
      });
      if (response?.status == 200) {
        toast.success("You are successfully logged in");

        console.log(session?.user);
      } else {
        toast.error(`${response?.error}`);
      }

      setLoadingLogin(false);
    } catch (error: any) {
      setLoadingLogin(false);
    }
  };

  const handleGitHubSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoadingLoginGithub(true);
    try {
      await signIn("github");
      toast.success("You are successfully logged in");
    } catch (error: any) {
      setLoadingLoginGithub(false);

      console.error(error);
    }
  };

  return (
    <main className="p-[32px] md:flex md:justify-center md:items-center md:h-screen md:bg-Dr_White">
      <div className="container md:max-w-[476px]">
        <header className="mb-16 md:mb-[51px] md:block ">
          <Image src={logo} alt="logo" className="md:mx-auto" priority />
        </header>
        <div className="md:p-10 md:rounded-xl md:bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl md:text-[32px] font-bold leading-9 md:leading-[48px] mb-[9px] md:mb-2 text-Carbon">
              Login
            </h1>
            <p className="text-[16px] font-normal leading-6 mb-10 text-Industrial_Revolution">
              Add your details below to get back into the app
            </p>
            <div className="text-Carbon font-normal mb-6 ">
              <label
                htmlFor="email"
                className={`text-[12px] leading-[18px] ${
                  errors.email ? "text-Red_Orange" : "text-Carbon"
                } `}
              >
                Email address
              </label>
              <div
                className={`border-[1px] border-soli rounded-[8px] flex justify-start items-center mt-[4px] px-[16px] py-[12px] gap-[12px] ${
                  errors.email ? "border-Red_Orange" : "border-Orochimaru"
                }`}
              >
                <Image src={emailI} alt="email" />
                <input
                  type="text"
                  className="w-[75%]  focus:outline-none"
                  placeholder="e.g. alex@email.com"
                  {...register("email", {
                    required: "Can’t be empty",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  autoComplete="email"
                />
                <span className=" text-Red_Orange text-[12px] leading-[18px] font-normal md:w-[110px] text-center">
                  {errors.email?.message}
                </span>
              </div>
            </div>

            <div className="text-Carbon font-normal mb-6">
              <label
                htmlFor="password"
                className={`text-[12px] leading-[18px] ${
                  errors.password ? "text-Red_Orange" : "text-Carbon"
                } `}
              >
                Password
              </label>
              <div
                className={`border-[1px] border-solid rounded-[8px] flex justify-start items-center px-[16px]  mt-[4px] py-[12px] gap-[12px] ${
                  errors.password ? "border-Red_Orange" : "border-Orochimaru"
                } `}
              >
                <Image src={passwordI} alt="password" />
                <input
                  type="password"
                  className="w-[75%] focus:outline-none"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Can’t be empty",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,!@#$%^&*()_+{}[\]:;<>,.?/~\\-]{8,}$/,
                      message: "Invalid Password",
                    },
                  })}
                  autoComplete="current-password"
                />
                {errors.password && (
                  <span className="ml-auto text-Red_Orange text-[12px] leading-[18px] font-normal md:w-[110px] text-center">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-Pink_OCD hover:bg-Winterspring_Lilac duration-200 transition-all ease-linear w-full text-[16px] font-semibold text-white leading-[24px] px-[27px] py-[11px] rounded-[8px] hover:shadow-custom-purple"
              disabled={loadingLogin}
            >
              {loadingLogin ? "Loading..." : "Login"}
            </button>
          </form>
          <button
            onClick={handleGitHubSignIn}
            className="bg-black mt-[24px] duration-200 transition-all ease-linear w-full text-[16px] font-semibold text-white leading-[24px] px-[27px] py-[11px] rounded-[8px]"
            disabled={loadingGithub}
          >
            {loadingGithub ? "Loading..." : "Github"}
          </button>
          <p className="text-[16px] font-normal mt-6 leading-[24px] flex flex-col justify-center items-center md:flex-row md:gap-[5px]">
            <span>Don’t have an account?</span>
            <Link
              href="/register"
              className="text-Pink_OCD cursor-pointer hover:font-bold"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
