"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import OpenCart from "./OpenCart";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";

const CartModal = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartCount, cartDetails, totalPrice, redirectToCheckout } =
    useShoppingCart();

  return (
    <>
      <button aria-label="Open cart" onClick={() => setOpenCart(true)}>
        <OpenCart />
      </button>
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpenCart(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpenCart(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="grid grid-cols-1 divide-y divide-gray-200"
                            >
                              {/* {cartCount && cartCount > 0 ? (
                                Object.values(cartDetails ?? {}).map((item) => (
                                  <CartItem key={item.id} item={item} />
                                ))
                              ) : (
                                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                                  <ShoppingCartIcon className="h-16" />
                                  <p className="mt-6 text-center text-2xl font-bold">
                                    Your cart is empty.
                                  </p>
                                </div>
                              )} */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            {" "}
                            or
                            <button
                              type="button"
                              className="font-medium text-sky-900 hover:text-sky-700 px-2"
                              onClick={() => setOpenCart(false)}
                            >
                              Continue Shopping{" "}
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CartModal;
