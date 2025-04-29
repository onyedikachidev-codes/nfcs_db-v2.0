"use client";

import Link from "next/link";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { FaPeopleGroup } from "react-icons/fa6";

import Logout from "@/components/ui/Logout";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />,
  },
  {
    name: "Members",
    href: "/members",
    icon: (
      <FaPeopleGroup className="h-5 w-5 text-gray-600 dark:text-gray-400" />
    ),
  },
  {
    name: "About Developer",
    href: "/users",
    icon: <UserIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />,
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-gray-200 mt-6 dark:bg-primary-700 dark:text-primary-200 dark:border-gray-700">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-blue-400 dark:hover:bg-gray-700 text-gray-700 dark:text-primary-200 hover:text-gray-700 transition-colors flex items-center gap-4 font-semibold ${
                pathname === link.href ? "bg-blue-400 dark:bg-gray-700" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
