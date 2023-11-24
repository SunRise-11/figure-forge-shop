import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Toy } from "@/app/contexts/figures.context";



type Props = {
  toy: Toy;
};

const Card = ({ toy }: Props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
  return (
    <Link
      href={`/figures/${toy.id}`}
      className="w-[300px] h-[380px] bg-purple border-4 border-white flex flex-col justify-between rounded-lg sm:my-10 text-text"
    >
      <div className="w-full h-[300px] border-white flex item-center justify-center overflow-hidden rounded-t-lg">
        <Image
          className="h-full"
          src={toy.pictures[0].toString()}
          alt="some Pic"
          width={300}
          height={500}
        />
      </div>
      <div className="px-4 py-2 my-0">
        <h3>{toy.name}</h3>
        <h3>{formatter.format(toy.price.valueOf())}</h3>
      </div>
    </Link>
  );
};

export default Card;
