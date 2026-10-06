"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleEditProfile = () => {
    setShow(!show);
  };

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className="h-65 w-65 rounded-full object-cover"
          src={
            user?.image ||
            ("https://i.pinimg.com/736x/d8/49/60/d8496092785fd2db229247487c9f142a.jpg" as string)
          }
          alt={user?.name || ("User Image" as string)}
        />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-bold text-sky-600">{user?.name}</h3>
          <p className="font-semibold text-lg">{user?.email}</p>
        </div>
      </div>

      {show === false ? (
        <div className="flex justify-center py-2">
            <button
          onClick={handleEditProfile}
          className="btn btn-active btn-secondary"
        >
          Edit Profile
        </button>
        </div>
      ) : (
        <form className="flex justify-center" onSubmit={handleUpdateProfile}>
          <fieldset className=" flex flex-col gap-2 rounded-box w-lg p-4">
            <label className="label text-gray-800">নাম</label>
            <input
              name="name"
              type="name"
              className="input w-lg"
              placeholder="Name"
            />

            <label className="label text-gray-800">Image URL</label>
            <input
              name="image"
              type="url"
              className="input w-lg"
              placeholder="Image"
            />

            <button
              type="submit"
              className="btn bg-red-700 text-white mt-4 w-lg"
            >
              Update Profile
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default UpdateProfilePage;
