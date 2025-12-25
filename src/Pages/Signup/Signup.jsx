import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import useHandleForm from "../../Hooks/useHandleForm";
import { useSignup } from "../../Hooks/useSignup";

function Signup() {
  const { formData, handleChangeFormData, showPassword, setShowPassword } =
    useHandleForm();
  const { mutate: signup, isPending } = useSignup();

  function handleSignup(e) {
    e.preventDefault();
    const payload = {
      email: formData?.email,
      password: formData?.password,
      name: formData?.name,
    };
    signup(payload);
  }

  return (
    <div class="w-full max-w-[480px] bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">
      <div class="px-8 pt-10 pb-2 flex flex-col items-center">
        <div class="flex items-center gap-3 text-[#111418] mb-6">
          <div class="size-8 text-primary">
            <svg
              fill="none"
              viewbox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">
            Switch My Loan
          </h2>
        </div>
        <h1 class="text-[#111418] text-3xl font-bold leading-tight tracking-[-0.015em] text-center">
          Create your account
        </h1>
        <p class="text-[#617589] text-base font-normal leading-normal text-center mt-3">
          Start managing your secure tasks today.
        </p>
      </div>
      {/* <!-- Form --> */}
      <div class="px-8 py-8">
        <form action="#" class="flex flex-col gap-5" onSubmit={handleSignup}>
          {/* <!-- Name Field --> */}
          <div class="flex flex-col gap-1.5">
            <label class="text-[#111418] text-sm font-medium leading-normal">
              Full Name
            </label>
            <div class="relative flex w-full flex-1 items-center rounded-lg">
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border bg-white focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all"
                placeholder="John Doe"
                type="text"
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleChangeFormData}
              />
            </div>
          </div>
          {/* <!-- Email Field --> */}
          <div class="flex flex-col gap-1.5">
            <label class="text-[#111418] text-sm font-medium leading-normal">
              Email
            </label>
            <div class="relative flex w-full flex-1 items-center rounded-lg">
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all"
                placeholder="name@abc.com"
                type="email"
                id="email"
                name="email"
                value={formData?.email}
                onChange={handleChangeFormData}
              />
            </div>
          </div>
          {/* <!-- Password Field --> */}
          <div class="flex flex-col gap-1.5">
            <label class="text-[#111418] text-sm font-medium leading-normal">
              Password
            </label>
            <div class="relative flex w-full flex-1 items-center rounded-lg">
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white focus:border-primary h-12 placeholder:text-[#617589] pl-4 pr-12 text-base font-normal leading-normal transition-all"
                placeholder="Create a password"
                type="password"
                id="password"
                name="password"
                value={formData?.password}
                onChange={handleChangeFormData}
              />
              <button
                class="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 cursor-pointer text-[#617589] hover:text-[#111418] transition-colors focus:outline-none"
                type="button"
              >
                <span class="material-symbols-outlined text-[20px]">
                  <IoEyeOutline />
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Password Rules --> */}
          {/* <div class="flex flex-col gap-2 p-3 bg-background-light rounded-lg border border-transparent">
            <p class="text-[#111418] text-xs font-semibold">
              Password must contain:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
              <div class="flex items-center gap-2 text-[#617589] text-xs">
                <span class="material-symbols-outlined text-[14px] text-green-500">
                  check_circle
                </span>
                At least 8 characters
              </div>
              <div class="flex items-center gap-2 text-[#617589] text-xs">
                <span class="material-symbols-outlined text-[14px] text-[#dbe0e6]">
                  radio_button_unchecked
                </span>
                1 uppercase letter
              </div>
              <div class="flex items-center gap-2 text-[#617589] text-xs">
                <span class="material-symbols-outlined text-[14px] text-[#dbe0e6]">
                  radio_button_unchecked
                </span>
                1 number
              </div>
              <div class="flex items-center gap-2 text-[#617589] text-xs">
                <span class="material-symbols-outlined text-[14px] text-[#dbe0e6]">
                  radio_button_unchecked
                </span>
                1 special character
              </div>
            </div>
          </div> */}
          {/* <!-- Submit Button --> */}
          <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-sm mt-1">
            Sign Up
          </button>
          {/* <!-- Footer Link --> */}
          <p class="text-[#617589] text-sm text-center">
            Already have an account?
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
