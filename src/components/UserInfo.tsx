"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className=" absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex flex-col items-center gap-1">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  alt={user?.name || "User Name" as string}
                  src={user?.image || "https://i.pinimg.com/736x/d8/49/60/d8496092785fd2db229247487c9f142a.jpg" as string}
                />
              </div>
            </div>
          </Link>
          <h2 className="font-semibold">{user?.name}</h2>
          <button
            onClick={handleSignOut}
            className="btn bg-red-600 btn-sm font-bold text-white"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/signIn"}>
            <button className="btn">সাইন ইন</button>
          </Link>
          <Link href={"/signUp"}>
            <button className="btn bg-red-600 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
