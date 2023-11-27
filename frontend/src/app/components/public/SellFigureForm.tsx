"use client";
import { httpPostFigure, httpPostPicture } from "@/app/api/http/requests";
import { Figure, FigureDto, Picture } from "@/app/types/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const SellFigureForm = () => {
  const { register, handleSubmit, watch } = useForm<Figure>();
  const { user } = useUser();

  let email = user?.email;
  if (email == null) {
    email = "unverified seller";
  }

  const onFormSubmit = handleSubmit((data) => {
    const { pictures, ...figureDetails } = data;
    const figure: FigureDto = { ...figureDetails, pictures: savedPictures };
    httpPostFigure(figure);
  });

  const [savedPictures, setSavedPictures] = useState<Picture[]>([]);
  const [previewPictures, setPreviewPictures] = useState<string[]>([]);

  const pictures: File[] = watch("pictures");

  useEffect(() => {
    console.log(pictures);
    handlePictureChange(pictures);
  }, [pictures]);

  const handlePictureChange = async (pictures: File[]) => {
    if (pictures != undefined && pictures.length > 0) {
      const uploads = [...pictures].map(async (picture, index) => {
        try {
          const savedPicture = await httpPostPicture(picture);

          return { savedPicture, url: URL.createObjectURL(picture) };
        } catch (error) {
          console.error(`Error uploading picture ${picture}:`, error);
          // TODO: add toast message that file was not uploaded
          return { error, picture };
        }
      });

      const results = await Promise.all(uploads);

      results.forEach((result) => {
        if (result.savedPicture) {
          setSavedPictures((prev) => [...prev, result.savedPicture]);
          setPreviewPictures((prev) => [...prev, result.url]);
        }
      });
    }
  };

  const inputStyle =
    "bg-secondary appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:border-primary";
  const fieldStyle = "flex flex-col gap-5 h-max mb-4 w-full px-4 sm:w-1/2";
  return (
    <form
      className="flex flex-col items-center gap-5 h-max mb-4 py-10 pt-20"
      onSubmit={onFormSubmit}
    >
      <legend className=" text-2xl font-semibold text-text">Details</legend>
      <fieldset className={fieldStyle}>
        <input className="hidden" {...register("seller")} value={email} />
        <input
          className={inputStyle}
          {...register("name")}
          placeholder="Name"
        />
        <input
          className={inputStyle}
          {...register("origin")}
          placeholder="Origin"
        />
        <input
          className={inputStyle}
          {...register("brand")}
          placeholder="Brand"
        />
        <textarea
          className={inputStyle}
          {...register("description")}
          placeholder="Description"
        />
        <input
          className={inputStyle}
          {...register("price", { valueAsNumber: true })}
          type="number"
          step="0.01"
          placeholder="Price (EUR)"
        />
      </fieldset>

      <legend className=" text-2xl font-semibold text-text">Dimensions</legend>
      <fieldset className={fieldStyle}>
        <input
          className={inputStyle}
          {...register("width", { valueAsNumber: true })}
          type="number"
          placeholder="Width (cm)"
        />
        <input
          className={inputStyle}
          {...register("length", { valueAsNumber: true })}
          type="number"
          placeholder="Length (cm)"
        />
        <input
          className={inputStyle}
          {...register("height", { valueAsNumber: true })}
          type="number"
          placeholder="Height (cm)"
        />
        <input
          className={inputStyle}
          {...register("weight", { valueAsNumber: true })}
          type="number"
          placeholder="Weight (g)"
        />
      </fieldset>

      <legend className=" text-2xl font-semibold text-text">Pictures</legend>
      <fieldset className={fieldStyle}>
        {previewPictures && (
          <fieldset className="flex flex-wrap -mx-4">
            {previewPictures.map((picture, index) => {
              return (
                <Image
                  key={index}
                  className="w-1/5 px-4 mb-4"
                  src={picture}
                  alt="Uploaded picture preview"
                  key={index}
                />
              );
            })}
          </fieldset>
        )}
        <input
          className={inputStyle}
          type="file"
          {...register("pictures")}
          multiple
        />
      </fieldset>

      <button
        type="submit"
        className="lg:inline-flex lg:w-auto w-52 px-3 py-2 text-xl rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all"
      >
        Submit
      </button>
    </form>
  );
};
