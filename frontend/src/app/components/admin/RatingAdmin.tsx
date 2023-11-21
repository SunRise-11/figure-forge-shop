import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

const RatingAdmin = () => {
  const [star, setStar] = useState(1);

  const onChange = (nextValue: any) => {
    setStar(nextValue);
  };

  return (
    <ReactStars onChange={onChange} value={star} isEdit={true} size="2rem" />
  );
};

export default RatingAdmin;
