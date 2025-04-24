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

interface ProductCardProps {
  image: string;
  price: number;
  units: string;
  slug: string;
  name: string;
}

const ProductCard = ({ image, price, units, slug, name }: ProductCardProps) => (
  <Link href={`/products/${slug}`}>
    <div className="cursor-pointer mx-3">
      <Image src={image} alt="Product Image" width={250} height={250} />
      <div className="text-base font-medium mb-3 px-3">{name}</div>
      <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md relative">
        <span className="font-medium">₹{price}</span>
        <span className="flex items-center space-x-1 text-gray-500">
          {units}
        </span>
      </div>
    </div>
  </Link>
);

const ProductClient = () => {
  const { query } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
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

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    if (selectedCategories.length === 0) {
      return matchesQuery && matchesPrice;
    }

    const selectedSlugs = selectedCategories.flatMap(
      (cat) => categorySlugMap[cat] || []
    );

    return matchesQuery && matchesPrice && selectedSlugs.includes(product.slug);
  });

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategories([categoryFromURL]);
      setIsOpen(true);
    }
  }, [categoryFromURL]);

  return (
    <main className="relative">
      <div className="flex flex-col md:flex-row p-15 items-start md:space-x-28 space-y-6 md:space-y-0">
        <div className="text-base font-normal">
          Browse through our extensive
          <br /> collection of medicines, <br />
          wellness products, and <br />
          healthcare essentials
        </div>
        <div className="text-4xl font-normal font-serif">
          Looking for a Medicine? We have
          <br />
          Got You Covered!
        </div>
      </div>

      <div className="flex justify-between px-15 pb-4 text-sm font-normal">
        <div className="flex items-center space-x-44 hidden md:flex">
          <div>Filters</div>
          <div>
            <RxMixerVertical />
          </div>
        </div>

        <div className="flex items-center space-x-4 hidden md:flex">
          <div>Sort By</div>
          <div>
            <IoFilterSharp />
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-400"></div>

      <div className="flex">
        <div className="border-r-2 border-gray-400 w-80 min-h-screen px-15 text-sm font-normal hidden md:block">
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

          <div
            className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <div>Price</div>
            <div>
              {isPriceOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>

          {isPriceOpen && (
            <div className="mt-4">
              <input
                type="range"
                min={0}
                max={500}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-[#008080] cursor-pointer"
              />
              <div className="flex justify-between text-sm mt-1">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          )}

          <div>
            <button
              className="p-3 bg-primaryTeal text-white w-48 my-5"
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 500]);
              }}
            >
              Clear Filter
            </button>
          </div>

          {/* <div className="space-y-6 mt-7 hidden md:block">
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
            </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:px-15 py-6 mb-15 items-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="w-[90%] sm:w-[80%] md:w-full">
                  <ProductCard {...product} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-gray-400 text-xl text-center">
              No matching products found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductClient;
