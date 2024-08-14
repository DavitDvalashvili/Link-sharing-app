"use client";
import { toast } from "react-toastify";
import { signIn, signOut, useSession } from "next-auth/react";

const Profile = () => {
  const handleLogout = async () => {
    toast.success("signOuted");
    await signOut();
    console.log(sessionStatus);
  };

  const { data: session, status: sessionStatus } = useSession();

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-Pink_OCD hover:bg-Winterspring_Lilac duration-200 transition-all ease-linear w-full text-[16px] font-semibold text-white leading-[24px] px-[27px] py-[11px] rounded-[8px] hover:shadow-custom-purple"
      >
        logout
      </button>
    </div>
  );
};

export default Profile;
