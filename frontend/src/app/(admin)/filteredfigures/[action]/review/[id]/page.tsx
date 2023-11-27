"use client";
import { httpPutFigure,httpDeleteFigure } from "@/app/api/http/requests";
import RatingAdmin from "@/app/components/admin/RatingAdmin";
import CarouselDetail from "@/app/components/public/CarouselDetail";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Figure } from "@/app/types/types";
import { Card } from "@material-tailwind/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const inputStyle =
  "bg-grey appearance-none border-2 border-secondary rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary";
const fieldStyle = "flex flex-col gap-5 h-max mb-4 sm:w-1/2";

const ReviewPage = ({ params }: { params: { id: string } }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const { toys } = useContext(FiguresContext);
  const [figure, setFigure] = useState<Figure>();

  const rating = watch("rating");

  const toy = toys.find((toy) => toy.id === params.id);
  const onSubmit = (data: any) => {
    const formData = {
      ...data,
    };
    console.log(formData);

    httpPutFigure(formData)
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
        setFigure(data);
        sendToDiscord();
      });
  };

  const handleDelete = async (id: string | undefined) => {
    if (id !== undefined) {
      const newId = "7a19f6c5-5dfa-4d74-ae1e-d9f3469ab325";
      return await httpDeleteFigure(newId);
      // console.log("server response status:", serverResponse.status);
      // console.log("server response status text:", serverResponse.statusText);
  
      // if (serverResponse.status === 204) {
      //   console.log("deleted figure 1");
      //   deleteFigure(1);
      // } else {
      //   const responseText = await serverResponse.text();
      //   throw new Error(`Server response: ${responseText}`);
      // }
    }
  };

  const sendToDiscord = async () => {
    console.log("figure id is : " + params.id);
    const discordUrl =
      "https://discord.com/api/webhooks/1178368931262631946/LQmN55RY6c6cGiXolEGkhh4lmBtUBEEuPJ19eXQxpNYZN_mGEzywFUZPfJf1fwJK_JBm";

    const reportData = {
      tts: false,
      color: "white",
      embeds: [
        {
          title: "New product available",
          description:
            "Name: " +
            figure?.name +
            "\n " +
            "Description : " +
            figure?.description +
            "\n " +
            "Price : " +
            figure?.price +
            "\n " +
            "Url: https://figure-forge-shop.vercel.app/figures/" +
            params.id +
            "\n ",
        },
      ],
    };
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    };
    await fetch(discordUrl, requestOptions)
      .then((response) => response)
      .catch((error) => {
        // Handle any errors that occur during the request
      });
  };

  const handleRatingChange = (nextValue: number) => {
    setValue("rating", nextValue);
  };

  return (
    <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] top-20 max-h-[calc(100vh-5rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      <div className="overflow-y-auto">
        <div className=" h-96 w-96">
          <CarouselDetail pictures={toy!.pictures} />
        </div>
        <form
          className="flex gap-5 h-max w-max mb-4 py-10 justify-between relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row gap-14 absolute left-[25rem] -top-96 ">
            <fieldset className={`${fieldStyle} `}>
              <legend className="font-bold mb-2">Details</legend>

              <div className="flex  items-center gap-3 w-full">
                <label className="flex-1">Name</label>
                <br />
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("name")}
                  placeholder="Name"
                  value={toy?.name}
                />
              </div>

              <div className="flex items-center gap-3 w-full">
                <label className="flex-1">Origin</label>
                <br />
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("origin")}
                  placeholder="Origin"
                  value={toy?.origin}
                />
              </div>

              <div className="flex items-center gap-3 w-full">
                <label className="flex-1">Brand</label>
                <br />
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("brand")}
                  placeholder="Brand"
                  value={toy?.brand}
                />
              </div>

              <div className="flex items-center gap-3 w-full">
                <label className="flex-1">Price</label>
                <br />
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("price", { valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  placeholder="Price (EUR)"
                  value={toy?.price}
                />
              </div>
            </fieldset>

            <fieldset className={`${fieldStyle} ml-5`}>
              <legend className="font-bold mb-2">Dimensions</legend>
              <div className="flex items-center gap-3">
                <label className="flex-1">Width</label>
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("width", { valueAsNumber: true })}
                  type="number"
                  placeholder="Width (cm)"
                  value={toy?.width}
                />
                <label>cm</label>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex-1">Length</label>
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("length", { valueAsNumber: true })}
                  type="number"
                  placeholder="Length (cm)"
                  value={toy?.length}
                />
                <label>cm</label>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex-1">Heigth</label>
                <input
                  className={`${inputStyle} flex-2`}
                  {...register("height", { valueAsNumber: true })}
                  type="number"
                  placeholder="Height (cm)"
                  value={toy?.height}
                />
                <label>cm</label>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex-1">Weigth</label>
                <input
                  className={`${inputStyle} flex-1`}
                  {...register("weight", { valueAsNumber: true })}
                  type="number"
                  placeholder="Weight (g)"
                  value={toy?.weight}
                />
                <label>g</label>
              </div>
            </fieldset>

            <fieldset className={`${fieldStyle} absolute top-[17rem]`}>
              <legend className="font-bold mb-2">Description</legend>
              <textarea
                className={`${inputStyle} w-full`}
                {...register("description")}
                placeholder="Description"
                value={toy?.description}
              />
            </fieldset>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="mt-11 mr-10">
              <legend className="font-bold mb-2">Conditions</legend>
              <textarea
                className={`${inputStyle} w-max`}
                {...register("conditions")}
                placeholder="conditions"
              />
            </div>
            <fieldset className="mt-6">
              <legend className="font-bold mb-2">Rating</legend>
              <RatingAdmin onRatingChange={handleRatingChange} />
            </fieldset>
            <div className="flex justify-around space-x-4 mt-10 ml-10">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>

              <button /*onClick={() => handleDelete(toy.id)} */ className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
              <Link href={"/filteredfigures/uncheck"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ReviewPage;
