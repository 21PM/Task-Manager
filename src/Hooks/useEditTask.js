import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editTaskApi } from "../Api/api.js";

const useEditTask = (onClose) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTaskApi,
    onSuccess: (data) => {
      toast.success("Task edited successfully");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["myTasks"] });
    },
    onError: (error) => {
      console.log("error from 14", error);

      toast.error(
        error?.response?.data?.message ||
          "Editing task failed. Please try again."
      );
    },
  });
};

export default useEditTask;
