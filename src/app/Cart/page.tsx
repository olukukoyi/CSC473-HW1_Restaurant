"use client";

import React from "react";
import { useCart } from "../CartContext";

function Cart() {
  const cart = useCart();

  if (cart?.cart.length == 0) {
    return (
      <div className="w-full h-[700px] flex items-center justify-center text-black">
        Your cart is empty. View the{" "}
        <a className="underline px-1" href="/Menu">
          menu
        </a>
        to select items
      </div>
    );
  }
  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full h-[100%]">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {cart?.cart.map((item) => (
          <li key={item.name} className="flex py-6 mt-10">
            <div className="shrink-0 overflow-hidden rounded-md border border-gray-200 h-36 w-36">
              <img
                alt={item.description}
                src={item.image}
                className="size-full object-cover"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-black">
                  <h3>
                    <a>{item.name}</a>
                  </h3>
                  <p className="ml-4">{item.price}</p>
                </div>
                <p className="mt-1 text-sm text-black">{item.description}</p>
                <p className="mt-1 text-sm text-black">Qty: {item.quantity}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p></p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-black-600 hover:text-gray-500"
                    onClick={() => {
                      cart.removeItem(item.name);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="px-4 py-6 sm:px-6 w-full">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${cart?.calculateCart()}</p>
          </div>
          <p className="mt-0.5 text-sm text-black">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-black-600"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <span
                onClick={() => cart?.clearCart()}
                className="font-medium text-black underline "
              >
                Clear Cart
              </span>
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Cart;
