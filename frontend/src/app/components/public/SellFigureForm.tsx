"use client";
import { httpPostFigure, httpPostPicture } from "@/app/api/http/requests";
import { Figure, FigureDto, Picture } from "@/app/types/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SellFigureForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Figure>();
  const { user } = useUser();
  const [open, setOpen] = React.useState(false);
  const [savedPictures, setSavedPictures] = useState<Picture[]>([]);
  const [previewPictures, setPreviewPictures] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const handleOpen = () => setOpen(!open);

  let email = user?.email;
  if (email == null) {
    email = "unverified seller";
  }

  const onFormSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    const { pictures, ...figureDetails } = data;
    const figure: FigureDto = { ...figureDetails, pictures: savedPictures };
    try {
      const response = await httpPostFigure(figure);
      if (response.status != 201) {
        toast.error(
          `There was an error uploading the form: ${response.status}`
        );
      } else {
        router.push("/figures?submitted=true");
      }
    } catch (error) {
      toast.error("Error connecting to the server, please try again later");
      setSubmitting(false);
    }
  });

  useEffect(() => {
    if (Object.entries(errors).length > 0) {
      toast.error("Not all fields were entered correctly");
    }
  }, [errors]);

  const pictures: File[] = watch("pictures");

  const handlePictureChange = async (pictures: File[]) => {
    if (pictures != undefined && pictures.length > 0) {
      setSubmitting(true);
      const uploads = [...pictures].map(async (picture) => {
        try {
          const savedPicture = await httpPostPicture(picture);

          return { savedPicture, url: URL.createObjectURL(picture) };
        } catch (error) {
          toast.error(`Error uploading picture ${picture.name}: ${error}`);
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
      setSubmitting(false);
    }
  };

  useEffect(() => {
    handlePictureChange(pictures);
  }, [pictures]);

  const inputStyle =
    "bg-secondary appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:border-primary";

  const inputError =
    "bg-secondary appearance-none border-2 border-red-600 rounded w-full py-2 px-4 text-text leading-tight focus:outline-none";

  const errorText = "text-red-600";

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
          className={errors.name ? inputError : inputStyle}
          {...register("name", {
            required: true,
          })}
          placeholder="Name"
        />
        {errors.name && errors.name.type === "required" && (
          <span className={errorText} role="alert">
            Name is required
          </span>
        )}
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
          className={errors.description ? inputError : inputStyle}
          {...register("description", {
            required: true,
          })}
          placeholder="Description"
        />
        {errors.description && errors.description.type === "required" && (
          <span className={errorText} role="alert">
            Description is required
          </span>
        )}
        <input
          className={errors.price ? inputError : inputStyle}
          {...register("price", { required: true, valueAsNumber: true })}
          type="number"
          step="0.01"
          placeholder="Price (EUR)"
        />
        {errors.price && errors.price.type === "required" && (
          <span className={errorText} role="alert">
            Price is required
          </span>
        )}
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
          className={errors.pictures ? inputError : inputStyle}
          type="file"
          {...register("pictures", { required: true })}
          multiple
        />
        {errors.pictures && errors.pictures.type === "required" && (
          <span className={errorText} role="alert">
            You must upload at least one picture
          </span>
        )}
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="md:inline-flex md:w-auto w-full px-2 py-1 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-text hover:bg-secondary hover:transition-all"
      >
        Submit
      </button>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </form>
  );
};
