import { PageSearchParams } from "@/app/photos/page";
import Link from "next/link";
import { FC } from "react";

interface PagerProps {
  page: number;
  total: number;
  searchParams: PageSearchParams;
}

export const Pager: FC<PagerProps> = ({ page, total, searchParams }) => {
  const getSearchParams = () => {
    const newSearchParms = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        newSearchParms.set(key, value);
      }
    });
    return newSearchParms;
  };

  const handleNextPage = () => {
    const params = getSearchParams();
    if (page <= total) {
      const newPage = `${page + 1}`;
      params.set("page", newPage);
      return params.toString();
    }
    return params.toString();
  };
  0;
  const handlePrevPage = () => {
    const params = getSearchParams();
    if (page > 1) {
      const newPage = `${page - 1}`;
      params.set("page", newPage);
      return params.toString();
    }
    return params.toString();
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
    >
      <Link
        href={`/photos?${handlePrevPage()}`}
        className="p-2 mr-4 rounded hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      <Link
        href={`/photos?${handleNextPage()}`}
        className="p-2 ml-4 rounded hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </nav>
  );
};
