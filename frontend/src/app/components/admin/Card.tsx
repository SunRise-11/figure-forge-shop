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
  const soldToys = toys.filter((toy) => toy.status == "sold");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="mt-6 w-[32rem]">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h1">
          {title == "Profit"
            ? formatter.format(soldToys.reduce((s, a) => s + a.price, 0))
            : title == "Posted"
            ? toys.filter((toy) => toy.status == "posted").length
            : toys.filter((toy) => toy.status == "uncheck").length}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
