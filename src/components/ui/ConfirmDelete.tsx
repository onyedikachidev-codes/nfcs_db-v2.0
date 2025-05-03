"use client";

import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDelete({ isOpen, onClose, onConfirm }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) onClose();
      }

      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-70 bg-black z-50 fixed inset-0 flex items-center justify-center">
      <div
        ref={ref}
        className="bg-white dark:bg-primary-700 backdrop-blur-md rounded-lg w-[29rem] flex flex-col gap-5 px-8 py-5"
      >
        <div className="flex relative items-center">
          <button
            onClick={onClose}
            className="absolute right-0 text-black dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700"
          >
            <FaTimes />
          </button>
          <h2>Delete Profile</h2>
        </div>

        <div>
          <p className="text-center">
            Are you sure you want to delete this member&apos;s profile
            permanently? This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-end mt-6">
            <button
              className="bg-gray-200 hover:bg-gray-400 border border-gray-950 rounded-md text-gray-900 px-4 py-2 font-medium textmd"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 hover:bg-red-800 rounded-md text-red-100 px-4 py-2 font-medium text-lg"
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
