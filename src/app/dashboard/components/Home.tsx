"use client";

import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="px-15 space-y-10">
        <div className="flex justify-between py-2">
          <span className="flex text-6xl font-light font-serif leading-20 items-center">
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
          </span>
        </div>
        <div className="border-b-4 border-gray-400"></div>
        <div className="font-serif font-light text-3xl">New Lauches</div>

        <div className="flex space-x-2">
          <div>
            <div>
              <Image
                src="/medicines/Sudofer-XT-Tablet.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />
            </div>
            <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md  relative">
              <span className="font-medium">₹200</span>
              <span className="flex items-center space-x-1">
                <span className="text-gray-500 line-through">₹230</span>
                <span className="text-green-900">(21%)</span>
              </span>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="/medicines/Sudofer-Syrup.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />
            </div>
            <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md  relative">
              <span className="font-medium">₹200</span>
              <span className="flex items-center space-x-1">
                <span className="text-gray-500 line-through">₹230</span>
                <span className="text-green-900">(21%)</span>
              </span>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/medicines/Sudzyme-Syrup.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />
            </div>
            <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md  relative">
              <span className="font-medium">₹200</span>
              <span className="flex items-center space-x-1">
                <span className="text-gray-500 line-through">₹230</span>
                <span className="text-green-900">(21%)</span>
              </span>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/medicines/Sudofer-Injection.svg"
                alt="Company Logo"
                width={350}
                height={350}
              />
            </div>
            <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md  relative">
              <span className="font-medium">₹200</span>
              <span className="flex items-center space-x-1">
                <span className="text-gray-500 line-through">₹230</span>
                <span className="text-green-900">(21%)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="font-serif font-light text-3xl">Shop By Categories</div>
        <div className="flex space-x-4">
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
          <button className="bg-black text-white w-32 h-12">Search</button>
        </div>
      </main>
    </>
  );
};

export default Home;
