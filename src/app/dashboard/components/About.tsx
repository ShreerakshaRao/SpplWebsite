"use client";

import React from "react";
import Image from "next/image";
const About = () => {

    const teams = [
        "Img1",
        "Img2",
        "Img3",
        "Img4",
        "Img5",
        "Img6",
        
      ];
  return (

    
    <>
      <main className=" space-y-10">
        <div className="flex p-15 items-center space-x-28">
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

        <div className="m-20 px-45 space-y-5 text-lg leading-relaxed text-gray-700">
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
            within the hospital premises
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

        <div className=" text-center space-y-10">
            <h1 className="text-4xl font-normal font-serif">Our Team</h1>

                <div className="flex flex-wrap gap-16 justify-center items-center">
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
      </main>
    </>
  );
};

export default About;
