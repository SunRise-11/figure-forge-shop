"use client";

import React, { useContext, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { FiguresContext } from "@/app/contexts/figures.context";

const AllFigures = () => {
  const { toys } = useContext(FiguresContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedToys = toys.slice(startIndex, endIndex);

  return (
    <div className="w-screen h-screen  items-center justify-center mt-0">
      <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] h-max p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2">
        <Typography variant="h5" color="blue-gray" className=" my-auto ">
          All Figures
        </Typography>
        <table className="w-full text-sm text-left text-black px-15">
          <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
            <tr>
              <th scope="col" className="border px-6 py-3">
                Name
              </th>
              <th scope="col" className="border px-6 py-3">
                Status
              </th>
              <th scope="col" className="border px-6 py-3">
                Rating
              </th>
              <th scope="col" className="border px-6 py-3">
                Price
              </th>
            </tr>
            {displayedToys.map((toy) => {
              return (
                <tr>
                  <td className="border px-6 py-4">{toy.name}</td>
                  <td className="border px-6 py-4">{toy.status}</td>
                  <td className="border px-6 py-4">{toy.rating}</td>
                  <td className="border px-6 py-4">{toy.price.toString()}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </Card>
    </div>
  );
};

export default AllFigures;
