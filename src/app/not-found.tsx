import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-48">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-blue-700 text-gray-100 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}
