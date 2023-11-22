"use client";

import React from "react";
import { Card, Typography } from "@material-tailwind/react";

type Props = {
  action: String;
};

const AllFigures = ({ action }: Props) => {
  return (
    <main className="w-screen h-screen bg-background flex items-center justify-center mt-10">
      <h1>All Figures</h1>
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
          <tr>
            <td className="border px-6 py-4">name 1</td>
            <td className="border px-6 py-4">
              <button>{action}</button>
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4">name 2</td>
            <td className="border px-6 py-4">
              <button>{action}</button>
            </td>
          </tr>
        </thead>
      </table>
    </main>
  );
};

export default AllFigures;