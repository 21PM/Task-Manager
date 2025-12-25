import { useQuery } from "@tanstack/react-query";
import { getMyTasksApi } from "../Api/api";

const useMyTasks = (page, limit) => {
  return useQuery({
    queryKey: ["myTasks", page, limit],
    queryFn: () => getMyTasksApi({ page, limit }),
    keepPreviousData: true,
  });
};

export default useMyTasks;
