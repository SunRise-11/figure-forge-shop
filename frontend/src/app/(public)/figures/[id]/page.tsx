"use client";
import React, { useContext, useEffect, useState } from "react";
import Rating from "@/app/components/public/Rating";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Toy } from "@/app/types/types";
import CarouselDetail from "@/app/components/public/CarouselDetail";

type Props = {
  params: { id: string };
};

const DetailPage = ({ params }: Props) => {
  const [data, setData] = useState<Toy>();
  const { toys } = useContext(FiguresContext);
  console.log(toys);
  const fetchbackend = async () => {
    console.log(toys);
    let selectedFigure: Toy[] = [];
    if (toys.length > 0) {
     // selectedFigure = 
    } else {
      selectedFigure = toys.filter((toy) => toy.id == params.id);
    }
    setData(selectedFigure[0]);
  };

  useEffect(() => {
    console.log(toys);
    fetchbackend();
  }, []);
  if (data) {
    return (
      <>
        <CarouselDetail pictures={data.pictures} />
        <div className="w-full h-20 bg-primary text-text text-4xl flex justify-center items-center">
          {data.name}
        </div>
        <div className="flex flex-col sm:flex-row h-max mb-4 py-10">
          <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10 w-1/2">
            <legend className="text-lg text-text font-semibold">Details</legend>
            <div className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-origin"
                  >
                    Origin
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-origin"
                    type="text"
                    value={data.origin}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-brand"
                  >
                    Brand
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-brand"
                    type="text"
                    value={data.brand}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-price"
                  >
                    Price
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-price"
                    type="text"
                    value={data.price}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10 w-1/2">
            <legend className="text-lg text-text font-semibold">
              Dimension
            </legend>
            <div className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-width"
                  >
                    Width
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-width"
                    type="text"
                    value={data.width}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-height"
                  >
                    Height
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-height"
                    type="text"
                    value={data.height}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block  text-text font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-diameter"
                  >
                    Weight
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-diameter"
                    type="text"
                    readOnly
                    value={data.weight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-max mb-4">
          <div className="flex flex-row flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <legend className="text-lg text-text font-semibold">
                Description
              </legend>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-background border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                placeholder="description"
                readOnly
                value={data.description}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-max mb-4">
          <div className="flex flex-row flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <legend className="text-lg text-text font-semibold">
                Conditions
              </legend>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-background border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-condition"
                placeholder="..."
                readOnly
                value={data.conditions}
              />
            </div>
          </div>
        </div>

        <Rating star={data.rating} />
      </>
    );
  }
};

export default DetailPage;
