import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskApi, logoutApi } from "../Api/api.js";
import { toast } from "react-toastify";
export const useDeleteTask = (onClose) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      toast.success("Task Deleted successfully!");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["myTasks"] });
    },
    onError: (error) => {
      console.log("error fgrom 13", error);
      toast.error(error?.response?.data?.message || "Error deleting task");
    },
  });
};
