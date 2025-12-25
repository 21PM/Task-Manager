import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import useMyTasks from "../../../Hooks/useGetMyTasks";
import { IoFlagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDeleteTask } from "../../../Hooks/useDeleteTask";
import Dialog from "../../../Components/Dialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { FiAlertTriangle } from "react-icons/fi";
import {
  getColorByPriority,
  getColorByStatus,
  formatToDateOnly,
} from "../../../Utils/helpers";
import CreateTaskForm from "./CreateTaskForm";
function TasksTable() {
  const navigate = useNavigate();
  const { mutate: deleteTask, isPending } = useDeleteTask();
  const [openDeleteTaskDialog, setOpenDeleteTaskDialog] = useState(false);
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isLoading, isError } = useMyTasks(page, limit);
  const [deleteTaskDetails, setDeleteTaskDetails] = useState({
    title: "",
    _id: "",
    assignee: "",
  });
  const [editTaskDetails, setEditTaskDetails] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    dueDate: "",
    assignee: "",
  });

  const handleRowClick = (id) => {
    navigate(`/taskDetails/${id}`);
  };
  useEffect(() => {
    console.log("totla", data?.pagination?.total);
    console.log("page", page);
    console.log("limit", limit);

    console.log(
      "page === data?.pagination?.total / limit",
      page === data?.pagination?.total / limit
    );
  }, [page, data]);
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
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[15%]">
                Due Date
              </th>
              <th class="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right w-[15%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e5e7eb]">
            {/* <!-- Row 1 --> */}
            {data?.data?.map(
              (
                {
                  assignee,
                  createdAt,
                  description,
                  dueDate,
                  priority,
                  status,
                  title,
                  _id,
                },
                index
              ) => {
                return (
                  <tr
                    class="group hover:bg-gray-50 transition-colors"
                    onClick={() => handleRowClick(_id)}
                    key={_id}
                  >
                    <td class="py-4 px-6">
                      <div class="flex flex-col">
                        <span class="font-medium text-[#111418] ">{title}</span>
                        <span class="text-xs text-gray-500 mt-0.5">
                          Assigned to: {assignee}
                        </span>
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <span
                        class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorByStatus(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td class="py-4 px-6">
                      <span
                        class={`flex items-center text-sm font-medium ${getColorByPriority(
                          priority
                        )}`}
                      >
                        <span class="material-symbols-outlined text-base mr-1 filled ">
                          <IoFlagOutline />
                        </span>
                        {priority}
                      </span>
                    </td>
                    <td class="py-4 px-6">
                      <span class="text-sm text-gray-600">
                        {formatToDateOnly(createdAt)}
                      </span>
                    </td>
                    <td class="py-4 px-6">
                      <span class="text-sm text-gray-600">
                        {formatToDateOnly(dueDate)}
                      </span>
                    </td>

                    <td class="py-4 px-6 text-right">
                      <div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <button
                          class="p-1.5 rounded-md hover:bg-gray-100 text-primary transition-colors"
                          title="Edit"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditTaskDetails({
                              title,
                              description,
                              status,
                              priority,
                              dueDate,
                              assignee,
                              _id,
                            });
                            setOpenEditTaskDialog(true);
                          }}
                        >
                          <span class="material-symbols-outlined text-xl">
                            <FaEdit />
                          </span>
                        </button>
                        <button
                          class="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                          title="Delete"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteTaskDetails({
                              title,
                              _id,
                              assignee,
                              status,
                              priority,
                            });
                            setOpenDeleteTaskDialog(true);
                          }}
                        >
                          <span class="material-symbols-outlined text-xl">
                            <RiDeleteBinLine />
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      {/* <!-- Pagination Footer --> */}
      <div class="border-t border-[#e5e7eb] bg-gray-50/50 px-6 py-4 flex items-center justify-between">
        <p class="text-sm text-gray-500">
          Showing
          <span class="font-medium text-[#111418]">
            {" "}
            {limit * (page - 1) + 1}
          </span>{" "}
          to
          <span class="font-medium text-[#111418]">
            {" "}
            {page * limit > data?.pagination?.total
              ? data?.pagination?.total
              : page * limit}
          </span>{" "}
          of
          <span class="font-medium text-[#111418]">
            {" "}
            {data?.pagination?.total || 0}
          </span>
          <span class="font-medium text-[#111418]"> </span>
          results
        </p>
        <div class="flex gap-2">
          <button
            class={`inline-flex items-center px-3 py-1.5 border border-[#e5e7eb] rounded-lg text-sm font-medium disabled:text-gray-500 text-black bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            class="inline-flex items-center px-3 py-1.5 border border-[#e5e7eb]rounded-lg text-sm font-medium text-[#111418 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-500"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={data?.pagination?.total <= page * limit}
          >
            Next
          </button>
        </div>
      </div>
      <Dialog
        title={"Edit Task"}
        isOpen={openEditTaskDialog}
        onClose={() => setOpenEditTaskDialog(false)}
        children={<CreateTaskForm formDetails={editTaskDetails} />}
        extraData={editTaskDetails}
      />
      <Dialog
        title={
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <FiAlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Delete Task?</h3>
          </div>
        }
        isOpen={openDeleteTaskDialog}
        children={<DeleteTaskDialog />}
        onClose={() => setOpenDeleteTaskDialog(false)}
        extraData={deleteTaskDetails}
      />
    </div>
  );
}

export default TasksTable;
