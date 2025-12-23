import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import useHandleForm from "../../Hooks/useHandleForm";
import { useQuery } from "@tanstack/react-query";
import { useLogin } from "../../Hooks/useLogin";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const { mutate: login, isPending, error } = useLogin();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const { formData, handleChangeFormData, showPassword, setShowPassword } =
    useHandleForm();

  useEffect(() => {
    if (auth?.isAuthenticated) {
      navigate("/tasks", { replace: true });
    }
  }, [auth.isAuthenticated, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
    console.log("formSubmmted", formData.email, formData.password);
  }

  return (
    <div>
      <div className="w-full min-w-[448px] bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 sm:p-10 px-10">
        {/* <!-- Header / Logo Area --> */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 text-[#111418] mb-6">
            <div className="size-8 text-primary">
              <svg
                className="w-full h-full"
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
            <h2 className="text-xl font-bold leading-tight tracking-tight">
              Switch My Loan
            </h2>
          </div>
          <h1 className="text-2xl sm:text-[32px] font-bold leading-tight text-center tracking-tight">
            Welcome back
          </h1>
          <p className="text-[#617589] text-sm font-normal mt-2 text-center">
            Log in to your account to manage your tasks.
          </p>
        </div>
        {/* <!-- Login Form --> */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
          method="POST"
        >
          {/* <!-- Email Field --> */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#111418]  text-sm font-medium leading-normal"
              for="email"
            >
              Email address
            </label>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418]  focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-[#dbe0e6]  bg-white h-12 placeholder:text-[#617589]  px-4 text-base font-normal leading-normal transition-all duration-200"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
                value={formData.email}
                onChange={handleChangeFormData}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] text-[20px] pointer-events-none">
                <CiMail />
              </span>
            </div>
          </div>
          {/* <!-- Password Field --> */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                className="text-[#111418] text-sm font-medium leading-normal"
                for="password"
              >
                Password
              </label>
              <a
                className="text-sm font-semibold text-primary hover:text-blue-600 transition-colors"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative group">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418]  focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-[#dbe0e6]  bg-white  h-12 placeholder:text-[#617589]  px-4 text-base font-normal leading-normal transition-all duration-200"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChangeFormData}
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-[#111418] transition-colors cursor-pointer flex items-center justify-center"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? (
                    <FaRegEyeSlash onClick={() => setShowPassword(false)} />
                  ) : (
                    <IoEyeOutline onClick={() => setShowPassword(true)} />
                  )}
                </span>
              </button>
            </div>
            {/* <!-- Error Text Example (Hidden by default, showing static example as requested) --> */}
            <p className="text-red-500 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                error
              </span>
              Invalid email address or password.
            </p>
          </div>
          {/* <!-- Action Button --> */}
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm mt-2"
            type="submit"
          >
            <span className="truncate">Sign In</span>
          </button>
        </form>
        {/* <!-- Footer --> */}
        <div className="mt-8 pt-6 border-t border-[#f0f2f4] text-center">
          <p className="text-[#617589]  text-sm font-normal">
            Don't have an account?
            <Link
              to="/signup"
              className="font-bold text-primary hover:text-blue-600 transition-colors ml-1"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
