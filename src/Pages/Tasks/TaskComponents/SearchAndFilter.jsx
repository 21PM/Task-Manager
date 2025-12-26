import React from "react";
import { MdSearch } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { BsSortUp } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";

function SearchAndFilter({ handleFilterChange, filterForm }) {
  return (
    <div class="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-sm mb-6 z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* <!-- Search Input --> */}
        <div class="md:col-span-4">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Search
          </label>
          <div>
            <input
              class="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 text-[#111418]"
              placeholder="Search by title..."
              type="text"
              name="search"
              value={filterForm?.search}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        {/* <!-- Status Filter --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Status
          </label>
          <div>
            <select
              value={filterForm?.status}
              onChange={handleFilterChange}
              name="status"
              class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418] "
            >
              <option value="">All Status</option>
              <option value="TODO">To do</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              {/* <MdOutlineExpandMore /> */}
            </span>
          </div>
        </div>
        {/* <!-- Priority Filter --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Priority
          </label>
          <div>
            <select
              name="priority"
              value={filterForm?.priority}
              onChange={handleFilterChange}
              class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418]"
            >
              <option value="">All Priority</option>
              <option value="LOW">Low</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
            </select>

            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              {/* <MdOutlineExpandMore /> */}
            </span>
          </div>
        </div>
        {/* <!-- Sort By --> */}
        <div class="md:col-span-2">
          <label class="block text-xs font-medium text-gray-700 mb-1.5">
            Sort by
          </label>
          <div>
            <select
              name="sort"
              value={filterForm?.sort}
              onChange={handleFilterChange}
              class="w-full h-10 pl-3 pr-10 rounded-lg bg-gray-50 border border-[#e5e7eb] text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer text-[#111418]"
            >
              <option value="desc">Created (Newest)</option>
              <option value="asc">Created (Oldest)</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">
              {/* <BsSortUp /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
