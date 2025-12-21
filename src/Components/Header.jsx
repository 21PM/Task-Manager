import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Header() {
  return (
    <header class="bg-white  border-b border-[#e5e7eb]  px-6 py-3 sticky top-0 z-50 max-w-[100vw]">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <h1 class="text-lg font-bold tracking-tight text-[#111418]">
            Secure Task Manager
          </h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="hidden md:flex items-center px-3 py-1.5 rounded-full bg-gray-100  text-xs font-semibold text-gray-600  border border-gray-200 ">
            <span class="material-symbols-outlined text-sm mr-1.5">
              <MdOutlineAdminPanelSettings />
            </span>
            Role: ADMIN
          </div>
          <button class="flex items-center justify-center h-9 px-4 rounded-lg bg-white border border-gray-200 text-sm font-medium text-[#111418] transition-colors">
            <span class="material-symbols-outlined text-lg mr-2">
              <IoIosLogOut />
            </span>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
