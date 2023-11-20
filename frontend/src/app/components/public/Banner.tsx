import React from "react";
import Image from "next/image";


type Props = {
  name: String;
  imageSource:string;
};

const Banner = ({ name , imageSource }: Props) => {
  return (
    <>
     <div className="w-full relative">
        <Image
          className=" brightness-90"
          src={imageSource}
          width={1600}
          height={900}
          alt="Hero Image"
        />
      </div>
    <div className="w-full h-20 bg-purple-900 text-white text-4xl flex justify-center items-center">
      {name}
    </div>
    </>
   
  );
};

export default Banner;
