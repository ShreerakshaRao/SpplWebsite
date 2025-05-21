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
  caption: string;

}

// const ProductCard = ({ image, price, units, slug, name }: ProductCardProps) => (
//   <Link href={`/products/${slug}`}>
//     <div className="cursor-pointer mx-3">
//       <Image src={image} alt="Product Image" width={250} height={250} />
//       <div className="text-base font-medium mb-3 px-3">{name}</div>
//       <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md relative">
//         <span className="font-medium">₹{price}</span>
//         <span className="flex items-center space-x-1 text-gray-500">
//           {units}
//         </span>
//       </div>
//     </div>
//   </Link>
// );


const ProductCard = ({
  image,
  price,
  units,
  slug,
  name,
  caption,
}: ProductCardProps) => (
  <Link href={`/products/${slug}`}>
    <div className="group relative cursor-pointer mx-2.5 w-[302px] h-[400px] border border-gray-50 shadow-lg  overflow-hidden">
      <div
        className="absolute inset-0 z-0 blur-lg opacity-40 bg-cover shadow-[0_0_8px_rgba(0,0,0,0.25)] scale-125"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-center p-10 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={image}
            alt="Product Image"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="text-base px-5">
          <div className="text-[#0A0A0A] font-medium transition-colors duration-300 group-hover:text-[#008080]">{name}</div>
          <div className="text-[#484646] font-normal">{caption}</div>
        </div>

        <div className="w-full h-[48px] px-5 flex justify-between items-center px-3 bg-[#FFFFFF99] backdrop-blur-3xl">
          <span className="font-medium text-xl">₹{price}</span>
          <span className="text-[#797676] text-base font-normal">{units}</span>
        </div>
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
    "Antibiotic",
    "Analgesic",
    "Musculoskeletal Oil",
    "Antipyretic",
    "Antacids",
    "Antiemetic",
    "Calcium Supplement",
    "Iron Replenishment",
    "Biocatalyst",
    "Antidiabetic",
  ];

  const categorySlugMap: Record<string, string[]> = {
    "Antibiotic": ["13", "10", "11", "17", "9"],
    "Analgesic": ["12", "15", "14", "16", "5", "24"],
    "Musculoskeletal Oil": ["19"],
    "Antipyretic": ["22"],
    "Antacids": ["20", "21", "26"],
    "Antiemetic": ["25"],
    "Calcium Supplement": ["18", "23"],
    "Iron Replenishment": ["1", "2", "4"],
    "Biocatalyst": ["3"], 
    "Antidiabetic": ["8", "6", "7", "29"],
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
                    className="cursor-pointer"
                  />
                  <span className="cursor-pointer">{category}</span>
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
