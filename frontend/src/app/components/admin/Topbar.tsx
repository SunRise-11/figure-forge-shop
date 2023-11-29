"use client";
import { Card, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  let label = path[path.length - 1];

  const topLabel = ["dashboard", "unchecked", "posted", "sold"];
  if (!topLabel.includes(label)) {
    label = "figure";
  }

  return (
    <Card className="absolute top-0 right-0 w-full max-w-[calc(100vw-19rem)] h-16 p-2 shadow-xl shadow-blue-gray-900/5 border-solid border-2">
      <Typography variant="h3" className=" my-auto text-primary">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Typography>
    </Card>
  );
};

export default Topbar;
