import React from "react";
import Header from "../../Components/Header";
import { FiPlus } from "react-icons/fi";
import CreateTaskSection from "./TaskComponents/CreateTaskSection";

function TasksPage() {
  return (
    <div className="w-full min-h-screen bg-background-light">
      <Header />
      <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CreateTaskSection />
      </main>
    </div>
  );
}

export default TasksPage;
