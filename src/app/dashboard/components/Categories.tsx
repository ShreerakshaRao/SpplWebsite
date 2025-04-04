"use client";

import React from "react";
import Image from "next/image";

const Categories = () => {
  const categories = [
    "Antibacterial",
    "Pain-Killers",
    "Ortho-Oil",
    "Paracetamol",
    "Gastric",
    "Nausea-Vomiting",
    "Calcium",
    "Iron",
    "Enzyme",
    "Diabeties"
  ];
  return (
    <>
      <main className="px-15 space-y-10">
        <div className="flex py-15 items-center space-x-28">
          <div className="text-base font-normal">
            Find the right medicines,
            <br /> supplements, and personal <br />
            care products tailored to your <br />
            needs. Shop with confidence!
          </div>
          <div className="text-4xl font-normal font-serif">
            Pharmacy Categories for <br />
            Every Need
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>



        <div className="flex flex-wrap gap-16">
          {categories.map((category) => (
            <Image
              key={category}
              src={`/categories/${category}.svg`}
              alt={category}
              width={220}
              height={220}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Categories;
