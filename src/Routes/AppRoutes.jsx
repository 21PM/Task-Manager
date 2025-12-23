import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";
import TasksPage from "../Pages/Tasks/TasksPage";
import Admin from "../Pages/Admin/Admin";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useCheckAuth } from "../Hooks/useCheckAuth";
const AppRoutes = () => {
  useCheckAuth();
  const { auth } = useAuth();
  useEffect(() => {
    console.log({ auth });
  }, [auth?.isAuthenticated, auth?.isLoading]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          auth?.isLoading ? (
            <p>Loading ....</p>
          ) : auth?.isAuthenticated ? (
            <Navigate to="/tasks" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Public routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
