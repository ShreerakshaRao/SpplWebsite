"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxMixerVertical } from "react-icons/rx";
import { IoFilterSharp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSearch } from "../context/SearchContext";
import Link from "next/link";
import { products } from "../data/product";
import { useSearchParams } from "next/navigation";

const ProductCard = ({ image, price, units, slug, name }: any) => (
  <Link href={`/products/${slug}`}>
    <div className="cursor-pointer mx-3">
      <Image src={image} alt="Product Image" width={250} height={250} />
      <div className="text-base font-medium mb-3 px-3">
        {name}
      </div>
      <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md relative">
        <span className="font-medium">₹{price}</span>
        <span className="flex items-center space-x-1 text-gray-500">
          {units}
        </span>
      </div>
    </div>
  </Link>
);

const page = () => {
  const { query } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");

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

  const categorySlugMap: Record<string, string[]> = {
    Antibacterial: ["13", "10", "11", "17", "9"],
    "Pain-Killers": ["12", "15", "14", "16", "5", "24"],
    "Ortho-Oil": ["19"],
    Paracetamol: ["22"],
    Gastric: ["20", "21", "26"],
    "Nausea-Vomiting": ["25"],
    Calcium: ["18", "23"],
    Iron: ["1", "2", "4"],
    Enzyme: ["3"],
    Diabeties: ["8", "6", "7"],
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.slug
      .toLowerCase()
      .includes(query.toLowerCase());

    if (selectedCategories.length === 0) {
      return matchesQuery;
    }

    const selectedSlugs = selectedCategories.flatMap(
      (cat) => categorySlugMap[cat] || []
    );

    return matchesQuery && selectedSlugs.includes(product.slug);
  });

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategories([categoryFromURL]);
      setIsOpen(true); // expand category filter
    }
  }, [categoryFromURL]);

  return (
    <>
      <main className="">
        <div className="flex p-15 items-center space-x-28">
          <div className="text-base font-normal">
            Browse through our extensive
            <br /> collection of medicines, <br />
            wellness products, and <br />
            healthcare essentials
          </div>
          <div className="text-4xl font-normal font-serif">
            Looking for a Medicine? We've
            <br />
            Got You Covered!
          </div>
        </div>

        <div className="flex justify-between px-15 pb-4 text-sm font-normal">
          <div className="flex items-center space-x-44">
            <div>Filters</div>
            <div>
              <RxMixerVertical />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div>Sort By</div>
            <div>
              <IoFilterSharp />
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>

        <div className="flex min-h-screen">
          <div className="border-r-2 border-gray-400 w-80 min-h-screen px-15 text-sm font-normal">
            {/* <div className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between">
              <div>Category</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div> */}

            <div
              className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>Category</div>
              <div>
                {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>

            {isOpen && (
              <div className="pl-2 mt-2 space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            )}

            <div className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between">
              <div>Price</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div>
              <button className="p-3 bg-primaryTeal text-white w-48 my-5">
                Clear Filter
              </button>
            </div>

            <div className="space-y-6 mt-7">
              <Image
                src="/Image2.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />

              <Image
                src="/Image3.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />

              <Image
                src="/Image4.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />
            </div>
          </div>

          <div>
            <div className="px-15 py-6 grid grid-cols-3 gap-9">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <ProductCard key={idx} {...product} />
                ))
              ) : (
                <div className="col-span-3 text-gray-400 text-xl">
                  No matching products found.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
