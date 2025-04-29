"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams, useRouter } from "next/navigation";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from search params or default to 1
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  // Calculate total pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Navigate to the next page
  function nextPage() {
    if (currentPage < pageCount) {
      const params = new URLSearchParams(searchParams);
      params.set("page", currentPage + 1);
      router.push(`?${params.toString()}`);
    }
  }

  // Navigate to the previous page
  function prevPage() {
    if (currentPage > 1) {
      const params = new URLSearchParams(searchParams);
      params.set("page", currentPage - 1);
      router.push(`?${params.toString()}`);
    }
  }

  // If there is only one page, no pagination is needed
  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between py-2 px-4 bg-white dark:bg-gray-600 dark:text-gray-100 mx-4">
      {/* Page Information */}
      <p className="text-sm">
        Showing{" "}
        <span className="font-bold">{(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
        to{" "}
        <span className="font-bold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-bold">{count}</span> results
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium border rounded-md transition-all ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-500 dark:text-gray-100"
              : "bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700"
          }`}
        >
          <HiChevronLeft />
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium border rounded-md transition-all ${
            currentPage === pageCount
              ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-500 dark:text-gray-100"
              : "bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700"
          }`}
        >
          Next
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
