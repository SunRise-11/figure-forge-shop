"use client";
import React, { useContext } from "react";
import { Card, Rating, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { Toy } from "@/app/types/types";
import { httpDeleteFigure } from "@/app/api/http/requests";
import { FiguresContext } from "@/app/contexts/figures.context";

type Props = {
  action: String;
  data: Toy[];
};

const Figures = ({ action, data }: Props) => {
  const { toys, deleteFigure, updateFigure } = useContext(FiguresContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  const handleDelete = async (id: string) => {
    if (id !== undefined) {
      const serverResponse = await httpDeleteFigure(id);
      console.log("Server Response", serverResponse);

      if (serverResponse.status === 204) {
        deleteFigure(id);
      } else {
        const responseText = await serverResponse.text();
        throw new Error(`Server response: ${responseText}`);
      }
    }
  };

  let buttonAction = "";
  switch (action) {
    case "unchecked": {
      buttonAction = "Review";
      break;
    }
    case "posted": {
      buttonAction = "Sold";
      break;
    }
    case "sold": {
      buttonAction = "Delete";
      break;
    }
  }

  return (
    <Card className="absolute right-0 top-[6rem] w-full max-w-[calc(100vw-19rem)]  h-[calc(100vh-6rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      <Typography variant="h5" color="blue-gray">
        {action} Figures
      </Typography>
      <div className="overflow-y-auto">
        <table className="w-full text-sm text-left text-black mt-10 ">
          <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
            <tr className="bg-primary text-text">
              <th scope="col" className="border px-6 py-3 w-2/5">
                Name
              </th>
              <th scope="col" className="border px-6 py-3 w-1/5 text-center">
                Rating
              </th>
              <th scope="col" className="border px-6 py-3 w-1/5 text-center">
                Price
              </th>
              <th scope="col" className="border px-6 py-3 text-center">
                Action
              </th>
            </tr>
            {data.map((toy) => {
              return (
                <tr
                  key={toy.id.toString()}
                  className="even:bg-white odd:bg-gray-100"
                >
                  <td className="border px-6 py-4">
                    <Link
                      href={`/filteredfigures/${action}/review/${toy.id}`}
                      className=" underline hover:text-primary"
                    >
                      {toy.name}
                    </Link>
                  </td>
                  <td className="border px-6 py-4 text-center">
                    <Rating value={toy.rating} readonly />
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {formatter.format(toy.price)}
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {action == "unchecked" ? (
                      <Link
                        href={`/filteredfigures/${action}/review/${toy.id}`}
                        passHref
                      >
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                          {buttonAction}
                        </button>
                      </Link>
                    ) : action == "posted" ? (
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {buttonAction}
                      </button>
                    ) : (
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        {buttonAction}
                      </button>
                    )}
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

export default Figures;
