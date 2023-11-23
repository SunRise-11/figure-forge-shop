import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

type RatingAdminProps = {
  onRatingChange: (value: number) => void;
}

const RatingAdmin: React.FC<RatingAdminProps> = ({onRatingChange}) => {
  const [star, setStar] = useState(1);

  const onChange = (nextValue: number) => {
    setStar(nextValue);
    onRatingChange(nextValue);
  };

  return (
    <ReactStars onChange={onChange} value={star} isEdit={true} size="2rem" />
  );
};

export default RatingAdmin;
