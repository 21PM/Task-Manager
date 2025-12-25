import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createTaskApi } from "../Api/api.js";

const useCreateTask = (onClose) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTaskApi,
    onSuccess: (data) => {
      toast.success("Task created successfully");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["myTasks"] });
    },
    onError: (error) => {
      toast.error("Failed to create task");
    },
  });
};

export default useCreateTask;
