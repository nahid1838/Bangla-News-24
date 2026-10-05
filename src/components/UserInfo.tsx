"use client";

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className=" absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
          <div className="flex flex-col items-center gap-1">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
            <h2 className="font-semibold">{user?.name}</h2>
          <button onClick={handleSignOut} className="btn bg-red-600 btn-sm font-bold text-white">Sign Out</button>
          </div>
      ) : (
        <div>
          <button className="btn">সাইন ইন</button>
          <button className="btn bg-red-600 text-white">সাইন আপ</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
