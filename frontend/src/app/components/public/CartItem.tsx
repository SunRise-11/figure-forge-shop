"use client";
import { useShoppingCart } from "@/app/contexts/cartContext";
import { FiguresContext } from "@/app/contexts/figures.context";
import React, { useContext } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const { toys } = useContext(FiguresContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  const item = toys.find((toy) => toy.id === id);
  //   console.log(toys);

  console.log(item);

  if (item == null) return null;

  return (
    <div className="flex flex-row gap-4 justify-center items-end mb-4 min-w-96 relative">
      <img
        src={item.pictures[0].pictureUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className=" w-32">
        <h2>{item.name} </h2>
        <p> {formatter.format(item.price * quantity)}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="absolute right-0 top-0 font-extrabold text-lg text-red-600"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
