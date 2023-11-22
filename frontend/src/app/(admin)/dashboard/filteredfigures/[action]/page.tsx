"use client";
import React, { useContext, useEffect, useState } from "react";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Toy } from "@/app/components/public/Card";
import Figures from "@/app/components/admin/Figures";

type Props = {
  params: { action: String };
};

const FilteredFigure = ({ params }: Props) => {
   const [data, setData] = useState<Toy[]>();
  const { toys } = useContext(FiguresContext);
  const fetchbackend = async () => {
    const toy = toys.filter((toy) => toy.status == params.action);
    setData(toy);
  };
  useEffect(() => {
    fetchbackend();
  }, []);
  if (data) { 
    return (
      <>
        <Figures action={params.action} data={data} />
      </>
    );
  }
};

export default FilteredFigure;
