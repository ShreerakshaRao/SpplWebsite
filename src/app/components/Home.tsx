"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/product";

const ProductCard = ({ image, price, units, slug, name }: any) => (
  <Link href={`/products/${slug}`}>
    <div className="cursor-pointer mx-2.5">
      <Image
        src={image}
        alt="Product Image"
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div className="text-base font-medium mb-3 px-3">
        {name}
      </div>
      <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md">
        <span className="font-medium">₹{price}</span>
        <span className="text-gray-500">{units}</span>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const newLaunchSlugs = ["1", "2", "3", "4"];
  const dealsSlugs = ["5", "6", "7", "8"];

  const newLaunches = products.filter((product) =>
    newLaunchSlugs.includes(product.slug)
  );
  const deals = products.filter((product) => dealsSlugs.includes(product.slug));

  return (
    <main className="space-y-15">
      <div className="flex justify-between py-2 bg-[url(/Background.svg)] h-96 bg-no-repeat bg-cover bg-center"></div>

      <div className="font-serif font-light text-3xl px-15">New Launches</div>
      <div className="flex space-x-8 px-15 overflow-x-auto">
        {newLaunches.map((product, idx) => (
          <div key={idx} className="flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="font-serif font-light text-3xl px-15">Shop By Categories</div>
      <div className="flex space-x-4 px-15">
        {[
          "Antibacterial",
          "Pain-Killers",
          "Ortho-Oil",
          "Paracetamol",
          "Gastric",
          "Calcium",
        ].map((cat) => (
          <Image
            key={cat}
            src={`/categories/${cat}.svg`}
            alt={cat}
            width={220}
            height={220}
          />
        ))}
      </div>

      <div className="w-full h-52 bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] p-15 flex flex-col justify-center space-y-10">
        <div className="font-light font-serif leading-12 text-4xl">
          Unlock exclusive discounts on large quantity purchases with <br /> our personalized bulk order pricing solutions.
        </div>
      </div>

      <div className="font-serif font-light text-3xl px-15">Deals of the Day</div>
      <div className="flex space-x-8 px-15 overflow-x-auto">
        {deals.map((product, idx) => (
          <div key={idx} className="flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
