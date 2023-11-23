"use client";
import React, { useContext, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { FiguresContext } from "@/app/contexts/figures.context";

const AllFiguresComponent = () => {
  const { toys } = useContext(FiguresContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedToys = toys.slice(startIndex, endIndex);

  return (
    <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] top-[17rem] overflow-y-auto h-min max-h-[calc(100vh-17rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      <Typography variant="h5" color="blue-gray" className=" my-auto ">
        All Figures
      </Typography>
      <table className="w-full text-sm text-left text-black px-15  h-full">
        <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
          <tr className="bg-primary text-text">
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
              <tr
                key={toy.id.toString()}
                className="even:bg-white odd:bg-gray-100"
              >
                <td className="border px-6 py-4">{toy.name}</td>
                <td className="border px-6 py-4">{toy.status}</td>
                <td className="border px-6 py-4">{toy.rating}</td>
                <td className="border px-6 py-4">
                  {formatter.format(toy.price)}
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </Card>
  );
};

export default AllFiguresComponent;
