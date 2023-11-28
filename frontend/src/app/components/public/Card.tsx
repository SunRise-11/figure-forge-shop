import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Toy } from "@/app/types/types";
import { useShoppingCart } from "@/app/contexts/cartContext";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  toy: Toy;
};

const Card = ({ toy }: Props) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  let quantity = getItemQuantity(toy.id);
  return (
    <section className="relative">
      <Link
        href={`/figures/${toy.id}`}
        className="w-[300px] h-[380px] bg-purple border-4 border-white flex flex-col justify-between rounded-lg sm:my-10 text-text"
      >
        <div className="w-full h-[300px] border-white flex item-center justify-center overflow-hidden rounded-t-lg">
          {
            toy.pictures.length > 0 ?
            <Image
            className="h-full"
            src={toy.pictures[0].pictureUrl}
            alt="some Pic"
            width={300}
            height={500}
          /> :
          <Image
            className="h-full"
            src=""
            alt="some Pic"
            width={300}
            height={500}
          />
          }
          
        </div>
        <div className="px-4 py-2 my-0">
          <h3 className="  truncate w-4/6 ">{toy.name}</h3>
          <h3>{formatter.format(toy.price.valueOf())}</h3>
        </div>
      </Link>
      <div className="absolute right-3 bottom-14">
        {quantity === 0 ? (
          <button
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all"
            onClick={() => increaseCartQuantity(toy.id)}
          >
            <ShoppingCartIcon className="h-6 text-text" />
          </button>
        ) : (
          <button
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-red-600 font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all"
            onClick={() => removeFromCart(toy.id)}
          >
            <XMarkIcon className="h-6 text-text" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Card;
