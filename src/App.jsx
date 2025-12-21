import { useState } from "react";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import TasksPage from "./Pages/Tasks/TasksPage";
import CreateTaskForm from "./Pages/Tasks/TaskComponents/CreateTaskForm";
import AppRoutes from "./Routes/Approutes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background-light  w-full min-h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <TasksPage /> */}
      {/* <CreateTaskForm /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
