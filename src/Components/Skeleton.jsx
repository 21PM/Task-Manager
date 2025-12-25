import React from "react";

function Skeleton() {
  return (
    <div class="font-display bg-background-light text-[#111418] min-h-screen flex flex-col overflow-x-hidden">
      <header class="bg-white  border-b border-[#e5e7eb]  px-6 py-3 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="size-8 rounded bg-gray-200 "></div>
            <div class="h-6 w-48 rounded bg-gray-200 "></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="hidden md:block h-8 w-32 rounded-full bg-gray-200 "></div>
            <div class="h-9 w-24 rounded-lg bg-gray-200 "></div>
          </div>
        </div>
      </header>
      <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div class="h-8 w-32 rounded bg-gray-200  mb-2"></div>
            <div class="h-4 w-64 rounded bg-gray-200 "></div>
          </div>
          <div class="h-10 w-[140px] rounded-lg bg-gray-200 "></div>
        </div>
        <div class="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-sm mb-6">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div class="md:col-span-4">
              <div class="h-3 w-16 rounded bg-gray-200  mb-2"></div>
              <div class="h-10 w-full rounded-lg bg-gray-200 "></div>
              <div class="md:col-span-2">
                <div class="h-3 w-16 rounded bg-gray-200  mb-2"></div>
                <div class="h-10 w-full rounded-lg bg-gray-200 "></div>
              </div>
              <div class="md:col-span-2">
                <div class="h-3 w-16 rounded bg-gray-200  mb-2"></div>
                <div class="h-10 w-full rounded-lg bg-gray-200"></div>
              </div>
              <div class="md:col-span-2">
                <div class="h-3 w-16 rounded bg-gray-200  mb-2"></div>
                <div class="h-10 w-full rounded-lg bg-gray-200 "></div>
              </div>
              <div class="md:col-span-2 flex justify-end">
                <div class="h-10 w-full md:w-32 rounded-lg bg-gray-200 "></div>
              </div>
            </div>
          </div>
          <div class="bg-white  rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden flex flex-col">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-gray-50/50 border-b border-[#e5e7eb]">
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
                <tbody class="">
                  <tr>
                    <td class="py-4 px-6">
                      <div class="flex flex-col gap-2">
                        <div class="h-5 w-3/4 rounded bg-gray-200 "></div>
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
                        <div class="h-8 w-8 "></div>
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
            <div class="border-t border-[#e5e7eb] bg-gray-50/50 px-6 py-4 flex items-center justify-between">
              <div class="h-4 w-48 rounded bg-gray-200 "></div>
              <div class="flex gap-2">
                <div class="h-9 w-20 rounded-lg bg-gray-200 "></div>
                <div class="h-9 w-20 rounded-lg bg-gray-200 "></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skeleton;
