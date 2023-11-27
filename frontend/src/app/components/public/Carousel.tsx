import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const CarouselHomePage = () => {
  return (
    <Carousel className="rounded-xl z-10" autoplay>
      <Image
        src="../hero-image.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src="../hero-image.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src="../hero-image.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselHomePage;
