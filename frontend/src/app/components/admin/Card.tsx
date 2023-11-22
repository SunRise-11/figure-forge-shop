import React, { useContext } from "react";
import { FiguresContext } from "@/app/contexts/figures.context";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

type Props = {
  title: String;
};

const CardComponent = ({ title }: Props) => {
  const { toys } = useContext(FiguresContext);
  console.log(toys);

  return (
    <Card className="mt-6 w-[32rem]">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h1">
          {title == "Profit"
            ? toys.reduce((s, a) => s + a.price, 0)
            : title == "Posted"
            ? "This is posted"
            : "this is uncheck"}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
