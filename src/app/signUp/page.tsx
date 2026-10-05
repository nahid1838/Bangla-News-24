"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";



const SignUpPage = () => {

    const onSubmit = async(e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, image: string, email: string, password: string};

        const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })

        if(data) {
            console.log(data);
            redirect("/");
        }

        if(error) {
            console.log(error);
        }

    }
  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={onSubmit}>
        <fieldset className=" flex flex-col gap-2 rounded-box w-lg p-4">
          <legend className="text-center py-2 text-xl text-red-700 font-bold">সাইন আপ</legend>

          <label className="label text-gray-800">নাম</label>
          <input name="name" type="name" className="input w-lg" placeholder="Name" />

          <label className="label text-gray-800">Image URL</label>
          <input name="image" type="url" className="input w-lg" placeholder="Image" />

          <label className="label text-gray-800">ইমেইল</label>
          <input  name="email" type="email" className="input w-lg" placeholder="Email" />

          <label className="label text-gray-800">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-lg" placeholder="Password" />

          <button type="submit" className="btn bg-red-700 text-white mt-4 w-lg">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
