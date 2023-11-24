"use client";
import RatingAdmin from "@/app/components/admin/RatingAdmin";
import { FiguresContext } from "@/app/contexts/figures.context";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const inputStyle =
    "bg-grey appearance-none border-2 border-secondary rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary";
  const fieldStyle = "flex flex-col gap-5 h-max mb-4 sm:w-1/2";

const ReviewPage = ({params}:{ params: { id: string } }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const {toys} = useContext(FiguresContext);
  const rating = watch("rating");

  const toy = toys.find(toy => toy.id === Number(params.id));
  const onSubmit = (data: any) => {
    const formData = {
      ...data,
    };
    console.log(formData);
  };

  const handleRatingChange = (nextValue: number) => {
    setValue("rating", nextValue);
  };

  return (
    <div className="absolute top-20 left-80  overflow-y-auto py-5">
      <div className="flex h-auto w-auto">
        {toy?.pictures.map((picture,index) => (
          <img src={picture} className="w-1/6" key={index}/>
        ))}
      </div>
      <form
        className="flex gap-5 h-max w-max mb-4 py-10 justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <fieldset className={fieldStyle}>
            <legend className="font-bold mb-2">Details</legend>

            <div className="flex  items-center gap-3">
              <label>Name</label>
              <input
                className={inputStyle}
                {...register("name")}
                placeholder="Name"
                value={toy?.name}
              />
            </div>

            <div className="flex items-center gap-3">
              <label>Origin</label>
              <input
                className={inputStyle}
                {...register("origin")}
                placeholder="Origin"
                value={toy?.origin}
              />
            </div>

            <div className="flex items-center gap-3">
              <label>Brand</label>
              <input
                className={inputStyle}
                {...register("brand")}
                placeholder="Brand"
                value={toy?.brand}
              />
            </div>

            <div className="flex items-center gap-3">
              <label>Price</label>
              <input
                className={inputStyle}
                {...register("price", { valueAsNumber: true })}
                type="number"
                step="0.01"
                placeholder="Price (EUR)"
                value={toy?.price}
              />
              <label>EUR</label>
            </div>
          </fieldset>

          <fieldset className={fieldStyle}>
            <legend className="font-bold mb-2">Dimensions</legend>
            <div className="flex items-center gap-3">
              <label>Width</label>
              <input
                className={inputStyle}
                {...register("width", { valueAsNumber: true })}
                type="number"
                placeholder="Width (cm)"
                value={toy?.width}
              />
              <label>cm</label>
            </div>
            <div className="flex items-center gap-3">
              <label>Length</label>
              <input
                className={inputStyle}
                {...register("length", { valueAsNumber: true })}
                type="number"
                placeholder="Length (cm)"
                value={toy?.length}
              />
              <label>cm</label>
            </div>

            <div className="flex items-center gap-3">
              <label>Heigth</label>
              <input
                className={inputStyle}
                {...register("height", { valueAsNumber: true })}
                type="number"
                placeholder="Height (cm)"
                value={toy?.height}
              />
              <label>cm</label>
            </div>
            <div className="flex items-center gap-3">
              <label>Weigth</label>
              <input
                className={inputStyle}
                {...register("weight", { valueAsNumber: true })}
                type="number"
                placeholder="Weight (g)"
                value={toy?.weight}
              />
              <label>g</label>
            </div>
          </fieldset>

          <fieldset className={fieldStyle}>
            <legend className="font-bold mb-2">Description</legend>
            <textarea
              className={inputStyle}
              {...register("description")}
              placeholder="Description"
              value={toy?.description}
            />
          </fieldset>
        </div>
        <div className="ml-40">
          <fieldset className={fieldStyle}>
            <legend className="font-bold mb-2">Conditions</legend>
            <textarea
              className={`${inputStyle} w-max`}
              {...register("conditions")}
              placeholder="conditions"
            />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="font-bold mb-2">Rating</legend>
            <RatingAdmin onRatingChange={handleRatingChange} />
          </fieldset>
          <div className="flex justify-around space-x-4 mt-10">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>

            <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Delete
            </button>
            <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewPage;
