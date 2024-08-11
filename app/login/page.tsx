import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import emailI from "@/public/emailIcon.svg";
import passwordI from "@/public/passwordIcon.svg";
import Link from "next/link";

const Login = () => {
  return (
    <main className="p-[32px] md:flex md:justify-center md:items-center md:h-screen md:bg-Dr_White">
      <div className="container md:max-w-[476px]">
        <header className="mb-16 md:mb-[51px] md:block ">
          <Image src={logo} alt="logo" className="md:mx-auto" priority />
        </header>
        <div className="md:p-10 md:rounded-xl md:bg-white">
          <form>
            <h1 className="text-2xl md:text-[32px] font-bold leading-9 md:leading-[48px] mb-[9px] md:mb-2 text-Carbon">
              Login
            </h1>
            <p className="text-[16px] font-normal leading-6 mb-10 text-Industrial_Revolution">
              Add your details below to get back into the app
            </p>
            <div className="text-Carbon font-normal mb-6 ">
              <label htmlFor="email" className="text-[12px] leading-[18px]">
                Email address
              </label>
              <div className="border-[1px] border-solid border-Orochimaru rounded-[8px] flex justify-start items-center mt-[4px] px-[16px] py-[12px] gap-[12px]">
                <Image src={emailI} alt="email" />
                <input
                  type="email"
                  className="w-[100%]  focus:outline-none"
                  placeholder="e.g. alex@email.com"
                />
                <span className="ml-auto text-Red_Orange text-[12px] leading-[18px] font-normal">
                  0
                </span>
              </div>
            </div>
            <div className="text-Carbon font-normal mb-6">
              <label htmlFor="password" className="text-[12px] leading-[18px]">
                Password
              </label>
              <div className="border-[1px] border-solid border-Orochimaru rounded-[8px] flex justify-start items-center px-[16px]  mt-[4px] py-[12px] gap-[12px]">
                <Image src={passwordI} alt="email" />
                <input
                  type="password"
                  className="w-[100%] focus:outline-none"
                  placeholder="Enter your password"
                />
                <span className="ml-auto text-Red_Orange text-[12px] leading-[18px] font-normal">
                  0
                </span>
              </div>
            </div>
            <button className="bg-Pink_OCD hover:bg-Winterspring_Lilac duration-200 transition-all ease-linear w-full text-[16px] font-semibold text-white leading-[24px] px-[27px] py-[11px] rounded-[8px] hover:shadow-custom-purple">
              Login
            </button>
          </form>
          <p className="text-[16px] font-normal mt-6 leading-[24px] flex flex-col justify-center items-center md:flex-row md:gap-[5px]">
            <span>Don’t have an account?</span>
            <Link href="/register" className="text-Pink_OCD cursor-pointer ">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
