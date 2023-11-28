"use client";
import { httpPutFigure, httpDeleteFigure } from "@/app/api/http/requests";
import RatingAdmin from "@/app/components/admin/RatingAdmin";
import CarouselDetail from "@/app/components/public/CarouselDetail";
import { FiguresContext } from "@/app/contexts/figures.context";
import { Figure } from "@/app/types/types";
import { Card } from "@material-tailwind/react";
import Link from "next/link";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const inputStyle =
  "bg-grey appearance-none border-2 border-secondary rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary";
const fieldStyle = "flex flex-col gap-5 h-max mb-4 sm:w-1/2";

const ReviewPage = ({ params }: { params: { id: string } }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const { toys, deleteFigure, updateFigure } = useContext(FiguresContext);
  const router = useRouter();
  const rating = watch("rating");
  const toy = toys.find((toy) => toy.id === params.id);
  const [status, setStatus] = useState<string>(toy ? toy.status : 'posted');

  const onSubmit = (data: any) => {
    const formData = { status: status, ...data };
    
    httpPutFigure(formData, toy!.id)
      .then((response) => {
        if (response.ok) {
          console.log("responde ok.");
          return response.json();
        } else {
          throw new Error(`Failed to updtae data. Status: ${response.status}`);
        }
      })
      .then((data) => {
        updateFigure(data);  
        if (status == "posted") {
          sendToDiscord();
        }
      });
  };

  const handleDelete = async (id: string) => {
    if (id !== undefined) {
      const serverResponse = await httpDeleteFigure(id);
      console.log("Server Response", serverResponse);

      if (serverResponse.status === 204) {
        deleteFigure(id);
        router.push("/dashboard");
      } else {
        const responseText = await serverResponse.text();
        throw new Error(`Server response: ${responseText}`);
      }
    }
  };

  const sendToDiscord = async () => { 
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
            toy?.name +
            "\n " +
            "Description : " +
            toy?.description +
            "\n " +
            "Price : " +
            toy?.price +
            "\n " +
            "Url: https://figure-forge-shop.vercel.app/figures/" +
            toy?.id +
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

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {  
    setStatus(event.target.value);
    console.log("Status changed",status);
  };

  const handleRatingChange = (nextValue: number) => {
    setValue("rating", nextValue);
  };

  return (
    <Card className="absolute right-0 w-full max-w-[calc(100vw-19rem)] top-20 max-h-[calc(100vh-5rem)] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 ">
      {toy && (
        <div className="overflow-y-auto flex flex-col md:flex-row md:gap-5">
          <div className="h-96 w-full md:w-1/2">
            <CarouselDetail pictures={toy!.pictures} />
          </div>
          <form
            className="flex flex-col gap-5 w-full mb-4 py-10 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex gap-14 ">
              <fieldset className={`${fieldStyle} `}>
                <legend className="font-bold mb-2">Details</legend>

                <div className="flex  items-center gap-3 w-full">
                  <label className="flex-1">Name</label>
                  <br />
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("name")}
                    placeholder="Name"
                    defaultValue={toy?.name}
                  />
                  <label className="text-transparent"> sm</label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Status</label>
                  <br />
                  <select
                    id="ddl_status"
                    className="p-2 mr-4  text-sm border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    onChange={handleStatusChange}  
                     value={toy?.status}
                  >
                    <option value="unckeck">Unckeck</option>
                    <option value="posted">Posted</option>
                    <option value="sold">sold</option>
                  </select>
                  <label className="text-transparent"> sm</label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Origin</label>
                  <br />
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("origin")}
                    placeholder="Origin"
                    defaultValue={toy?.origin}
                  />
                  <label className="text-transparent"> sm</label>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Brand</label>
                  <br />
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("brand")}
                    placeholder="Brand"
                    defaultValue={toy?.brand}
                  />
                  <label className="text-transparent"> sm</label>
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
                    defaultValue={toy?.price}
                  />
                  <label className="text-transparent"> sm</label>
                </div>
              </fieldset>

              <fieldset className={`${fieldStyle} `}>
                <legend className="font-bold mb-2">Dimensions</legend>
                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Width</label>
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("width", { valueAsNumber: true })}
                    type="number"
                    placeholder="Width (cm)"
                    defaultValue={toy?.width}
                  />
                  <label>cm</label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Length</label>
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("length", { valueAsNumber: true })}
                    type="number"
                    placeholder="Length (cm)"
                    defaultValue={toy?.length}
                  />
                  <label>cm</label>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Heigth</label>
                  <input
                    className={`${inputStyle} flex-2`}
                    {...register("height", { valueAsNumber: true })}
                    type="number"
                    placeholder="Height (cm)"
                    defaultValue={toy?.height}
                  />
                  <label>cm</label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <label className="flex-1">Weigth</label>
                  <input
                    className={`${inputStyle} flex-1`}
                    {...register("weight", { valueAsNumber: true })}
                    type="number"
                    placeholder="Weight (g)"
                    defaultValue={toy?.weight}
                  />
                  <label>gm</label>
                </div>
              </fieldset>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:mt-5">
              <div className="flex-grow">
                <legend className="font-bold mb-2">Description</legend>
                <textarea
                  className={`${inputStyle} w-full`}
                  {...register("description")}
                  placeholder="Description"
                  defaultValue={toy?.description}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:mt-5">
              <div className="flex-grow">
                <legend className="font-bold mb-2">Conditions</legend>
                <textarea
                  className={`${inputStyle} w-full`}
                  {...register("condition")}
                  placeholder="conditions"
                  defaultValue={toy?.conditions}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:mt-5">
              <fieldset className="mt-6">
                <legend className="font-bold mb-2">Rating</legend>
                <RatingAdmin rate={toy.rating} onRatingChange={handleRatingChange} />
              </fieldset>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:mt-5">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(toy!.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
              <Link href={"/filteredfigures/unchecked"}>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
};

export default ReviewPage;
