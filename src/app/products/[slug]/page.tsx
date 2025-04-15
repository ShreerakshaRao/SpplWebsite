"use client"

import { products } from "@/app/data/product";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetails = () => {

  const params = useParams();
  const productId = params.slug;
  const product = products.find((p) => p.slug === productId);

  if (!product) return <div className="m-10">Product not found.</div>;

  return (
    <div className="p-4 md:p-15 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      {/* Product Info Section */}
      <div className="flex-1">
        <div className="text-4xl font-normal font-serif">{product.name}</div>
        <div className="flex space-x-3 items-center mt-5">
          <div className="text-2xl font-bold">₹{product.price}</div>
          <div className="text-base font-normal">{product.units}</div>
        </div>

        <div className="mt-3 text-gray-700 text-base font-normal">
          Inclusive of all taxes
        </div>
        <div className="flex space-x-3 mt-8 items-center">
          <div className="text-base font-normal">For Orders Contact</div>
          <div className="text-xl font-semibold">9876543210</div>
        </div>

        <div className="mt-10">
          <div className="text-base font-semibold">Product Description</div>
          <div className="mt-3 space-y-1">
            <div className="text-base font-medium">Combination</div>
            <div className="text-base font-normal text-[#313030]">{product.combination}</div>
          </div>

          <div className="mt-3 space-y-1">
            <div className="text-base font-medium">Benefits & Uses</div>
            <div
              className="text-base font-normal text-[#313030]"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </div>
      </div>

      {/* Product Image Section */}
      <div className="w-full md:w-[500px] h-[500px] overflow-hidden bg-[#F4F0EF] flex items-center justify-center shadow-md">
        <Image
          src={product.image}
          alt={product.slug}
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
