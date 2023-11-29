import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import HeroImage1 from "../../../../public/hero-image.jpg";
import HeroImage2 from "../../../../public/Slide1.png"
import HeroImage3 from "../../../../public/Slide2.png"

const CarouselHomePage = () => {
  return (
    <Carousel className="rounded-xl z-10" autoplay>
      <Image
        src={HeroImage1}
        width={400}
        height={400}
        alt="image 1"
        className="h-full w-full object-cover"
        priority
      />
      <Image
        src={HeroImage2}
        width={400}
        height={400}
        alt="image 2"
        className="h-full w-full object-cover"
        priority
      />
      <Image
        src={HeroImage3}
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
