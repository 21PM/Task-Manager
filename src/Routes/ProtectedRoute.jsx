import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const ProtectedRoute = () => {
  const { auth } = useAuth();
  if (auth?.isLoading) {
    return <p>Loading....</p>;
  }
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
