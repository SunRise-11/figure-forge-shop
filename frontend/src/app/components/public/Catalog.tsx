"use client";
import React, { useContext, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { FiguresContext } from "@/app/contexts/figures.context";

const Catalog = () => {
  const { toys } = useContext(FiguresContext);
  const [searchFigure, setSearchFigure] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  let displayedToys = toys.slice(startIndex, endIndex);

  displayedToys = displayedToys.filter( 
    (figure) =>
      (figure.status == "posted" &&
        figure.name.toLowerCase().includes(searchFigure.toLowerCase())) ||
      figure.description.toLowerCase().includes(searchFigure.toLowerCase())
  );

  return (
    <>
     <div className="relative mt-5">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearchFigure(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div> 
      <div className="flex flex-wrap w-full">
       
        {displayedToys.map((toy, index) => (
          <div
            className="flex w-full sm:w-1/1  md:w-1/3 lg:w-1/3 pw-10 py-4 justify-center items-center"
            key={toy.id.toString()}
          >
            <Card toy={toy} />
          </div>
        ))}
      </div>
      <Pagination
        totalElements={toys.filter((toy) => toy.status == "posted").length}
        elementsPerPage={elementsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Catalog;
