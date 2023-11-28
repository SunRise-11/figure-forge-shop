"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { httpGetAllFigures } from "../api/http/requests";
import { Toy } from "../types/types";

type FiguresProviderProps = {
  children: ReactNode;
};

type FiguresContextType = {
  toys: Toy[];
  deleteFigure: (id: string) => void;
  updateFigure: (updatedFigure: Toy) => void;
};

export const FiguresContext = createContext<FiguresContextType>({
  toys: [],
  deleteFigure: (id: string) => {},
  updateFigure: (updatedFigure: Toy) => {},
});

export const FiguresProvider = ({ children }: FiguresProviderProps) => {
  const [toys, setToys] = useState<Toy[]>([]);

  const fetchbackend = async () => {
    const fetchedToys = await httpGetAllFigures();
    setToys(fetchedToys);
  };

  const deleteFigure = (id: string) => {
    if (id !== undefined) {
      console.log("I am deleting", id);
      setToys((prev) => prev.filter((toy) => toy.id !== id));
    }
  };

  const updateFigure = (updatedFigure: Toy) => {
    setToys((prevToys) =>
      prevToys.map((toy) =>
        toy.id === updatedFigure.id ? { ...toy, ...updatedFigure } : toy
      )
    );
  };

  let value: FiguresContextType = {
    toys,
    deleteFigure,
    updateFigure,
  };

  useEffect(() => {
    fetchbackend();
  }, []);

  return (
    <FiguresContext.Provider value={value}>{children}</FiguresContext.Provider>
  );
};
