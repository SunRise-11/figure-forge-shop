"use client";

import React from "react";
import { Toy } from "../public/Card";
import { Card, Typography } from "@material-tailwind/react";

type Props = {
  action: String;
  data: Toy[];
};

const Figures = ({ action, data }: Props) => {
  let buttonAction = "";
   switch (action) {
    case "uncheck": {
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
    <main className="w-3/4 absolute left-[19rem] h-screen flex items-center justify-center mt-10">
      <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] h-max p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2">
        <Typography variant="h5" color="blue-gray" className=" my-auto ">
          {action} Figures
        </Typography>
        <table className="w-full text-sm text-left text-black ">
          <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
            <tr>
              <th scope="col" className="border px-6 py-3">
                Name
              </th>
              <th scope="col" className="border px-6 py-3">
                Action
              </th>
            </tr>
            {data.map((toy) => {
              return (
                <tr>
                  <td className="border px-6 py-4">{toy.name}</td>
                  <td className="border px-6 py-4">
                    {
                    action == "uncheck" ? (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {buttonAction}
                      </button>
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
      </Card>
    </main>
  );
};

export default Figures;
