"use client";
import React, { useContext, useEffect, useState } from "react";
import Rating from "@/app/components/public/Rating";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Toy } from "@/app/components/public/Card"; 
import Carousel from "@/app/components/public/Carousel";

type Props = {
  params: { id: Number };
};

const DetailPage = ({ params }: Props) => {
  const [data, setData] = useState<Toy>();
  const { toys } = useContext(FiguresContext);
  const fetchbackend = async () => {
    const toy = toys.filter((toy) => toy.id == params.id);
    setData(toy[0]);
    // const response = await axios.get(
    //   "http://localhost:8080/public/figures" + params.id
    // );
    // setData(response.data);
  };

  useEffect(() => {
    fetchbackend();
  }, []);
  if (data) {
    return (
      <>
        <Carousel />
        <div className="flex flex-col sm:flex-row h-max mb-4 py-10">
          <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10 w-1/2">
            <legend className="text-lg font-semibold">Details</legend>
            <div className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-origin"
                  >
                    Origin
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-origin"
                    type="text"
                    value={data.origin.toString()}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-brand"
                  >
                    Brand
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-brand"
                    type="text"
                    value={data.brand.toString()}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-price"
                  >
                    Price
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-price"
                    type="text"
                    value={data.price.toString()}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10 w-1/2">
            <legend className="text-lg font-semibold">Dimention</legend>
            <div className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-width"
                  >
                    Width
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-width"
                    type="text"
                    value={data.width.toString()}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-height"
                  >
                    Height
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-height"
                    type="text"
                    value={data.height.toString()}
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-diameter"
                  >
                    Diameter
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-diameter"
                    type="text"
                    readOnly
                    value={data.diameter.toString()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-max mb-4">
          <div className="flex flex-row flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <legend className="text-lg font-semibold">Description</legend>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                placeholder="description"
                readOnly
                value={data.description.toString()}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-max mb-4">
          <div className="flex flex-row flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <legend className="text-lg font-semibold">Conditions</legend>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-condition"
                placeholder="..."
                readOnly
                value={data.conditions.toString()}
              />
            </div>
          </div>
        </div>
        <Rating />
      </>
    );
  }
};

export default DetailPage;
