import api from "./axios";

export const loginApi = async (payload) => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const fetchMe = async () => {
  const { data } = await api.get("/auth/me", {
    withCredentials: true,
  });
  return data;
};

export const logoutApi = async () => {
  const { data } = await api.post("/auth/logout", {
    withCredentials: true,
  });
  return data;
};

export const signupApi = async (payload) => {
  const { data } = await api.post("/auth/signup", payload);
  return data;
};

export const createTaskApi = async (payload) => {
  const { data } = await api.post("/task/create", payload);
  return data;
};

export const editTaskApi = async ({ id, payload }) => {
  const { data } = await api.post(`/task/edit/${id}`, payload);
  return data;
};

// export const getMyTasksApi = async ({ page, limit }) => {
//   const { data } = await api.get(`/task/get?page=${page}&limit=${limit}`);
//   return data;
// };

export const getMyTasksApi = async ({
  page,
  limit,
  taskStatus,
  priority,
  sort,
  search,
}) => {
  const { data } = await api.get(`/task/get`, {
    params: {
      page,
      limit,
      ...(taskStatus && { status: taskStatus }),
      ...(priority && { priority }),
      ...(search && { search }),
      ...(sort && { sort }), // asc | desc
    },
  });
  return data;
};

export const getTaskById = async ({ id }) => {
  const { data } = await api.get(`/task/get/${id}`);
  return data;
};

export const deleteTaskApi = async ({ id }) => {
  const { data } = await api.delete(`/task/delete/${id}`);
  return data;
};
