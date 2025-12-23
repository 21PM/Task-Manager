// hooks/useAuthMe.ts
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../Api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
export const useCheckAuth = () => {
  const { setAuth } = useAuth();

  const { data, isError, isSuccess, isPending } = useQuery({
    queryKey: ["auth-me"],
    queryFn: fetchMe,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      console.log("onSuccess replacement", data);

      setAuth({
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    }
  }, [isSuccess, data, setAuth]);

  useEffect(() => {
    if (isError) {
      setAuth({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }, [isError, setAuth]);

  return { isPending };
};
