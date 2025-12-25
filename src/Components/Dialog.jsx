import React from "react";
import { IoMdClose } from "react-icons/io";

const Dialog = ({ isOpen, onClose, title, children, classes, extraData }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center mt-14"
      onClick={onClose}
    >
      <div
        className={`bg-white p-4  rounded-lg w-full max-w-md mx-4 overflow-hidden md:max-w-lg ${classes}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between z-50">
          <h1 className="text-[#111418] text-xl font-bold leading-tight">
            {title}
          </h1>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors "
            onClick={onClose}
          >
            <span className="material-symbols-outlined">
              <IoMdClose />
            </span>
          </button>
        </div>
        <div>
          {React.isValidElement(children)
            ? React.cloneElement(children, { onClose, extraData })
            : children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
