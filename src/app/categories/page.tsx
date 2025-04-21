"use client";

import React from "react";
import Image from "next/image";
import { useSearch } from "../context/SearchContext";
import Link from "next/link";

const Page = () => {
  const { query } = useSearch();

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
    "Diabeties",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <main className="px-15 space-y-10">
        {/* On mobile, stack the two text sections left aligned with vertical gap; on PC, display side-by-side */}
        <div className="flex flex-col md:flex-row py-15 items-start md:space-x-28 space-y-6 md:space-y-0">
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

        {/* Grid layout: 2 columns on mobile, 5 columns on PC */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-15">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
              >
                <Image
                  src={`/categories/${category}.svg`}
                  alt={category}
                  width={220}
                  height={220}
                  className="cursor-pointer"
                />
              </Link>
            ))
          ) : (
            <div className="text-xl text-gray-400">
              No matching categories found.
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Page;
