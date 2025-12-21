import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

function TasksTable() {
  return (
    <div class="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden flex flex-col">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50/50 border-b border-[#e5e7eb]">
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[40%]">
                Title
              </th>
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[15%]">
                Status
              </th>
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[15%]">
                Priority
              </th>
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[15%]">
                Created At
              </th>
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right w-[15%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e5e7eb]">
            {/* <!-- Row 1 --> */}
            <tr class="group hover:bg-gray-50 transition-colors">
              <td class="py-4 px-6">
                <div class="flex flex-col">
                  <span class="font-medium text-[#111418] ">
                    Review Loan Application #4023
                  </span>
                  <span class="text-xs text-gray-500 mt-0.5">
                    Assigned to: Sarah Jenkins
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  Pending
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="flex items-center text-sm font-medium text-red-600">
                  <span class="material-symbols-outlined text-base mr-1 filled">
                    flag
                  </span>
                  High
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="text-sm text-gray-600">Oct 24, 2023</span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                    title="Edit"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 2 --> */}
            <tr class="group hover:bg-gray-50  transition-colors">
              <td class="py-4 px-6">
                <div class="flex flex-col">
                  <span class="font-medium text-[#111418]">
                    Verify Income Documents - Case #889
                  </span>
                  <span class="text-xs text-gray-500 mt-0.5">
                    Assigned to: You
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 ">
                  In Progress
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="flex items-center text-sm font-medium text-orange-600">
                  <span class="material-symbols-outlined text-base mr-1">
                    flag
                  </span>
                  Medium
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="text-sm text-gray-600">Oct 23, 2023</span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                    title="Edit"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 3 --> */}
            <tr class="group hover:bg-gray-50 transition-colors">
              <td class="py-4 px-6">
                <div class="flex flex-col">
                  <span class="font-medium text-[#111418]">
                    KYC Verification for User ID: 9921
                  </span>
                  <span class="text-xs text-gray-500 mt-0.5">
                    Assigned to: Auto-System
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800  border border-green-200">
                  Completed
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="flex items-center text-sm font-medium text-gray-500">
                  <span class="material-symbols-outlined text-base mr-1">
                    flag
                  </span>
                  Low
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="text-sm text-gray-600">Oct 20, 2023</span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                    title="Edit"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 4 --> */}
            <tr class="group hover:bg-gray-50 transition-colors">
              <td class="py-4 px-6">
                <div class="flex flex-col">
                  <span class="font-medium text-[#111418]">
                    Approve Credit Limit Increase Request
                  </span>
                  <span class="text-xs text-gray-500 mt-0.5">
                    Assigned to: John Doe
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  Pending
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="flex items-center text-sm font-medium text-orange-600">
                  <span class="material-symbols-outlined text-base mr-1">
                    flag
                  </span>
                  Medium
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="text-sm text-gray-600">Oct 18, 2023</span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                    title="Edit"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 5 --> */}
            <tr class="group hover:bg-gray-50 transition-colors">
              <td class="py-4 px-6">
                <div class="flex flex-col">
                  <span class="font-medium text-[#111418]">
                    Audit Log Review - Weekly
                  </span>
                  <span class="text-xs text-gray-500 mt-0.5">
                    Assigned to: Security Team
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  Draft
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="flex items-center text-sm font-medium text-gray-500">
                  <span class="material-symbols-outlined text-base mr-1">
                    flag
                  </span>
                  Low
                </span>
              </td>
              <td class="py-4 px-6">
                <span class="text-sm text-gray-600">Oct 15, 2023</span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                    title="Edit"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                    title="Delete"
                  >
                    <span class="material-symbols-outlined text-xl">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- Pagination Footer --> */}
      <div class="border-t border-[#e5e7eb] bg-gray-50/50 px-6 py-4 flex items-center justify-between">
        <p class="text-sm text-gray-500">
          Showing
          <span class="font-medium text-[#111418]">1</span> to
          <span class="font-medium text-[#111418]">5</span> of
          <span class="font-medium text-[#111418]">24</span>
          results
        </p>
        <div class="flex gap-2">
          <button
            class="inline-flex items-center px-3 py-1.5 border border-[#e5e7eb] rounded-lg text-sm font-medium text-gray-500  bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled=""
          >
            Previous
          </button>
          <button class="inline-flex items-center px-3 py-1.5 border border-[#e5e7eb]rounded-lg text-sm font-medium text-[#111418 bg-white hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TasksTable;
