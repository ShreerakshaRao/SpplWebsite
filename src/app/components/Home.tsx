"use client";

import React from "react";
import Image from "next/image";

const Home = () => {
  const products = [
    {
      image: "/medicines/Sudofer-XT-Tablet.svg",
      price: 105.0,
      units: "Per Strip",
    },
    {
      image: "/medicines/Sudofer-Syrup.svg",
      price: 108,
      units: "Per Pcs",
    },
    {
      image: "/medicines/Sudzyme-Syrup.svg",
      price: 105,
      units: "Per Bottel",
    },
    {
      image: "/medicines/Sudofer-Injection.svg",
      price: 220,
      units: "Per Injection",
    },
  ];

  const products1 = [
    {
      image: "/medicines/Tramasud-P.svg",
      price: 90,
      units: "Per Strip",
    },
    {
      image: "/medicines/Glimisud-M1-Tablets.svg",
      price: 40,
      units: "Per Strip",
    },

    {
      image: "/medicines/Glimsud-MP2-Talets.svg",
      price: 65,
      units: "Per Strip",
    },
    {
      image: "/medicines/Sudobose-0.3-Tablets.svg",
      price: 82.5,
      units: "Per Strip",
    },
  ];

  return (
    <>
      <main className="space-y-15">
        {/* <div className="flex justify-between py-2"> */}
        <div className="flex justify-between py-2 bg-[url(/Background.svg)] h-96 bg-no-repeat bg-cover bg-center">
          {/* <span className="flex text-6xl font-light font-serif leading-20 items-center">
            Discover <br /> trusted medicines <br />
            at your fingertips!
          </span>
          <span>
            <Image
              src="/Image1.svg"
              alt="Company Logo"
              width={150}
              height={300}
            />
          </span> */}
        </div>
        <div className="font-serif font-light text-3xl px-15">New Lauches</div>

        <div className="flex space-x-8 px-15 overflow-x-auto">
          {products.map((product, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div>
                <Image
                  src={product.image}
                  alt="Product Name"
                  width={320}
                  height={320}
                  className="rounded-lg"
                />
              </div>
              <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md">
                <span className="font-medium">₹{product.price}</span>
                <span className="flex items-center space-x-1">
                  <span className="text-gray-500">{product.units}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="font-serif font-light text-3xl px-15">
          Shop By Categories
        </div>
        <div className="flex space-x-4 px-15 ">
          <span>
            <Image
              src="/categories/Antibacterial.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
          <span>
            <Image
              src="/categories/Pain-Killers.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
          <span>
            <Image
              src="/categories/Ortho-Oil.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
          <span>
            <Image
              src="/categories/Paracetamol.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
          <span>
            <Image
              src="/categories/Gastric.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
          <span>
            <Image
              src="/categories/Calcium.svg"
              alt="Company Logo"
              width={220}
              height={220}
            />
          </span>
        </div>

        <div className="w-full h-60 bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] p-10 flex flex-col justify-center space-y-10">
          <div className="font-light font-serif leading-10 text-4xl">
            Sign up today and get 10% off your first <br /> order—your health,
            your savings!
          </div>
          <button className="bg-black text-white w-32 h-12">Contact Us</button>
        </div>

        <div className="font-serif font-light text-3xl px-15">
          Deals of the Day
        </div>

        <div className="flex space-x-8 px-15 overflow-x-auto">
          {products1.map((product, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div>
                <Image
                  src={product.image}
                  alt="Product Name"
                  width={320}
                  height={320}
                  className="rounded-lg"
                />
              </div>
              <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md">
                <span className="font-medium">₹{product.price}</span>
                <span className="flex items-center space-x-1">
                  <span className="text-gray-500">{product.units}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
