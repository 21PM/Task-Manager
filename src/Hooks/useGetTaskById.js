import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "../Api/api";

const useGetTaskById = (id) => {
  return useQuery({
    queryKey: ["getTaskById", id],
    queryFn: () => getTaskById({ id }),
    keepPreviousData: true,
  });
};

export default useGetTaskById;
