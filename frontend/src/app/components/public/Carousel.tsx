import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import HeroImage from "../../../../public/hero-image.jpg";

const CarouselHomePage = () => {
  return (
    <Carousel className="rounded-xl z-10" autoplay>
      <Image
        src={HeroImage}
        width={400}
        height={400}
        alt="image 1"
        className="h-full w-full object-cover"
        priority
      />
      <Image
        src={HeroImage}
        width={400}
        height={400}
        alt="image 2"
        className="h-full w-full object-cover"
        priority
      />
      <Image
        src={HeroImage}
        width={400}
        height={400}
        alt="image 3"
        className="h-full w-full object-cover"
        priority
      />
    </Carousel>
  );
};

export default CarouselHomePage;
