"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast, ToastOptions } from "react-toastify";

const baseToast: ToastOptions = {
  position: "top-left",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  transition: Bounce,
};

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const image = String(formData.get("image") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    // Browser er `required` bypass korleo (ba shudhu space dile) ekhane atkabe
    if (!name) {
      toast.error("নাম দিতে হবে", { ...baseToast, theme: "colored" });
      return;
    }
    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে", {
        ...baseToast,
        theme: "colored",
      });
      return;
    }

    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      ...(image ? { image } : {}),
      callbackURL: "/",
    });
    setLoading(false);

    if (error) {
      toast.error(error.message, { ...baseToast, theme: "colored" });
      return;
    }

    if (data) {
      toast.success("ইমেইল থেকে Verify করুন", {
        ...baseToast,
        theme: "dark",
      });
      
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  const handleGithubSignUp = async () => {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" });
  };

  return (
    <div className="mx-auto mt-8 flex w-full max-w-md flex-col justify-center">
      <h1 className="pt-3 pb-6 text-center text-xl font-bold text-red-700 sm:pb-8 sm:text-2xl">
        সাইন আপ
      </h1>

      <div className="flex flex-col justify-center gap-3 pb-4 sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="btn w-full border-[#e5e5e5] bg-white text-black sm:flex-1"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google
        </button>

        <button
          type="button"
          onClick={handleGithubSignUp}
          className="btn w-full border-black bg-black text-white sm:flex-1"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          GitHub
        </button>
      </div>

      <div className="divider text-sm text-gray-500">অথবা</div>

      <form onSubmit={onSubmit}>
        <fieldset className="flex flex-col gap-2 rounded-box">
          <label htmlFor="name" className="label text-gray-800">
            নাম
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input w-full"
            placeholder="Name"
          />

          <label htmlFor="image" className="label text-gray-800">
            Image URL (ঐচ্ছিক)
          </label>
          <input
            id="image"
            name="image"
            type="url"
            className="input w-full"
            placeholder="https://..."
          />

          <label htmlFor="email" className="label text-gray-800">
            ইমেইল
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input w-full"
            placeholder="Email"
          />

          <label htmlFor="password" className="label text-gray-800">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="input w-full"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn mt-4 w-full bg-red-700 text-white"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "সাইন আপ করুন"
            )}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;