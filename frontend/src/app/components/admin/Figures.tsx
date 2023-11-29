"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Toy } from "@/app/types/types";
import { httpDeleteFigure, httpPutFigure } from "@/app/api/http/requests";
import { FiguresContext } from "@/app/contexts/figures.context";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Card,
  Typography,
  Rating,
} from "@material-tailwind/react";

type Props = {
  action: String;
  data: Toy[];
};

const Figures = ({ action, data }: Props) => {
  const { toys, deleteFigure, updateFigure } = useContext(FiguresContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  const handleDelete = async (id: string) => {
    if (id !== undefined) {
      const serverResponse = await httpDeleteFigure(id);
      console.log("Server Response", serverResponse);

      if (serverResponse.status === 204) {
        deleteFigure(id);
      } else {
        const responseText = await serverResponse.text();
        throw new Error(`Server response: ${responseText}`);
      }
    }
  };

  const handleUpdate = (toy: Toy) => {
    const formData = {
      name: toy.name,
      description: toy.description,
      condition: toy.conditions,
      brand: toy.brand,
      price: toy.price,
      origin: toy.origin,
      width: toy.width,
      height: toy.height,
      length: toy.length,
      weight: toy.weight,
      rating: toy.rating,
      status: "sold",
    };

    httpPutFigure(formData, toy!.id)
      .then((response) => {
        if (response.ok) {
          console.log("responde ok.");
          return response.json();
        } else {
          throw new Error(`Failed to add report. Status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log("Data checked.");
        console.log("Figure from backend", data);
        updateFigure(data);
      });
  };

  let buttonAction = "";
  switch (action) {
    case "unchecked": {
      buttonAction = "Review";
      break;
    }
    case "posted": {
      buttonAction = "Sold";
      break;
    }
    case "sold": {
      buttonAction = "Delete";
      break;
    }
  }

  const title = action.charAt(0).toUpperCase() + action.slice(1) + " Figures"; 

  return (
    <Card className="absolute right-0 top-[6rem] w-full max-w-[calc(100vw-19rem)]  h-[calc(100vh-6rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      <Typography variant="h5" color="blue-gray">
        {title} 
      </Typography>
      <div className="overflow-y-auto">
        <table className="w-full text-sm text-left text-black mt-10 ">
          <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
            <tr className="bg-primary text-text">
              <th scope="col" className="border px-6 py-3 w-2/5">
                Name
              </th>
              <th scope="col" className="border px-6 py-3 w-1/5 text-center">
                Rating
              </th>
              <th scope="col" className="border px-6 py-3 w-1/5 text-center">
                Price
              </th>
              <th scope="col" className="border px-6 py-3 text-center">
                Action
              </th>
            </tr>
            {data.map((toy) => {
              return (
                <tr
                  key={toy.id.toString()}
                  className="even:bg-white odd:bg-gray-100"
                >
                  <td className="border px-6 py-4">
                    <Link
                      href={`/filteredfigures/${action}/review/${toy.id}`}
                      className=" underline hover:text-primary"
                    >
                      {toy.name}
                    </Link>
                  </td>
                  <td className="border px-6 py-4 text-center">
                    <Rating value={toy.rating} readonly />
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {formatter.format(toy.price)}
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {action == "unchecked" ? (
                      <Link
                        href={`/filteredfigures/${action}/review/${toy.id}`}
                        passHref
                      >
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                          {buttonAction}
                        </button>
                      </Link>
                    ) : action == "posted" ? (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleUpdate(toy)}
                      >
                        {buttonAction}
                      </button>
                    ) : (
                      <Popover
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            {buttonAction}
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                            <div>
                              <Typography variant="h6" color="blue-gray">
                                Confirm Delete
                              </Typography>
                            </div>
                          </div>

                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-bold"
                          >
                            Are you sure want to delete : {toy.name} statue ?
                          </Typography>
                          <div className="mt-4 flex items-center justify-end gap-5">
                            <Button
                              variant="gradient"
                              color="red"
                              onClick={() => handleDelete(toy!.id)}
                            >
                              <span>Confirm</span>
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </Card>
  );
};

export default Figures;
