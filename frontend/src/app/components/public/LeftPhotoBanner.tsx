import Link from "next/link";
import Image from "next/image";
import React from "react";
import AboutImage from "../../../../public/hero-about-image.png";

const LeftPhotoBanner = () => {
  return (
    <div className="bg-accent flex flex-col sm:flex-row justify-between items-center my-10 mt-20">
      <Image
        className=" brightness-75"
        src={AboutImage.src}
        width={400}
        height={400}
        alt="Hero Image"
      />
      <div className="flex flex-col sm:items-start sm:justify-center py-4 gap-10">
        <h1 className=" text-2xl font-bold text-background">ABOUT US</h1>
        <p className="text-background">
          Welcome to Figure Forge, the ultimate destination for collectors and
          aficionados passionate about action figures. Our store encapsulates
          the spirit of preservation and celebration of iconic figures from
          various universes. Within our vibrant displays lie treasures waiting
          to be discovered. Our dedicated team understands the sentimental value
          each figure holds. As a former collector myself, I experienced
          firsthand the seamless process of parting ways with a cherished action
          figure.
        </p>
        <Link href="/about">
          <p className=" text-primary underline">Read more</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftPhotoBanner;
