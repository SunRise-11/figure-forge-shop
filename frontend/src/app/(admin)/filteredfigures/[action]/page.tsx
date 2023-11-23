"use client";
import React, { useContext, useEffect, useState } from "react";
import { FiguresContext } from "@/app/contexts/figures.context";
import Figures from "@/app/components/admin/Figures";

type Props = {
  params: { action: String };
};

const FilteredFigure = ({ params }: Props) => {
  const { toys } = useContext(FiguresContext);

  return (
    <Figures
      action={params.action}
      data={toys.filter((toy) => toy.status == params.action)}
    />
  );
};

export default FilteredFigure;
