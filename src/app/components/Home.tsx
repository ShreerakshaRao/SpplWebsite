"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/product";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
//     <div className="cursor-pointer mx-2.5">
//       <Image
//         src={image}
//         alt="Product Image"
//         width={250}
//         height={250}
//         className="rounded-lg"
//       />
//       <div className="text-base font-medium mb-3 px-3">{name}</div>
//       <div className="w-[302px] h-[48px] flex justify-between px-5 items-center text-lg bg-[#F4F0EF] shadow-inner backdrop-blur-md">
//         <span className="font-medium">₹{price}</span>
//         <span className="text-gray-500">{units}</span>
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
    <div className="group relative cursor-pointer mx-2.5 w-[302px] h-[400px] border border-gray-50 shadow-lg overflow-hidden">
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
          <div className="text-[#0A0A0A] font-medium transition-colors duration-300 group-hover:text-[#008080]">
            {name}
          </div>
          <div className="text-[#484646] font-normal">{caption}</div>
        </div>

        <div className="w-full h-[48px] px-5 flex justify-between items-center bg-[#FFFFFF99] backdrop-blur-3xl">
          <span className="font-medium text-xl">₹{price}</span>
          <span className="text-[#797676] text-base font-normal">{units}</span>
        </div>
      </div>
    </div>
  </Link>
);

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

function CategoriesInfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Duplicate categories for seamless scroll
  const allCategories = [
    ...categories,
    ...categories,
    ...categories,
    ...categories,
    ...categories,
  ];

  // Set initial scroll to middle set
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const itemWidth = container.children[0]?.clientWidth || 228;
      container.scrollLeft = categories.length * itemWidth;
    }
  }, []);

  // Infinite scroll logic for seamless looping (with debounce and scrollBehavior fix)
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;
      const itemWidth = container.children[0]?.clientWidth || 228;
      const total = categories.length * itemWidth;

      // Temporarily disable smooth scroll for instant jump
      container.style.scrollBehavior = "auto";

      if (container.scrollLeft <= 0) {
        container.scrollLeft += total;
      } else if (container.scrollLeft >= total * 2) {
        container.scrollLeft -= total;
      }

      // Re-enable smooth scroll after jump
      setTimeout(() => {
        if (container) {
          container.style.scrollBehavior = "smooth";
        }
      }, 50);
    }, 100); // 100ms debounce
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Arrow scroll
  const scrollBy = useCallback((dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.children[0]?.clientWidth || 228;
    container.scrollBy({
      left: dir === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <button
        onClick={() => scrollBy("left")}
        className="flex items-center cursor-pointer justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full z-10 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Scroll left"
        tabIndex={0}
      >
        <ChevronLeft
          size={28}
          className="text-gray-700 w-6 h-6 lg:w-7 lg:h-7"
        />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide lg:px-15 snap-x snap-mandatory select-none"
        style={{ scrollBehavior: "smooth" }}
        tabIndex={0}
        role="region"
        aria-label="Product categories"
      >
        {allCategories.map((cat, i) => (
          <Link
            key={`${cat}-${i}`}
            href={`/products?category=${encodeURIComponent(cat)}`}
            className="cursor-pointer flex-shrink-0 mx-1 snap-center"
            tabIndex={-1}
          >
            <div className="w-[140px] lg:w-[220px] flex flex-col items-center">
              <div className="h-[110px] lg:h-[220px] w-full">
                <Image
                  src={`/categories/${cat}.png`}
                  alt={cat}
                  width={220}
                  height={220}
                  className="w-full h-full object-contain"
                  priority={i < 4}
                />
              </div>
              <div className="bg-[#00363666] h-10 w-full text-white flex items-center justify-center text-lg text-center">
                {cat}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scrollBy("right")}
        className="flex items-center cursor-pointer justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full z-10 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Scroll right"
        tabIndex={0}
      >
        <ChevronRight
          size={28}
          className="text-gray-700 w-6 h-6 lg:w-7 lg:h-7"
        />
      </button>
    </div>
  );
}

const Home = () => {
  const newLaunchSlugs = ["1", "2", "3", "4"];
  const dealsSlugs = ["5", "6", "7", "8"];

  const newLaunches = products.filter((product) =>
    newLaunchSlugs.includes(product.slug)
  );
  const deals = products.filter((product) => dealsSlugs.includes(product.slug));

  return (
    <main className="space-y-15">
      {/* ✅ Made hero image show right side only on all screens */}
      <div className="flex justify-between py-2 bg-[url(/Background.svg)] h-96 bg-no-repeat bg-cover bg-[position:right]"></div>

      <div className="font-serif font-light text-3xl px-15">New Launches</div>

      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:space-x-8 lg:overflow-x-auto lg:px-15">
        {newLaunches.map((product, idx) => (
          <div key={idx} className="flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="font-serif font-light text-3xl px-15">
        Shop By Categories
      </div>

      <CategoriesInfiniteScroll />

      {/* <div className="grid grid-cols-2 place-items-center gap-y-4 gap-x-2 lg:flex lg:flex-row lg:space-x-2 lg:px-15">
        {[
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
        ].map((cat) => (
          <Link
            key={cat}
            href={`/products?category=${encodeURIComponent(cat)}`}
            className="cursor-pointer"
          >
            <div className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]">
              <Image
                src={`/categories/${cat}.png`}
                alt={cat}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
              <div className="bg-[#00363666] h-10 text-white flex items-center justify-center text-lg">
                {cat}
              </div>
            </div>
          </Link>
        ))}
      </div> */}

      <div className="w-full h-auto bg-gradient-to-r from-[#4EBDBD] to-[#CCE9E9] px-6 py-10 lg:p-15 flex flex-col justify-center">
        <div className="font-light font-serif text-2xl leading-snug text-center lg:text-left lg:text-4xl lg:leading-[3rem]">
          Unlock exclusive discounts on large quantity purchases with
          <br className="hidden lg:block" />
          our personalized bulk order pricing solutions –{" "}
          <Link href="/contact" className="underline">
            CONTACT US
          </Link>{" "}
          to learn more
        </div>
      </div>

      <div className="font-serif font-light text-3xl px-15">
        Deals of the Day
      </div>

      {/* ✅ Responsive: scroll on desktop, stack on mobile */}
      <div className="flex flex-col gap-y-10 items-center mb-15 lg:flex-row lg:space-x-8 lg:px-15 lg:overflow-x-auto">
        {deals.map((product, idx) => (
          <div key={idx} className="flex-shrink-0">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
