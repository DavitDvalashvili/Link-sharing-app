"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import emailI from "@/public/emailIcon.svg";
import passwordI from "@/public/passwordIcon.svg";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { iRegisterForm } from "@/Types";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status: sessionStatus } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<iRegisterForm>();

  const onSubmit: SubmitHandler<iRegisterForm> = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 201) {
        toast.success(`${response.data.message}`);
        reset();
        setLoading(false);
        router.push("/login");
      }
    } catch (error: any) {
      setLoading(false);
      if ((error.response.status = 409)) {
        toast.error(`${error.response.data.message}`);
      } else if ((error.response.status = 500)) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error("Error register user");
      }
      console.error(`Error register user: ${error.response.data.message}`);
    }
  };

  //check if repeated password matches the password
  const validatePasswordRepeat = () => {
    const password = watch("password");
    const repeatPassword = watch("confirmPassword");
    if (password === repeatPassword) {
      return undefined;
    } else {
      return "Don't match";
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
              Create account
            </h1>
            <p className="text-[16px] font-normal leading-6 mb-10 text-Industrial_Revolution">
              Let’s get you started sharing your links!
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
                Create password
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
                  placeholder="At least 8 characters"
                  {...register("password", {
                    required: "Can’t be empty",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,!@#$%^&*()_+{}[\]:;<>,.?/~\\-]{8,}$/,
                      message: "Invalid Password",
                    },
                  })}
                  autoComplete="new-password"
                />
                {errors.password && (
                  <span className="ml-auto text-Red_Orange text-[12px] leading-[18px] font-normal md:w-[110px] text-center">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="text-Carbon font-normal mb-6">
              <label
                htmlFor="password"
                className={`text-[12px] leading-[18px] ${
                  errors.confirmPassword ? "text-Red_Orange" : "text-Carbon"
                } `}
              >
                Confirm password
              </label>
              <div
                className={`border-[1px] border-solid rounded-[8px] flex justify-start items-center px-[16px]  mt-[4px] py-[12px] gap-[12px] ${
                  errors.confirmPassword
                    ? "border-Red_Orange"
                    : "border-Orochimaru"
                }`}
              >
                <Image src={passwordI} alt="password" />
                <input
                  type="password"
                  className="w-[75%] focus:outline-none"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Can’t be empty",
                    validate: validatePasswordRepeat,
                  })}
                  autoComplete="new-password"
                />
                {errors.confirmPassword && (
                  <span className="ml-auto text-Red_Orange text-[12px] leading-[18px] font-normal md:w-[110px] text-center">
                    {errors.confirmPassword?.message}
                  </span>
                )}
              </div>
            </div>
            <p className="text-[12px] leading-[18px] text-Carbon font-normal mb-6">
              Password must contain at least 8 characters, one letter and one
              number.
            </p>
            <button
              type="submit"
              className="bg-Pink_OCD hover:bg-Winterspring_Lilac duration-200 transition-all ease-linear w-full text-[16px] font-semibold text-white leading-[24px] px-[27px] py-[11px] rounded-[8px] hover:shadow-custom-purple"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create new account"}
            </button>
          </form>
          <p className="text-[16px] font-normal mt-6 leading-[24px] flex flex-col justify-center items-center md:flex-row md:gap-[5px]">
            <span>Already have an account?</span>
            <Link
              href="/login"
              className="text-Pink_OCD cursor-pointer hover:font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
