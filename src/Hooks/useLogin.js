// hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../Api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

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
    },
  });
};
