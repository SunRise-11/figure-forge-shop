"use client"
import { ReactNode, createContext, useEffect, useState } from "react";

type Toy = {
    id: Number;
    name: String;
    origin: String;
    brand: String;
    price: Number;
    width: Number;
    diameter: Number;
    height: Number;
    rating: number;
    description: String;
    detail: String;
    pictures: String[];
  };

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
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 2,
      name: "Samurai",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 3,
      name: "Paco",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 4,
      name: "Pepe",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 5,
      name: "Kevin",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 6,
      name: "Fabio",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 7,
      name: "Alex",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 8,
      name: "Rashin",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 9,
      name: "Pulgarcito",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 10,
      name: "Javi",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 11,
      name: "Chewaka",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 12,
      name: "Musk",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 13,
      name: "Bill Gates",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 14,
      name: "Adam",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 15,
      name: "Falcao",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 16,
      name: "Otamendi",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 17,
      name: "Falcao",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 18,
      name: "Griezman",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 19,
      name: "Bernardo",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 20,
      name: "Haland",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    {
      id: 21,
      name: "Gregory",
      origin: "UK",
      brand: "Ferrari",
      price: 1200,
      width: 70,
      diameter: 40,
      height: 170,
      rating: 3,
      description: "beautiful",
      detail: "nothing",
      pictures: [
        "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
      ],
    },
    // {
    //   id: 22,
    //   name: "Orlando",
    //   origin: "UK",
    //   brand: "Ferrari",
    //   price: 1200,
    //   width: 70,
    //   diameter: 40,
    //   height: 170,
    //   rating: 3,
    //   description: "beautiful",
    //   detail: "nothing",
    //   pictures: [
    //     "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
    //   ],
    // },
    // {
    //   id: 23,
    //   name: "Matti",
    //   origin: "UK",
    //   brand: "Ferrari",
    //   price: 1200,
    //   width: 70,
    //   diameter: 40,
    //   height: 170,
    //   rating: 3,
    //   description: "beautiful",
    //   detail: "nothing",
    //   pictures: [
    //     "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
    //   ],
    // },
    // {
    //   id: 24,
    //   name: "Gregory",
    //   origin: "UK",
    //   brand: "Ferrari",
    //   price: 1200,
    //   width: 70,
    //   diameter: 40,
    //   height: 170,
    //   rating: 3,
    //   description: "beautiful",
    //   detail: "nothing",
    //   pictures: [
    //     "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
    //   ],
    // },
    // {
    //   id: 25,
    //   name: "Beckam",
    //   origin: "UK",
    //   brand: "Ferrari",
    //   price: 1200,
    //   width: 70,
    //   diameter: 40,
    //   height: 170,
    //   rating: 3,
    //   description: "beautiful",
    //   detail: "nothing",
    //   pictures: [
    //     "https://i.etsystatic.com/45624040/r/il/f51b82/5215193199/il_fullxfull.5215193199_3esv.jpg",
    //   ],
    // },
    
  ];

export const FiguresProvider = ({children}: FiguresProviderProps) => {
    const [toys, setToys] = useState<Toy[]>(toysArray);

    const value: FiguresContextType = {
        toys
    }

    return ( 
        <FiguresContext.Provider value={value}>
            {children}
        </FiguresContext.Provider>
    );
};