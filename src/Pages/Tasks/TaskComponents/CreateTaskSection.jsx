import React from "react";
import { FiPlus } from "react-icons/fi";

function CreateTaskSection() {
  return (
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 class="text-2xl font-bold text-[#111418] tracking-tight">Tasks</h2>
        <p class="text-sm text-gray-500 mt-1">
          Manage and track loan application tasks.
        </p>
      </div>
      <button class="flex items-center justify-center h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg shadow-sm transition-colors min-w-[140px]">
        <span class="material-symbols-outlined text-xl mr-2">
          <FiPlus />
        </span>
        Create Task
      </button>
    </div>
  );
}

export default CreateTaskSection;
