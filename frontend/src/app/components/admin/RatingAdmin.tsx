import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

type RatingAdminProps = {
  onRatingChange: (value: number) => void;
  rate:number;
}

const RatingAdmin: React.FC<RatingAdminProps> = ({onRatingChange,rate}) => {
  const [star, setStar] = useState(rate);

  const onChange = (nextValue: number) => {
    setStar(nextValue);
    onRatingChange(nextValue);
  };

  return (
    <ReactStars onChange={onChange} value={star} isEdit={true} size="2rem" />
  );
};

export default RatingAdmin;
