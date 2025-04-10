"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

import { useSearch } from "../context/SearchContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Full Catalog", href: "/products" },
  { name: "About Us", href: "/about" },
];

const Header = () => {

  const { query, setQuery } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <header className="flex justify-between py-5 px-15 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.5)] items-center">
      <div className="flex space-x-14">
        <span>
          <Image
            src="/SudhanandLogo1.svg"
            alt="Company Logo"
            width={40}
            height={40}
          />
        </span>
        <span>
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-gray-600 w-96 h-9 rounded-md"
        >
          <div className="flex items-center px-3">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="placeholder-gray-400 outline-none px-2 py-2 flex-1 bg-transparent"
          />
          <button type="submit" className="bg-primaryTeal text-white px-4 py-2 h-9">
            Search
          </button>
        </form>
        </span>
      </div>

      <div className="flex items-center space-x-6 text-lg font-normal">
        {navLinks.map(({ name, href }) => (
          <Link key={name} href={href} className="hover:underline">
            {name}
          </Link>
        ))}

        <div className="flex items-center space-x-2">
          <Image src="/call.svg" alt="Call Icon" width={20} height={20} />
          <span>9876543210</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
