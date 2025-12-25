import { useState } from "react";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import TasksPage from "./Pages/Tasks/TasksPage";
import CreateTaskForm from "./Pages/Tasks/TaskComponents/CreateTaskForm";
import AppRoutes from "./Routes/Approutes";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <div className="bg-background-light  w-full min-h-screen flex items-center justify-center">
            {/* <Login /> */}
            {/* <TasksPage /> */}
            {/* <CreateTaskForm /> */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
            />

            <AppRoutes />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
