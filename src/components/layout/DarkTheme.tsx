"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function DarkTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {theme === "light" ? (
        <MdOutlineDarkMode
          className="h-10 w-10 bg-gray-800 border border-black rounded-full cursor-pointer text-gray-50 "
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <CiLight
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="dark:border-white dark:text-black dark:bg-white h-10 w-10 rounded-full cursor-pointer"
        />
      )}
    </div>
  );
}

export default DarkTheme;
