import React from "react";
import { MdSearch } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";

function SearchAndFilter() {
  return (
    <div class="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-sm mb-6 z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* <!-- Search Input --> */}
        <div class="md:col-span-4">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Search
          </label>
          <div>
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              <MdSearch />
            </span>
            <input
              class="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 text-[#111418]"
              placeholder="Search by title..."
              type="text"
            />
          </div>
        </div>
        {/* <!-- Status Filter --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Status
          </label>
          <div>
            <select class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418] ">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              <MdOutlineExpandMore />
            </span>
          </div>
        </div>
        {/* <!-- Priority Filter --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Priority
          </label>
          <div>
            <select class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418]">
              <option value="">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              <MdOutlineExpandMore />
            </span>
          </div>
        </div>
        {/* <!-- Sort By --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Sort by
          </label>
          <div>
            <select class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418]">
              <option value="created_desc">Created (Newest)</option>
              <option value="created_asc">Created (Oldest)</option>
              <option value="title_asc">Title (A-Z)</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              <BsSortUp />
            </span>
          </div>
        </div>
        {/* <!-- Filter Button (Mobile/Tablet optimization, or just visual balance) --> */}
        <div class="md:col-span-2 flex justify-end">
          <button class="flex items-center justify-center w-full md:w-auto h-10 px-4 rounded-lg bg-white border border-[#e5e7eb] text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors">
            <span class="material-symbols-outlined text-lg mr-2">
              <LuFilter />
            </span>
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
