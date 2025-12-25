import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Skeleton from "../Components/Skeleton";
const ProtectedRoute = () => {
  const { auth } = useAuth();
  if (auth?.isLoading) {
    return <Skeleton />;
  }
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
