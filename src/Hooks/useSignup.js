import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { signupApi } from "../Api/api.js";
import { toast } from "react-toastify";

export const useSignup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("Account created successfully. Please login.");
      navigate("/login", { replace: true });
      return {
        isSuccess: true,
        data: data,
        error: null,
      };
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
      return {
        isSuccess: false,
        data: null,
        error: error,
      };
    },
  });
};
