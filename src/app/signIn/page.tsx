"use client";

const SignInPage = () => {
  return (
    <div className="flex justify-center mt-8">
      <form>
        <fieldset className=" flex flex-col gap-2 rounded-box w-lg p-4">
          <legend className="text-center py-2 text-xl text-red-700 font-bold">সাইন ইন</legend>

          <label className="label text-gray-800">ইমেইল</label>
          <input name="email" type="email" className="input w-lg" placeholder="Email" />

          <label className="label text-gray-800">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-lg" placeholder="Password" />

          <button className="btn bg-red-700 text-white mt-4 w-lg">সাইন ইন করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
