"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Toy } from "@/app/types/types";

const Catalog = () => {
  let { toys } = useContext(FiguresContext);
  const [searchFigure, setSearchFigure] = useState("");
  const [filteredResults, setFilteredResult] = useState<Toy[]>([]);
  const [sortBy, setSortBy] = useState<string>("rating");
  const [sortOrder, setSortOrder] = useState<string>("desc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const filterSortAndPaginate = () => {
      const startIndex = (currentPage - 1) * elementsPerPage;
      const endIndex = startIndex + elementsPerPage;
      if (toys.length > 0) {
        toys = toys.filter((toy) => toy.status.toLowerCase() == "posted");
      } //Filtering
      const filteredToys = toys.filter(
        (item) =>
          item.name.toLowerCase().includes(searchFigure.toLowerCase()) ||
          item.description.toLowerCase().includes(searchFigure.toLowerCase())
      );

      // Sorting
      const sortedToys = filteredToys.sort((a, b) => {
        if (sortBy === "rating") {
          return sortOrder === "asc"
            ? a.rating - b.rating
            : b.rating - a.rating;
        } else if (sortBy === "price") {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        }
        return 0;
      });

      // Pagination
      const paginatedToys = filteredToys.slice(startIndex, endIndex);

      setFilteredResult(paginatedToys);
    };

    filterSortAndPaginate();
  }, [toys, searchFigure, currentPage, sortBy, sortOrder]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFigure(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <div className="relative mt-5">
        <div className="absolute inset-y-0 start-0 pb-12 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          onChange={handleFilterChange}
          className="block w-full p-4 mb-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Figures ..."
          required
        />

        <label
          htmlFor="sort"
          className="mr-2 text-sm text-white dark:text-white"
        >
          Sort By:
        </label>
        <select
          id="sort"
          className="p-2 mr-4 text-sm border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          onChange={handleSortChange}
          value={sortBy}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>

        <select
          id="order"
          className="p-2  text-sm border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          onChange={handleOrderChange}
          value={sortOrder}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="flex flex-wrap w-full">
        {filteredResults.length > 0 &&
          filteredResults.map((figure, index) => (
            <div
              className="flex w-full sm:w-1/1  md:w-1/3 lg:w-1/3 pw-10 py-4 justify-center items-center"
              key={figure.id.toString()}
            >
              <Card toy={figure} />
            </div>
          ))}
      </div>
      <Pagination
        totalElements={searchFigure == "" ? toys.filter(toy => toy.status == 'posted').length : filteredResults.length}
        elementsPerPage={elementsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Catalog;
