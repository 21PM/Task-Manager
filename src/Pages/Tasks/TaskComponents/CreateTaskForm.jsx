import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";

function CreateTaskForm() {
  return (
    <main class="flex-1 flex items-center justify-center p-4 md:p-10">
      {/* <!-- Modal Container --> */}
      <div class="relative w-full max-w-[640px] bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden flex flex-col">
        {/* <!-- Modal Header --> */}
        <div class="flex items-center justify-between px-6 py-5 border-b border-[#f0f2f4]">
          <h1 class="text-[#111418] text-xl font-bold leading-tight">
            Create New Task
          </h1>
          <button class="text-gray-400 hover:text-gray-600 transition-colors">
            <span class="material-symbols-outlined">
              <IoMdClose />
            </span>
          </button>
        </div>
        {/* <!-- Form Content --> */}
        <div class="p-6 md:p-8 flex flex-col gap-6">
          {/* <!-- Title Field --> */}
          <div class="flex flex-col gap-2">
            <label
              class="text-[#111418] text-sm font-medium leading-normal"
              for="task-title"
            >
              Task Title <span class="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white focus:border-primary h-12 placeholder:text-[#617589]  px-4 text-base font-normal leading-normal transition-all"
                id="task-title"
                placeholder="e.g., Refactor loan calculation module"
                type="text"
                value=""
              />
            </div>
          </div>
          {/* <!-- Description Field --> */}
          <div class="flex flex-col gap-2">
            <label
              class="text-[#111418]  text-sm font-medium leading-normal"
              for="task-desc"
            >
              Description
            </label>
            <textarea
              class="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418]  focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbe0e6]  bg-white  focus:border-primary min-h-[140px] placeholder:text-[#617589]  p-4 text-base font-normal leading-normal transition-all"
              id="task-desc"
              placeholder="Add details about the task requirements and acceptance criteria..."
            ></textarea>
          </div>
          {/* <!-- Row for Dropdowns --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Status Dropdown --> */}
            <div
              class="flex flex-col gap-2 relative"
              //   style="
              //     --select-button-svg: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(97,117,137)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e');
              //   "
            >
              <label
                class="text-[#111418]  text-sm font-medium leading-normal"
                for="task-status"
              >
                Status
              </label>
              <div class="relative">
                <select
                  class="appearance-none w-full rounded-lg border border-[#dbe0e6] bg-white text-[#111418] h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  id="task-status"
                >
                  <option value="backlog">Backlog</option>
                  <option selected="" value="todo">
                    To Do
                  </option>
                  <option value="inprogress">In Progress</option>
                  <option value="review">In Review</option>
                  <option value="done">Done</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <span class="material-symbols-outlined text-xl">
                    <MdOutlineExpandMore />
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Priority Dropdown --> */}
            <div class="flex flex-col gap-2 relative">
              <label
                class="text-[#111418] text-sm font-medium leading-normal"
                for="task-priority"
              >
                Priority
              </label>
              <div class="relative">
                <select
                  class="appearance-none w-full rounded-lg border border-[#dbe0e6] bg-white text-[#111418] h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  id="task-priority"
                >
                  <option value="low">Low</option>
                  <option selected="" value="medium">
                    Medium
                  </option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <span class="material-symbols-outlined text-xl">
                    <MdOutlineExpandMore />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Assigned To & Due Date (Optional Extras for completeness in Fintech context) --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label
                class="text-[#111418]  text-sm font-medium leading-normal"
                for="task-assignee"
              >
                Assignee
              </label>
              <div class="flex items-center gap-2 border border-[#dbe0e6]  rounded-lg bg-white  px-3 h-12 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <span class="material-symbols-outlined text-gray-400">
                  <FaUser />
                </span>
                <input
                  class="flex-1 bg-transparent border-none  focus:outline-0 text-[#111418] placeholder:text-[#617589] text-base"
                  id="task-assignee"
                  placeholder="Search team member..."
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="text-[#111418] text-sm font-medium leading-normal"
                for="task-date"
              >
                Due Date
              </label>
              <div class="flex items-center gap-2 border border-[#dbe0e6] rounded-lg bg-white px-3 h-12 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <span class="material-symbols-outlined text-gray-400">
                  <FaRegCalendar />
                </span>
                <input
                  class="flex-1 bg-transparent border-none focus:ring-0 text-[#111418] text-base"
                  id="task-date"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal Footer (Action Bar) --> */}
        <div class="flex items-center justify-end gap-3 px-6 py-4 bg-[#f9fafb] border-t border-[#f0f2f4] ">
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-row-reverse gap-2 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] bg-transparent hover:bg-gray-100 border border-transparent transition-colors">
            <span class="truncate">Cancel</span>
          </button>
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-row-reverse gap-2 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-sm">
            <span class="truncate">Save Task</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default CreateTaskForm;
