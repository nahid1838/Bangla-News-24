"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const FALLBACK_AVATAR =
  "https://i.pinimg.com/736x/d8/49/60/d8496092785fd2db229247487c9f142a.jpg";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const closeMenu = () => {
    // DaisyUI dropdown focus-based, tai blur korlei bondho hoye jay
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const handleSignOut = async () => {
    closeMenu();
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="absolute top-3 right-3 z-50 sm:top-4 sm:right-5">
      {/* Loading: sign in button flash korar bodole skeleton */}
      {isPending ? (
        <div className="skeleton h-10 w-10 shrink-0 rounded-full sm:w-36 sm:rounded-full" />
      ) : user ? (
        <div className="dropdown dropdown-end">
          {/* Trigger */}
          <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-base-300 bg-base-100/80 py-1 pr-1 pl-1 shadow-sm backdrop-blur transition hover:border-primary/50 hover:shadow-md sm:pr-3"
          >
            <div className="avatar">
              <div className="w-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                <img
                  alt={user.name || "User"}
                  src={user.image || FALLBACK_AVATAR}
                />
              </div>
            </div>
            <span className="hidden max-w-32 truncate text-sm font-semibold sm:block">
              {user.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden h-4 w-4 opacity-60 sm:block"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Dropdown */}
          <ul
            tabIndex={0}
            className="dropdown-content menu mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl"
          >
            <li className="pointer-events-none px-3 pt-2 pb-3">
              <div className="flex flex-col items-start gap-0.5 p-0">
                <span className="max-w-full truncate text-sm font-bold">
                  {user.name}
                </span>
                {user.email && (
                  <span className="max-w-full truncate text-xs opacity-60">
                    {user.email}
                  </span>
                )}
              </div>
            </li>
            <div className="divider my-0" />
            <li>
              <Link href="/profile" onClick={closeMenu} className="py-2.5">
                আমার প্রোফাইল
              </Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="py-2.5 text-error font-semibold hover:bg-error/10"
              >
                সাইন আউট
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 rounded-full border border-base-300 bg-base-100/80 p-1 shadow-sm backdrop-blur sm:gap-2">
          <Link
            href="/signIn"
            className="btn btn-ghost rounded-full whitespace-nowrap px-3 sm:px-5"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signUp"
            className="btn bg-red-700 text-white font-semibold rounded-full whitespace-nowrap px-3 shadow sm:px-5"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;