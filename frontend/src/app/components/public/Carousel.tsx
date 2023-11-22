import React from "react";
import { Carousel } from "@material-tailwind/react";

const CarouselHomePage = () => {
  return (
    <Carousel className="rounded-xl" autoplay>
      <img
        src="wink-studio-luffy-nika-lightning-resin-statue003.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="wink-studio-luffy-nika-lightning-resin-statue003.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="wink-studio-luffy-nika-lightning-resin-statue003.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselHomePage;
