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

export const getMyTasksApi = async ({ page, limit }) => {
  const { data } = await api.get(`/task/get?page=${page}&limit=${limit}`);
  return data;
};

export const getTaskById = async ({ id }) => {
  const { data } = await api.get(`/task/get/${id}`);
  return data;
};
