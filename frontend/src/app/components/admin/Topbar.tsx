"use client";
import { Card, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  return (
    <Card className="absolute top-0 right-0 w-full max-w-[calc(100vw-19rem)] h-20 p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2">
      <Typography variant="h2" color="blue-gray" className=" my-auto">
        {path[path.length - 1]}
      </Typography>
    </Card>
  );
};

export default Topbar;
