import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { logoutApi } from "../Api/api.js";
import { toast } from "react-toastify";
export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      setAuth({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      toast.success("Logged out successfully!");
      queryClient.removeQueries({ queryKey: ["auth-me"] });
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Logout failed. Please try again."
      );
    },
  });
};
