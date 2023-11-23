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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const elementsPerPage: number = 9;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedToys = toys.slice(startIndex, endIndex);


  const fetchbackend = async () => {
    let toy = toys.filter((toy) => toy.status == params.action);
    toy = toy.slice(startIndex, endIndex);
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
