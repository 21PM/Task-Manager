import { useQuery } from "@tanstack/react-query";
import { getMyTasksApi } from "../Api/api";

const useMyTasks = ({ page, limit, taskStatus, priority, sort, search }) => {
  return useQuery({
    queryKey: ["myTasks", page, limit, taskStatus, priority, sort, search],
    queryFn: () =>
      getMyTasksApi({ page, limit, taskStatus, priority, sort, search }),
    keepPreviousData: true,
  });
};

export default useMyTasks;
