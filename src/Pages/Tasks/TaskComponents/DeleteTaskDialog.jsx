import React from "react";
import { FiAlertTriangle, FiX, FiClipboard } from "react-icons/fi"; // Assuming using react-icons for icons
import { getColorByPriority, getColorByStatus } from "../../../Utils/helpers";
import { useDeleteTask } from "../../../Hooks/useDeleteTask";
const DeleteTaskDialog = ({ extraData, onClose }) => {
  console.log({ extraData });

  const { mutate: deleteTask, isPending } = useDeleteTask(onClose);
  const handleDeleteTask = (id) => {
    console.log("logging id", id);
    deleteTask({ id });
  };
  return (
    <div className="bg-white rounded-xl w-full max-w-md mx-4 overflow-hidden md:max-w-lg mt-5">
      {/* Body */}
      <div className="px-6 pb-6">
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to permanently delete this task? This action
          cannot be undone and will remove all associated data.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-start gap-3">
          <FiClipboard className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              {extraData?.title} #{extraData?._id}
            </h4>
            <p className="text-xs text-gray-500">
              Assigned to: {extraData?.assignee || "N/A"}
            </p>
            <p
              className={`text-xs text-gray-500 ${getColorByPriority(
                extraData?.priority
              )}`}
            >
              Priority : {extraData?.priority || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => handleDeleteTask(extraData?._id)}
        >
          {isPending ? "Deleting..." : "Delete Task"}
        </button>
      </div>
    </div>
  );
};

export default DeleteTaskDialog;
