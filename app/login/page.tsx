import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import emailI from "@/public/emailIcon.svg";
import passwordI from "@/public/passwordIcon.svg";

const Login = () => {
  return (
    <main className="p-[32px]">
      <header className="mb-[64px]">
        <Image src={logo} alt="logo" priority />
      </header>
      <form>
        <h1 className="text-[24px] font-bold leading-[36px] mb-[9px] text-Carbon">
          Login
        </h1>
        <p className="text-[16px] font-normal leading-[36px] mb-[40px] text-Industrial_Revolution">
          Add your details below to get back into the app
        </p>
        <div className="text-Carbon font-normal ">
          <label htmlFor="email" className="font-[12px] leading-[18px]">
            Email address
          </label>
          <div className="border-[1px] border-solid border-Orochimaru rounded-[8px] flex justify-start items-center px-[16px] py-[12px] gap-[12px]">
            <Image src={emailI} alt="email" />
            <input type="email" />
            <span className="ml-auto">0</span>
          </div>
        </div>
        <div className="text-Carbon font-normal">
          <label htmlFor="password" className="font-[12px] leading-[18px]">
            Password
          </label>
          <div className="border-[1px] border-solid border-Orochimaru rounded-[8px] flex justify-start items-center px-[16px] py-[12px] gap-[12px]">
            <Image src={passwordI} alt="email" />
            <input type="password" />
            <span className="ml-auto">0</span>
          </div>
        </div>
        <button>Login</button>
      </form>
      <p>
        {"Don’t have an account?"} <span>Create account</span>
      </p>
    </main>
  );
};

export default Login;
