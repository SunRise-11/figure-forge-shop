// import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { CartItem } from "@/app/types/types";

// type Props = {
//   item: CartItem;
// };
// export default function CartItem({ item }: Props) {
//   const { name, price } = item.product;
//   const { removeItem } = useShoppingCart();

//   const handleRemoveItem = () => {
//     removeItem(item.product.id.toString());
//   };

//   return (
//     <div className="flex items-center gap-4 py-3">
//       <div>{name}</div>
//       <div className="ml-auto">
//         {formatCurrencyString({ value: price, currency: "USD" })}
//       </div>
//       <button
//         onClick={() => handleRemoveItem()}
//         className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
//       >
//         <XMarkIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
//       </button>
//     </div>
//   );
// }
