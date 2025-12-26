import React from "react";

function TasksTableSkeleton() {
  return (
    <div class="rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden flex flex-col">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50/50  border-b border-[#e5e7eb]">
              <th class="py-4 px-6 w-[40%]">
                <div class="h-4 w-24 bg-gray-200 rounded"></div>
              </th>
              <th class="py-4 px-6 w-[15%]">
                <div class="h-4 w-16 bg-gray-200 rounded"></div>
              </th>
              <th class="py-4 px-6 w-[15%]">
                <div class="h-4 w-16 bg-gray-200 rounded"></div>
              </th>
              <th class="py-4 px-6 w-[15%]">
                <div class="h-4 w-20 bg-gray-200 rounded"></div>
              </th>
              <th class="py-4 px-6 w-[15%] text-right">
                <div class="h-4 w-16 bg-gray-200 rounded ml-auto"></div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e5e7eb]">
            <tr>
              <td class="py-4 px-6">
                <div class="flex flex-col gap-2">
                  <div class="h-5 w-3/4 rounded bg-gray-200"></div>
                  <div class="h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="h-6 w-20 rounded-full bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-5 w-16 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-4 w-24 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-end gap-2">
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6">
                <div class="flex flex-col gap-2">
                  <div class="h-5 w-2/3 rounded bg-gray-200 "></div>
                  <div class="h-3 w-1/3 rounded bg-gray-200 "></div>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="h-6 w-24 rounded-full bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-5 w-20 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-4 w-24 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-end gap-2">
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6">
                <div class="flex flex-col gap-2">
                  <div class="h-5 w-4/5 rounded bg-gray-200 "></div>
                  <div class="h-3 w-1/2 rounded bg-gray-200 "></div>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="h-6 w-20 rounded-full bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-5 w-16 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-4 w-24 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-end gap-2">
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6">
                <div class="flex flex-col gap-2">
                  <div class="h-5 w-1/2 rounded bg-gray-200 "></div>
                  <div class="h-3 w-1/4 rounded bg-gray-200 "></div>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="h-6 w-16 rounded-full bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-5 w-14 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-4 w-24 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-end gap-2">
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6">
                <div class="flex flex-col gap-2">
                  <div class="h-5 w-3/4 rounded bg-gray-200 "></div>
                  <div class="h-3 w-1/3 rounded bg-gray-200 "></div>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="h-6 w-20 rounded-full bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-5 w-16 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="h-4 w-24 rounded bg-gray-200 "></div>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-end gap-2">
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                  <div class="h-8 w-8 rounded bg-gray-200 "></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-t border-[#e5e7eb] bg-gray-50/50  px-6 py-4 flex items-center justify-between">
        <div class="h-4 w-48 rounded bg-gray-200 "></div>
        <div class="flex gap-2">
          <div class="h-9 w-20 rounded-lg bg-gray-200 "></div>
          <div class="h-9 w-20 rounded-lg bg-gray-200 "></div>
        </div>
      </div>
    </div>
  );
}

export default TasksTableSkeleton;
