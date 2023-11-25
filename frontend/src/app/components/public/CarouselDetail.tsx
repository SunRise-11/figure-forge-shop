import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Picture } from "@/app/types/types";

type Props = {
  pictures: Picture[];
};

const CarouselDetail = ({ pictures }: Props) => {
  return (
    <Carousel className="rounded-xl z-10" autoplay>
      {pictures?.map((picture, index) => {
        return (
          <img
            key={index}
            src={picture.pictureUrl}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselDetail;
