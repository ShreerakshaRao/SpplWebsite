"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsDesktop } from "../hooks/useIsDesktop";

const Page = () => {

  const isDesktop = useIsDesktop();

  const teams = [
    "Members1",
    "Members2",
    "Members3",
    "Members4",
    "Members5",
    "Members6",
  ];
  const founders = ["Founder1", "Founder2"];

  return (
    <>
      <main className="space-y-3">
        <div className="flex flex-col md:flex-row p-15 items-start md:space-x-28 space-y-6 md:space-y-0">
          <div className="text-base font-normal">
            Browse through our extensive
            <br /> collection of medicines, <br />
            wellness products, and <br />
            healthcare essentials
          </div>
          <div className="text-4xl font-normal font-serif">
            About Sudhanand
            <br />
            Pharmacies Pvt. Ltd.
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>

        <div className="px-5 m-5 md:px-55 md:m-20 space-y-5 text-xl font-medium leading-normal md:leading-relaxed text_Gray">
          <p>
            This company, Sudhanand Pharmacies Pvt. Ltd., was established by the
            Sudhanand Group in early 2023 to consolidate all the pharmacies
            owned by us into one unified entity. The goal was to streamline
            operations, enhance efficiency, and make our mark as we ventured
            into the Drug Manufacturing and White Labeling space. By
            consolidating our pharmacy operations under Sudhanand Pharmacies
            Pvt. Ltd., we aim to ensure consistent quality, competitive pricing,
            and easy accessibility of medicines to our customers.
          </p>
          <p>
            Sudhanand Pharmacies Pvt. Ltd. operates hand-in-hand with Sudhanand
            Health Care Solutions Pvt. Ltd., creating a robust ecosystem to meet
            the healthcare needs of our patients. All Dr. M. D. Sachidananda
            Murthy Memorial Hospitals, which are part of the Sudhanand Group,
            house dedicated pharmacies managed by Sudhanand Pharmacies Pvt. Ltd.
            This ensures seamless support for patients’ medicine requirements,
            providing them with high-quality pharmaceutical products right
            within the hospital premises.
          </p>
          <p>
            In addition to catering to the needs of our hospitals, Sudhanand
            Pharmacies Pvt. Ltd. is committed to expanding its reach to serve
            the broader community. By venturing into the Drug Manufacturing and
            White Labeling domain, we aim to not only produce affordable
            medications but also partner with other healthcare providers to
            distribute reliable and effective pharmaceutical solutions across
            India and beyond.
          </p>
          <p>
            With a steadfast focus on quality and patient care, Sudhanand
            Pharmacies Pvt. Ltd. is positioned to become a trusted name in the
            pharmaceutical industry, aligned with the vision of the Sudhanand
            Group to elevate healthcare accessibility and affordability for all.
          </p>
        </div>

        {/* Founders Section */}
        <div className="text-center py-10">
          <h1 className="md:text-4xl text-2xl font-normal font-serif mb-10">
            Our Founders
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {founders.map((founder, index) => {
              const image = (
                <Image
                  key={founder}
                  src={`/team/${founder}.svg`}
                  alt={founder}
                  width={300}
                  height={300}
                  className="transition-transform hover:scale-105"
                />
              );

              return isDesktop ? (
                <Link
                  key={founder}
                  href={`/founders#founder${index + 1}`}
                  className="transition-transform hover:scale-105"
                >
                  {image}
                </Link>
              ) : (
                <div key={founder}>{image}</div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center py-20">
          <h1 className="md:text-4xl text-2xl font-normal font-serif mb-10">
            Our Board Members
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teams.map((team) => (
                <Image
                  key={team}
                  src={`/team/${team}.svg`}
                  alt={team}
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
