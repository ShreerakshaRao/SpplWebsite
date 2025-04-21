"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/product";

interface ProductCardProps {
  image: string;
  price: number;
  units: string;
  slug: string;
  name: string;
}

const ProductCard = ({ image, price, units, slug, name }: ProductCardProps) => (
  <Link href={`/products/${slug}`}>
    <div className="cursor-pointer mx-2.5">
      <Image
        src={image}
        alt="Product Image"
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div className="text-base font-medium mb-3 px-3">{name}</div>
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
      {/* ✅ Made hero image show right side only on all screens */}
      <div className="flex justify-between py-2 bg-[url(/Background.svg)] h-96 bg-no-repeat bg-cover bg-[position:right]"></div>

      <div className="font-serif font-light text-3xl px-15">New Launches</div>

      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:space-x-8 lg:overflow-x-auto lg:px-15">
        {newLaunches.map((product, idx) => (
          <div key={idx} className="flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="font-serif font-light text-3xl px-15">
        Shop By Categories
      </div>

      {/* ✅ Responsive: horizontal on PC, vertical on mobile */}
      <div className="grid grid-cols-2 place-items-center gap-y-4 gap-x-2 lg:flex lg:flex-row lg:space-x-2 lg:px-15">
        {[
          "Antibacterial",
          "Pain-Killers",
          "Ortho-Oil",
          "Paracetamol",
          "Gastric",
          "Calcium",
        ].map((cat) => (
          <Link
            key={cat}
            href={`/products?category=${encodeURIComponent(cat)}`}
            className="cursor-pointer"
          >
            <div className="w-[140px] h-[140px] lg:w-[220px] lg:h-[220px]">
              <Image
                src={`/categories/${cat}.svg`}
                alt={cat}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full h-auto bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] px-6 py-10 lg:p-15 flex flex-col justify-center">
        <div className="font-light font-serif text-2xl leading-snug text-center lg:text-left lg:text-4xl lg:leading-[3rem]">
          Unlock exclusive discounts on large quantity purchases with{" "}
          <br className="hidden lg:block" />
          our personalized bulk order pricing solutions.
        </div>
      </div>

      <div className="font-serif font-light text-3xl px-15">
        Deals of the Day
      </div>

      {/* ✅ Responsive: scroll on desktop, stack on mobile */}
      <div className="flex flex-col gap-y-10 items-center mb-15 lg:flex-row lg:space-x-8 lg:px-15 lg:overflow-x-auto">
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
