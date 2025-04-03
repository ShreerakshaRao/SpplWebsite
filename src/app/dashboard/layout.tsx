"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Home from "./components/Home";

const layout = () => {
  return (
    <>
      <header className="flex justify-between py-5 px-15 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.5)] items-center">
        <div className="flex space-x-14">
          <span>
            <Image
              src="/SudhanandLogo.svg"
              alt="Company Logo"
              width={70}
              height={70}
            />
          </span>
          <span>
            <div className="flex items-center border border-gray-600 text-white  w-96 h-9">
              <div className="flex items-center px-3">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" text-white placeholder-gray-400 outline-none px-2 py-2 flex-1"
              />
              <button className="bg-primaryTeal text-white px-4 py-2  h-9">
                Search
              </button>
            </div>
          </span>
        </div>

        <div className="space-x-6 text-lg font-normal">
          <span>Home</span>
          <span>Categories</span>
          <span>Contact Us</span>
        </div>
      </header>

  <Home/>
    </>
  );
};

export default layout;
