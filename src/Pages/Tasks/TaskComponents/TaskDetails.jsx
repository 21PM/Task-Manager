import React, { useEffect, useState } from "react";
import { MdCheck, MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdCalendarMonth } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header";
import { useParams } from "react-router-dom";
import useGetTaskById from "../../../Hooks/useGetTaskById";
import { MdContentCopy } from "react-icons/md";
import { formatToDateOnly, getColorByStatus } from "../../../Utils/helpers";

function TaskDetails() {
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault(); // Prevent the <a> tag from navigating
    if (!id) return;

    try {
      await navigator.clipboard.writeText(_id);
      setIsCopied(true);

      // Reset the icon back to 'copy' after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTaskById(id);
  const {
    title,
    description,
    priority,
    status,
    createdAt,
    _id,
    dueDate,
    assignee,
  } = data?.data || {};

  return (
    <div className="w-full">
      <Header />
      <div className="flex-1 flex justify-center py-8 px-4 md:px-8">
        <div className="w-full max-w-[960px] flex flex-col gap-6">
          {/* <!-- Breadcrumb / Back Button --> */}
          <div>
            <button
              className="group flex items-center justify-start gap-2 text-sm font-medium text-[#617589] hover:text-primary transition-colors cursor-pointer"
              onClick={() => navigate("/tasks")}
            >
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
                <MdOutlineKeyboardBackspace />
              </span>
              <span>Back to Tasks</span>
            </button>
          </div>
          {/* <!-- Page Header --> */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e5e7eb] pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-[#111418] text-3xl font-black leading-tight tracking-[-0.033em]">
                  Task Details
                </h1>
                {/* <!-- Mobile Status Badge --> */}
                <span
                  className={`sm:hidden bg-yellow-100 text-xs font-medium px-2.5 py-0.5 rounded border ${getColorByStatus()}`}
                >
                  {status}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              {/* <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-sm transition-all">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              <span>Mark Complete</span>
            </button> */}
            </div>
          </div>
          {/* <!-- Task Information Card --> */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
            {/* <!-- Card Header --> */}
            <div className="bg-gray-50 px-6 py-4 border-b border-[#e5e7eb]">
              <h3 className="text-[#111418] text-base font-bold">
                General Information
              </h3>
            </div>
            {/* <!-- Description List Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* <!-- Title --> */}
              <div className="flex flex-col gap-1 p-6 border-b md:border-b-0 md:border-r border-[#e5e7eb]">
                <p className="text-[#617589]text-xs font-semibold uppercase tracking-wider mb-1">
                  Title
                </p>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  {title}
                </p>
              </div>
              {/* <!-- Priority --> */}
              <div className="flex flex-col gap-1 p-6 border-b border-[#e5e7eb]">
                <p className="text-[#617589]  text-xs font-semibold uppercase tracking-wider mb-1">
                  Priority
                </p>
                <div className="flex items-center">
                  <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700text-sm font-medium px-2.5 py-1 rounded-full border border-red-100 ">
                    <span className="material-symbols-outlined text-[16px] fill-current">
                      <FcHighPriority />
                    </span>
                    {priority}
                  </span>
                </div>
              </div>
              {/* <!-- Description (Full Width on Mobile, spans 2 cols on Desktop if desired, but adhering to simple grid here) --> */}
              <div className="flex flex-col gap-1 p-6 border-b md:border-b-0 md:border-r border-[#e5e7eb] md:col-span-2">
                <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider mb-1">
                  Description
                </p>
                <p className="text-[#111418] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
              {/* <!-- Status --> */}
              <div className="flex flex-col gap-1 p-6 border-b md:border-b-0 md:border-r border-[#e5e7eb] ">
                <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider mb-1">
                  Status
                </p>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-full border ${getColorByStatus(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>
              </div>
              {/* <!-- Due Date / Created At --> */}
              <div className="flex flex-col gap-1 p-6 border-b border-[#e5e7eb]">
                <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider mb-1">
                  Created At
                </p>
                <div className="flex items-center gap-2 text-[#111418] text-sm">
                  <span className="material-symbols-outlined text-[18px] text-[#617589]">
                    <MdCalendarMonth />
                  </span>
                  {formatToDateOnly(createdAt)}
                </div>
              </div>
              {/* <!-- Owner --> */}
              <div className="flex flex-col gap-1 p-6 border-b md:border-b-0 md:border-r border-[#e5e7eb]">
                <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider mb-1">
                  Owner
                </p>
                <div className="flex items-center gap-3">
                  <CgProfile />
                  <p className="text-[#111418] text-sm font-medium">
                    {assignee}
                  </p>
                </div>
              </div>
              {/* <!-- Associated Loan --> */}
              <div className="flex flex-col gap-1 p-6 border-b md:border-b-0 border-[#e5e7eb] :border-[#2b3b4b]">
                <p className="text-[#617589] :text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Task Id
                </p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-primary hover:text-blue-700 text-sm font-medium group/link cursor-pointer"
                  title="Click to copy ID"
                >
                  {_id}
                  {/* Conditionally render the icon based on state */}
                  {isCopied ? (
                    <MdCheck className="text-green-500" />
                  ) : (
                    <MdContentCopy className="transition-transform group-hover/link:scale-110" />
                  )}

                  {/* Optional: Screen reader text for accessibility */}
                  <span className="sr-only">
                    {isCopied ? "Copied" : "Copy ID"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
