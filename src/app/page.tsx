import React from "react";
import Dashboard from "@/components/features/Dashboard";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-serif ml-7 mt-9 dark:text-accent-400">
        Welcome, Onyedikachi
      </h2>
      <Dashboard />
    </div>
  );
}
