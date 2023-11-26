import Link from "next/link";
import Image from "next/image";
import React from "react";
import SellingImage from "../../../../public/hero-selling-image.jpg";

const RightPhotoBanner = () => {
  return (
    <div className="bg-background flex flex-col sm:flex-row justify-between items-center my-10 mt-20">
      <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10">
        <Link href="/sell-figure">
          <h1 className=" text-2xl font-bold text-primary underline">
            WHY SELLING WITH US
          </h1>
        </Link>
        <p className="text-text">
          Welcome to Figure Forge, the ultimate destination for collectors and
          aficionados passionate about action figures. Our store encapsulates
          the spirit of preservation and celebration of iconic figures from
          various universes. Within our vibrant displays lie treasures waiting
          to be discovered. Our dedicated team understands the sentimental value
          each figure holds. As a former collector myself, I experienced
          firsthand the seamless process of parting ways with a cherished action
          figure.
        </p>
      </div>
      <Image
        className=" brightness-75"
        src={SellingImage.src}
        width={300}
        height={300}
        alt="Hero Image"
      />
    </div>
  );
};

export default RightPhotoBanner;
