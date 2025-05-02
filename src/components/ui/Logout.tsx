"use client";
import { MdOutlineLogout } from "react-icons/md";
// import { signOutAction } from "../lib/actions";
//action={signOutAction}

export default function Logout() {
  return (
    <form>
      <button className="py-3 px-5 hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-gray-100 dark:text-gray-300 transition-colors flex items-center gap-4 font-semibold text-gray-600 w-full">
        <MdOutlineLogout className="h-5 w-5 text-gray-400" />
        <span>Sign out</span>
      </button>
    </form>
  );
}
