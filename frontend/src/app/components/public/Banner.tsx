import React from "react";

type Props = {
  name: String;
};

const Banner = ({ name }: Props) => {
  return (
    <div className="w-full h-20 bg-purple-900 text-white text-4xl flex justify-center items-center">
      {name}
    </div>
  );
};

export default Banner;
