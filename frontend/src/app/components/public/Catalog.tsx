"use client";
import React, { useContext, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { FiguresContext } from "@/app/contexts/figures.context";

const Catalog = () => {
  const {toys} = useContext(FiguresContext)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedToys = toys.slice(startIndex, endIndex);

  return (
    <>
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
        totalElements={toys.length}
        elementsPerPage={elementsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Catalog;
