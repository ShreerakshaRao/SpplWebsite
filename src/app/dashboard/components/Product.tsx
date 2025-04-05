"use client";

import React from "react";
import Image from "next/image";
import { RxMixerVertical } from "react-icons/rx";
import { IoFilterSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductCard = ({ image, price, originalPrice, discount }: any) => (
  <div>
    <div>
      <Image src={image} alt="Product Image" width={350} height={350} />
    </div>
    <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md relative">
      <span className="font-medium">₹{price}</span>
      <span className="flex items-center space-x-1">
        <span className="text-gray-500 line-through">₹{originalPrice}</span>
        <span className="text-green-900">({discount})</span>
      </span>
    </div>
  </div>
);

// ✅ Product data array
const products = [
  {
    image: "/medicines/Sudofer-XT-Tablet.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudofer-Syrup.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudzyme-Syrup.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudofer-Injection.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Tramasud-P.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Glimisud-M1-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },



  {
    image: "/medicines/Glimsud-MP2-Talets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudobose-0.3-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudsulb-Injection.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },


  



  {
    image: "/medicines/Cefisud-100-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Cefisud-200-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudofenac-MR Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },

  {
    image: "/medicines/Sudzee-500 Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudorox DT Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudofenac-SP Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },



  {
    image: "/medicines/Tramasud.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudoxycalv-625-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudocal-Suspension.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },






  {
    image: "/medicines/Painsud.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Panosud-40-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Panosud-DSR-Capsules.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },



  {
    image: "/medicines/Parsud-650-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudocal-500-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudoxicab-90-Tablets.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudonem-Injection.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },

  {
    image: "/medicines/Panosud-Injection.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },
  {
    image: "/medicines/Sudofast-Gel.svg",
    price: 200,
    originalPrice: 230,
    discount: "21%",
  },

];


const Product = () => {

  
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
            <div className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between">
              <div>Category</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between">
              <div>Price</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className="pt-5 pb-3 border-b-2 border-gray-400 flex justify-between">
              <div>Discount</div>
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
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
