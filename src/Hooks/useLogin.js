// hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../Api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      if (!data?.userDetails) return;
      setAuth({
        user: data.userDetails,
        isAuthenticated: true,
        isLoading: false,
      });
      toast.success("Logged in successfully!");
      return {
        isSuccess: true,
        data: data,
        error: null,
      };
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
      return {
        isSuccess: false,
        data: null,
        error: error,
      };
    },
  });
};
