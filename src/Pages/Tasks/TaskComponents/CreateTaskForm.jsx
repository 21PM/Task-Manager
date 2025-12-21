import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";

function CreateTaskForm() {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Low",
    assignee: "",
    dueDate: "",
  });

  function handleTaskFormChange(event) {
    const { name, value } = event.target;

    setTaskForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSaveTask() {
    console.log("taskForm", taskForm);
  }

  return (
    <main className="flex-1 flex items-center justify-center p-4 md:p-10">
      {/* <!-- Modal Container --> */}
      <div className="relative w-full max-w-[640px] bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden flex flex-col">
        {/* <!-- Modal Header --> */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f2f4]">
          <h1 className="text-[#111418] text-xl font-bold leading-tight">
            Create New Task
          </h1>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined">
              <IoMdClose />
            </span>
          </button>
        </div>
        {/* <!-- Form Content --> */}
        <div className="p-6 md:p-8 flex flex-col gap-6">
          {/* <!-- Title Field --> */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#111418] text-sm font-medium leading-normal"
              for="task-title"
            >
              Task Title <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white focus:border-primary h-12 placeholder:text-[#617589]  px-4 text-base font-normal leading-normal transition-all"
                id="task-title"
                placeholder="e.g., Refactor loan calculation module"
                type="text"
                name="title"
                value={taskForm?.title}
                onChange={handleTaskFormChange}
              />
            </div>
          </div>
          {/* <!-- Description Field --> */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#111418]  text-sm font-medium leading-normal"
              for="task-desc"
            >
              Description
            </label>
            <textarea
              className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418]  focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white  focus:border-primary min-h-[140px] placeholder:text-[#617589]  p-4 text-base font-normal leading-normal transition-all"
              id="task-desc"
              name="description"
              value={taskForm?.description}
              placeholder="Add details about the task requirements and acceptance criteria..."
              onChange={handleTaskFormChange}
            ></textarea>
          </div>
          {/* <!-- Row for Dropdowns --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Status Dropdown --> */}
            <div className="flex flex-col gap-2 relative">
              <label
                className="text-[#111418]  text-sm font-medium leading-normal"
                for="task-status"
              >
                Status
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full rounded-lg border border-[#dbe0e6] bg-white text-[#111418] h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  id="task-status"
                  name="status"
                  onChange={handleTaskFormChange}
                  value={taskForm.status}
                >
                  <option value="backlog">Backlog</option>
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="review">In Review</option>
                  <option value="done">Done</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <span className="material-symbols-outlined text-xl">
                    <MdOutlineExpandMore />
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Priority Dropdown --> */}
            <div className="flex flex-col gap-2 relative">
              <label
                className="text-[#111418] text-sm font-medium leading-normal"
                for="task-priority"
              >
                Priority
              </label>
              <div className="relative">
                <select
                  className="appearance-none w-full rounded-lg border border-[#dbe0e6] bg-white text-[#111418] h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  id="task-priority"
                  name="priority"
                  onChange={handleTaskFormChange}
                  value={taskForm.priority}
                >
                  <option value="low">Low</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <span className="material-symbols-outlined text-xl">
                    <MdOutlineExpandMore />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Assigned To & Due Date (Optional Extras for completeness in Fintech context) --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-[#111418]  text-sm font-medium leading-normal"
                for="task-assignee"
              >
                Assignee
              </label>
              <div className="flex items-center gap-2 border border-[#dbe0e6]  rounded-lg bg-white  px-3 h-12 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <span className="material-symbols-outlined text-gray-400">
                  <FaUser />
                </span>
                <input
                  className="flex-1 bg-transparent border-none  focus:outline-0 text-[#111418] placeholder:text-[#617589] text-base"
                  id="task-assignee"
                  placeholder="Search team member..."
                  type="text"
                  name="assignee"
                  onChange={handleTaskFormChange}
                  value={taskForm.assignee}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-[#111418] text-sm font-medium leading-normal"
                for="task-date"
              >
                Due Date
              </label>
              <div className="flex items-center gap-2 border border-[#dbe0e6] rounded-lg bg-white px-3 h-12 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <span className="material-symbols-outlined text-gray-400">
                  <FaRegCalendar />
                </span>
                <input
                  className="flex-1 bg-transparent border-none focus:ring-0 text-[#111418] text-base"
                  id="task-date"
                  type="date"
                  name="dueDate"
                  onChange={handleTaskFormChange}
                  value={taskForm.dueDate}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal Footer (Action Bar) --> */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#f9fafb] border-t border-[#f0f2f4] ">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-row-reverse gap-2 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] bg-transparent hover:bg-gray-100 border border-transparent transition-colors">
            <span className="truncate">Cancel</span>
          </button>
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-row-reverse gap-2 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-sm"
            onClick={handleSaveTask}
          >
            <span className="truncate">Save Task</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default CreateTaskForm;
