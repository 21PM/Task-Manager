import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";
import TasksPage from "../Pages/Tasks/TasksPage";
import Admin from "../Pages/Admin/Admin";

const AppRoutes = () => {
  const state = {
    token: "test",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            state.token ? (
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
    </BrowserRouter>
  );
};

export default AppRoutes;
