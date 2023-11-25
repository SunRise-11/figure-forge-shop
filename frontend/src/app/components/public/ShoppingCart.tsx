import { useShoppingCart } from "@/app/contexts/cartContext";
import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartItem from "./CartItem";
import { FiguresContext } from "@/app/contexts/figures.context";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { toys } = useContext(FiguresContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 right-0" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="absolute min-h-[calc(100vh-3rem)] item-start justify-end p-4 text-center right-0 top-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full min-h-[calc(100vh-4rem)] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-primary mb-4"
                >
                  Cart
                </Dialog.Title>
                <div className=" ">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <CartItem key={item.id} {...item} />
                    ))
                  ) : (
                    <h2>cart is empty</h2>
                  )}
                </div>
                <div className=" font-bold text-xl w-full text-right mt-10">
                  Total{" "}
                  {formatter.format(
                    cartItems.reduce((total, cartItem) => {
                      const item = toys.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
                <div className=" mx-auto w-56 flex justify-center mt-10">
                  <button
                    type="button"
                    className="  inline-flex justify-center rounded-md border border-transparent bg-primary text-text px-4 py-2 text-sm font-medium hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeCart}
                  >
                    Continue to payment
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
