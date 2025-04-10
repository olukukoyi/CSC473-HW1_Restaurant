"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "../CartContext";

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
};

function Menu() {
  const cart = useCart();
  return (
    <section id="menu" className="py-20 bg-[##fbf9fa] mt-[200px]">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Menu Highlights
          </h2>
          <p className="max-w-2xl mx-auto">Smash burgers and fries!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "CheeseBurger",
              price: "7.99",
              description:
                "Single patty, 100% fresh beef burger served with American cheese, grilled onions, pickles and house sauce on a Martin's potato bun",
              image: "/Cheese.png",
              quantity: 0,
            },
            {
              name: "Double CheeseBurger",
              price: "6.99",
              description:
                "Double patty, 100% fresh beef burger served with American cheese, grilled onions, pickles and house sauce on a Martin's potato bun",
              image: "/DoubleCheese.png",
              quantity: 0,
            },
            {
              name: "Impossible Burger (Vegetearian)",
              price: "9.49",
              description:
                "Double Impossible patty served with American cheese, grilled onions, pickles and house sauce on a Martin's potato bun",
              image: "/impossible-burger.avif",
              quantity: 0,
            },
            {
              name: "Double Impossible Burger (Vegetearian)",
              price: "9.49",
              description:
                "Single Impossible patty served with American cheese, grilled onions, pickles and house sauce on a Martin's potato bun",
              image: "/impossible-burger.avif",
              quantity: 0,
            },
            {
              name: "Fries",
              price: "6.99",
              description: "Salted fries",
              image: "/Fries.png",
              quantity: 0,
            },
            {
              name: "Spicy Loaded Beef Fries",
              price: "6.99",
              description:
                "100% all beef burger chopped up with American cheese, grilled onions and peppers.",
              image: "/LoadedFries.png",
              quantity: 0,
            },
            {
              name: "Regular Loaded Beef Fries",
              price: "6.99",
              description:
                "100% all beef burger chopped up with American cheese, grilled onions and peppers.",
              image: "/LoadedFries.png",
              quantity: 0,
            },
          ].map((dish, index) => (
            <div
              key={index}
              className="h-auto bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-xl font-semibold">
                    {dish.name}
                  </h3>
                  <span className="font-medium">${dish.price}</span>
                </div>
                <p className="text-sm">{dish.description}</p>
              </div>
              <button
                className="bg-gray-400 hover:bg-gray-500 h-10 w-full "
                onClick={() => {
                  cart?.addItems(dish);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
