import Link from "next/link";

import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 text-black text-xl font-medium py-3 px-5 transition-all hover:text-gray-700  rounded-sm"
          >
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            href="/members"
            className="flex items-center gap-3 text-black text-xl font-medium py-3 px-5 transition-all hover:text-gray-700 rounded-sm"
          >
            <FaPeopleGroup />
            <span>Members</span>
          </Link>
        </li>

        <li>
          <Link
            href="/users"
            className="flex items-center gap-3 text-black text-xl font-medium py-3 px-5 transition-all hover:text-gray-700  rounded-sm"
          >
            <HiOutlineUsers />
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
