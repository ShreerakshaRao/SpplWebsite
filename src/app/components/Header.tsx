"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Full Catalog", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [query, setQuery] = useState("");


  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-16 py-4 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.5)] bg-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3 md:space-x-7 flex-shrink-0">
          <Link href="/">
            <Image
              src="/SudhanandLogo1.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </Link>
          <Link href="/">
            <div className="cursor-pointer text-base md:text-2xl font-normal text-[#008080]">
              <span>
                Sudhanand Pharmacies<br className="block md:hidden" />
              </span>
            </div>
          </Link>
        </div>

        {/* Right side - Nav and contact */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-normal">
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:underline">
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none absolute right-4 top-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col items-center space-y-4 text-base text-center">
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:underline">
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
