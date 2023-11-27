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

// const toysArray: Toy[] = [
//   {
//     id: 1,
//     name: "Ninja",
//     origin: "UK",
//     brand: "Ferrari",
//     price: 1200,
//     width: 70,
//     height: 170,
//     weight: 250,
//     length: 100,
//     rating: 3,
//     status: "uncheck",
//     description: "beautiful",
//     conditions: "conditions",
//     pictures: [
//       {
//         id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
//         fileType: "image/webp",
//         pictureUrl:
//           "https://onepiecetreasuregk.net/cdn/shop/collections/6bb4c691b68569b75fa51528eabbd39_2260x.jpg?v=1660340062",
//       },
//       {
//         id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
//         fileType: "image/png",
//         pictureUrl:
//           "https://onepiecetreasuregk.net/cdn/shop/collections/6bb4c691b68569b75fa51528eabbd39_2260x.jpg?v=1660340062",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Samurai",
//     origin: "UK",
//     brand: "Ferrari",
//     price: 1200,
//     width: 70,
//     height: 170,
//     weight: 250,
//     length: 100,
//     rating: 3,
//     status: "posted",
//     description: "beautiful",
//     conditions: "conditions",
//     pictures: [
//       {
//         id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
//         fileType: "image/webp",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//       {
//         id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
//         fileType: "image/png",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Samurai",
//     origin: "UK",
//     brand: "Ferrari",
//     price: 1200,
//     width: 70,
//     height: 170,
//     weight: 250,
//     length: 100,
//     rating: 3,
//     status: "posted",
//     description: "beautiful",
//     conditions: "conditions",
//     pictures: [
//       {
//         id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
//         fileType: "image/webp",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//       {
//         id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
//         fileType: "image/png",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Sniper",
//     origin: "UK",
//     brand: "Ferrari",
//     price: 1200,
//     width: 70,
//     height: 170,
//     weight: 250,
//     length: 100,
//     rating: 5,
//     status: "posted",
//     description: "beautiful",
//     conditions: "conditions",
//     pictures: [
//       {
//         id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
//         fileType: "image/webp",
//         pictureUrl:
//           "https://onepiecetreasuregk.net/cdn/shop/collections/e90e0b70e19e1bca6bfb4b47732e33f_2260x.jpg?v=1660340100",
//       },
//       {
//         id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
//         fileType: "image/png",
//         pictureUrl:
//           "https://onepiecetreasuregk.net/cdn/shop/collections/e90e0b70e19e1bca6bfb4b47732e33f_2260x.jpg?v=1660340100",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Ninja",
//     origin: "UK",
//     brand: "Ferrari",
//     price: 1200,
//     width: 70,
//     height: 170,
//     weight: 250,
//     length: 100,
//     rating: 3,
//     status: "sold",
//     description: "beautiful",
//     conditions: "conditions",
//     pictures: [
//       {
//         id: "8fdfdaaf-9505-4b76-a8c5-d4414b909d54",
//         fileType: "image/webp",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//       {
//         id: "4bc380d7-4423-404c-89d9-7cc262d64d70",
//         fileType: "image/png",
//         pictureUrl:
//           "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
//       },
//     ],
//   },
// ];

export const FiguresProvider = ({ children }: FiguresProviderProps) => {
  const [toys, setToys] = useState<Toy[]>([]);

  const fetchbackend = async () => {
    const toy = await httpGetAllFigures();
    setToys(toy);
    console.log(toy);
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
