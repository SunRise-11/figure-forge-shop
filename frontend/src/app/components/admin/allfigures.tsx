"use client";
import React, { useContext, useState } from "react";
import { Card, Rating, Typography } from "@material-tailwind/react";
import { FiguresContext } from "@/app/contexts/figures.context";
import Link from "next/link";

const AllFiguresComponent = () => {
  const { toys } = useContext(FiguresContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] top-[17rem]  h-min max-h-[calc(100vh-17rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      <Typography variant="h5" color="blue-gray" className=" my-auto ">
        All Figures
      </Typography>
      <div className="overflow-y-auto">
        <table className="w-full text-sm text-left text-black px-15  h-full">
          <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
            <tr className="bg-primary text-text">
              <th scope="col" className="border px-6 py-3">
                Name
              </th>
              <th scope="col" className="border px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="border px-6 py-3 text-center">
                Rating
              </th>
              <th scope="col" className="border px-6 py-3 text-center">
                Price
              </th>
            </tr>
            {toys.map((toy) => {
              return (
                <tr
                  key={toy.id.toString()}
                  className="even:bg-white odd:bg-gray-100"
                >
                  <td className="border px-6 py-4">
                    {" "}
                    <Link
                      href={`/filteredfigures/${toy.status}/review/${toy.id}`}
                      className=" underline hover:text-primary"
                    >
                      {toy.name}
                    </Link>
                  </td>
                  <td className="border px-6 py-4 text-center">{toy.status}</td>
                  <td className="border px-6 py-4 text-center">
                    <Rating value={toy.rating} readonly />
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {formatter.format(toy.price)}
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </Card>
  );
};

export default AllFiguresComponent;
