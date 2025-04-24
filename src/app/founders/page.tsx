"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [activeFounder, setActiveFounder] = useState<
    "founder1" | "founder2" | null
  >(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "founder1" || hash === "founder2") {
        setActiveFounder(hash);
      } else {
        setActiveFounder(null);
      }
    };

    handleHashChange(); // On first load
    window.addEventListener("hashchange", handleHashChange); // On hash changes

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row p-15 items-start md:space-x-28 space-y-6 md:space-y-0">
          <div className="text-base font-normal">
            Driven by vision, our founders
            <br />
            lead Sudhanand Group with <br />
            passion, innovation, and <br />
            unwavering purpose
          </div>
          <div className="text-4xl font-normal font-serif">
            Our Founders,
            <br />
            Our Foundation
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>

        {activeFounder === "founder1" && (
          <div id="founder1">
            <div className="m-20 flex">
              <div className="w-[45%]">
                <Image
                  src="/team/FounderImg1.svg"
                  alt="Image"
                  width={550}
                  height={550}
                />
              </div>

              <div className="w-[55%]">
                <div className="text-4xl font-medium font-serif">
                  Dr. ARJUN SACHIDANAND
                </div>
                <div className="text-2xl font-medium mt-3">
                  Managing Director
                </div>
                <div className="text-lg font-normal space-y-5 mt-10">
                  <p>
                    Dr. Arjun Sachidanand is a 3rd generation Orthopaedic
                    Surgeon hailing from a family of doctors & surgeons, and has
                    a magnitude of skillsets in both medical and hospital
                    management. He holds an MBBS, MS (Ortho), MBA – Hospital
                    Administration, PGDHHCM degree and is the Founder and
                    Chairman of Sudhanand Health Care Pvt. Ltd., which
                    has aspired to contribute to the finest healthcare
                    solutions, to suit the downtrodden and poor.
                  </p>
                  <p>
                    He is currently the Chief Orthopaedic Surgeon at Dr. M. D.
                    Sachidananda Murthy Memorial group of hospitals. In the
                    past, he has floated Trios software and was also on the
                    board of Navyadisha trust which is managed by Grameen Koota
                    Financial Services Pvt. Ltd. and Credit Asia.
                  </p>
                  <p>
                    Dr. Arjun Sachidanand is the Founder and Chairman of SAS
                    Poorna Arogya Healthcare Pvt. Ltd., which is a community,
                    based Private and NGO sector joint venture to provide low
                    cost health care services to the urban and rural poor. Since
                    its inception in 2010, Dr. Arjun has been instrumental in
                    scaling the SAS Poorna Arogya Program across Karnataka and
                    the North Eastern States of India such as Assam, Mizoram and
                    Meghalaya. With Dr. Arjun at the helm, SAS won the
                    prestigious ‘India Development Market Place Award – 2014’
                    awarded by the World Bank.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-lg font-normal space-y-5 m-20">
              <div>
                Dr. Arjun has several awards under his belt which include –
                <ul className="list-disc list-inside space-y-0.5 px-3">
                  <li>
                    Action for India Silicon Valley Challenge Winner, 2015.
                  </li>
                  <li>NASSCOM Tech for Good Mentee, 2015.</li>
                  <li>Vodafone Mobile for Good Award, 2015.</li>
                  <li>
                    Best 50th Most Impactful Social Innovators, awarded by the
                    Head of Asia Pacific at Blue Dart, Taj Lands End, Mumbai,
                    2016.
                  </li>
                  <li>
                    Aspen Health Fellowship from Aspen Institute, Colorado, USA,
                    2016.
                  </li>
                </ul>
              </div>
              <div>
                Dr. Arjun Sachidanand brings to the board his diverse experience
                in Medicine, Hospital Management, Micro Health Insurance and
                Micro Finance, along with immense leadership skills, a genuine
                interest in improving India’s healthcare system and structuring
                it to help benefit its rural and urban poor.
              </div>
              <div>
                <span>CAREER HIGHLIGHTS:</span>
                <ul className="list-disc list-inside space-y-0.5 px-3">
                  <li>
                    Professor and Visiting Faculty at ITM Institute of
                    Management in Kharghar, Mumbai.
                  </li>
                  <li>Former CEO of Samyuktha Swayam Seva Samastae (SSSS).</li>
                  <li>
                    Trustee for Navya Disha Trust, managed by Grameen Koota
                    Financial Services – a leading MFI in Karnataka.
                  </li>
                  <li>
                    Has been invited as an expert Panelist & Speaker at a number
                    of national & international Social Innovation Conferences
                    both in India & abroad, such as -
                  </li>
                </ul>

                <ul className="list-disc list-inside space-y-0.5 px-10">
                  <li>World Microfinance Summit – 2011, Valladolid, Spain.</li>
                  <li>Hanson & Wade – 2012, Malaysia.</li>
                  <li>Microfinance India Summit – 2015, New Delhi.</li>
                  <li>
                    African Innovation Summit – 2012, IIR, Johannesburg, South
                    Africa.
                  </li>
                  <li>Convergence – 2015, Paris.</li>
                  <li>
                    DFID Connect to Grow Program, Seed Symposium – 2015,
                    Nairobi, Kenya.
                  </li>
                  <li>AFI Silicon Valley Challenge – 2015, California.</li>
                  <li>
                    Guest Speaker at Microfinance Institution, University of
                    Burgundy – Dijon, France.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeFounder === "founder2" && (
          <div id="founder2">
            <div className="m-20 flex">
              <div className="w-[40%]">
                <Image
                  src="/team/FounderImg2.svg"
                  alt="Image"
                  width={430}
                  height={430}
                />
              </div>

              <div className="w-[60%]">
                <div className="text-4xl font-medium font-serif">
                  Dr. SINI ARJUN
                </div>
                <div className="text-2xl font-medium mt-3">Director</div>
                <div className="text-lg font-normal space-y-5 mt-10">
                  <p>
                    Dr. Sini Arjun is the Founder Director of Dr. M. D.
                    Sachidananda Murthy Memorial Group of Hospitals, whose main
                    objective is to deliver quality based, affordable healthcare
                    solutions to the society and to contribute for easy access
                    to healthcare.
                  </p>
                  <p>
                    Dr. Sini is a qualified Pathologist with an MD in Pathology
                    from Kottayam Medical College. She has worked as an
                    assistant professor at the prestigious Amritha institute of
                    medical sciences, Kochin. She is also a trained
                    Flowcytometrist.
                  </p>
                  <p>
                    In addition to heading the Medical team at Dr. M. D.
                    Sachidananda Murthy Group of Hospitals, she has also been
                    instrumental in setting up diagnostic centres at all these
                    hospitals.
                  </p>
                  <p>
                    She possesses extensive knowledge & experience in hospital &
                    clinical management, and has strong exposure working with
                    the rural and urban population. With this vision, she
                    spearheaded a uniquely designed ‘hub and spoke’ model of
                    hospitals with a 50 bedded multi-specialty hospital in
                    Mysore as the hub, and 5 spokes in rural areas which have
                    meager access to health care.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-lg font-normal space-y-5 m-20">
              <p>
                Dr. Sini brings to the table her immense experience in the
                medical domain and an array of medical claims expertise. She has
                actively contributed to developing the Medical Claims Process at
                SAS, and has pioneered state of the art software for effective
                and efficient claims processing for several health care
                products.
              </p>
              <p>
                Being an expert at strategic planning, Dr. Sini is committed to
                spreading awareness regarding community based health care
                practices and hygiene. For the same reason she has conducted
                several health camps in urban and rural areas.
              </p>
              <p>
                Dr. Sini is also on the board of Sumana NGO, which provides free
                education to the children for more than a decade in Mellahalli,
                Mysore district. She is a gifted orator and has participated
                actively in Toast Master sessions. She has several awards at
                inter-college and university levels to her credit. She was the
                winner at APCON-2006 held at Kochi for best case presentation on
                renal sarcoma.
              </p>
              <p>
                Dr. Sini Arjun is a successful entrepreneur who is running an
                overwhelming hospital business model which caters to the rural
                and urban population providing affordable yet quality
                healthcare.
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Page;
