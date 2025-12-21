import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = () => {
  //   const { state } = useAuth();
  const state = {
    token: "test",
  };

  if (!state.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
