import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createTaskApi } from "../Api/api.js";

const useCreateTask = (onClose) => {
  return useMutation({
    mutationFn: createTaskApi,
    onSuccess: (data) => {
      toast.success("Task created successfully");
      onClose();
      // useQueryClient.invalidateQueries({queryKey:["tasks"]});
    },
    onError: (error) => {
      toast.error("Failed to create task");
    },
  });
};

export default useCreateTask;
