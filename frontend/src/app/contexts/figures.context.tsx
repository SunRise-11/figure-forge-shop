"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { httpGetAllFigures } from "../api/http/requests";
import { Toy } from "../types/types";

type FiguresProviderProps = {
  children: ReactNode;
};

type FiguresContextType = {
  toys: Toy[];
};

export const FiguresContext = createContext<FiguresContextType>({
  toys: [],
});

const toysArray: Toy[] = [
  {
    id: 1,
    name: "Ninja",
    origin: "UK",
    brand: "Ferrari",
    price: 1200,
    width: 70,
    height: 170,
    weight: 250,
    length: 100,
    rating: 3,
    status: "uncheck",
    description: "beautiful",
    conditions: "conditions",
    pictures: [
      {
        id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
        fileType: "image/webp",
        pictureUrl:
          "https://figurestorage.blob.core.windows.net/figureimages/d060ae69-8960-4505-bd48-62607c526b6d",
      },
      {
        id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
        fileType: "image/png",
        pictureUrl:
          "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      },
    ],
  },
];

export const FiguresProvider = ({ children }: FiguresProviderProps) => {
  const [toys, setToys] = useState<Toy[]>(toysArray);

  const fetchbackend = async () => {
    const toy = await httpGetAllFigures();
    setToys(toy);
  };

  let value: FiguresContextType = {
    toys,
  };

  useEffect(() => {
    fetchbackend();
  }, []);

  return (
    <FiguresContext.Provider value={value}>{children}</FiguresContext.Provider>
  );
};
