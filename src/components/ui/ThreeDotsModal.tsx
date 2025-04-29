import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { deleteMember } from "@/lib/actions";
import ConfirmDelete from "./ConfirmDelete";
import EditForm from "@/components/forms/EditForm";

interface Props {
  isOpen: () => void;
  onClose: () => void;
  member: {
    id: string;
  };
}

function ThreeDotsModal({ isOpen, onClose, member }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
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

  const { id } = member;

  if (!isOpen) return null;

  return (
    <div className="">
      <div
        ref={ref}
        className="bg-gray-100 dark:bg-gray-500 rounded-lg w-[8rem] opacity-90 flex flex-col items-start p-4 gap-2 dark:hover:text-gray-50"
      >
        <Link
          href={`/members/${id}`}
          className="flex gap-3 cursor-pointer items-center justify-between"
        >
          <HiEye className="text-gray-500 dark:text-gray-200 " />
          <span className="dark:text-gray-300 dark:hover:text-gray-50">
            Details
          </span>
        </Link>

        <div
          onClick={() => setEditFormOpen(true)}
          className="flex gap-3 cursor-pointer items-center justify-between dark:hover:text-gray-50"
        >
          <HiPencil className="text-gray-500 dark:text-gray-200" />
          <span className="dark:text-gray-300 dark:hover:text-gray-50">
            Edit
          </span>
        </div>
        <EditForm
          isOpen={isEditFormOpen}
          onClose={() => setEditFormOpen(false)}
          member={member}
        />

        <div
          onClick={() => setModalOpen(true)}
          className="flex gap-3 cursor-pointer items-center justify-between dark:hover:text-gray-50"
        >
          <HiTrash className="text-gray-500 dark:text-gray-200 " />
          <span className="dark:text-gray-300 dark:hover:text-gray-50">
            Delete
          </span>
        </div>
        <ConfirmDelete
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={() => deleteMember(id)}
        />
      </div>
    </div>
  );
}

export default ThreeDotsModal;
