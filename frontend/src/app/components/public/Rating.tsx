import React from "react";
import ReactStars from "react-rating-star-with-type";

type Props = {
  star: number;
};

const Rating = ({ star }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row h-max mb-4 py-10 mx-auto items-center">
      <div className="flex flex-col items-center mb-6 sm:mb-0 sm:mr-6 w-full">
        <legend className="text-lg font-semibold text-text mb-2">Rating</legend>
        <div className="flex flex-row items-center">
          <ReactStars value={star} isEdit={false} size="2rem" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
