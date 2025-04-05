"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import Link from "next/link";

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

        <div className="space-x-6 text-lg font-normal cursor-pointer">
          <span>Home</span>
          <span>Products</span>
          <Link href="/dashboard/categories">Categories</Link>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </header>

      {/* <Home /> */}

      {/* <Categories/> */}
      {/* <Product/> */}

      {/* <footer className="p-15 space-y-6">
        <div className="flex justify-between">
          <div className=" space-y-7">
            <div>
              {" "}
              <Image
                src="/SudhanandLogo.svg"
                alt="Company Logo"
                width={250}
                height={170}
              />
            </div>

            <div className="grid grid-cols-5 gap-5 text-left text-xl font-medium">
              <div>Navigation</div>
              <div>Company</div>
              <div>Businesses</div>
            </div>

            <div className="grid grid-cols-5 gap-10 text-left text-base">
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>

            <div className="grid grid-cols-5 gap-10 text-left text-base">
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>

            <div className="grid grid-cols-5 gap-10 text-left text-base">
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>

            <div className="flex items-center space-x-3">
              <div>
                <IoLocationSharp />
              </div>
              <div className="text-sm font-normal">
                Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru,
                <br /> Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
              </div>
            </div>

            <div className="flex space-x-36">
              <div className="flex items-center space-x-3">
                <div>
                  <IoIosCall />
                </div>
                <div className="text-sm font-normal">+91 8214280152</div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <IoMail />
                </div>
                <div className="text-sm font-normal">info@tiameds.ai</div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-md space-y-7">
              <h2 className="text-xl font-medium">Contact Us</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-[#F4F0EF]  outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-[#F4F0EF] outline-none"
                />

                <textarea
                  placeholder="Message"
                  className="w-full p-3 bg-[#F4F0EF] outline-none focus:outline-none focus:ring-0"
                  rows={6}
                ></textarea>

                <button className="w-40 bg-[#0A72BB] text-white p-3">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>

        <div className="flex justify-between">
          <div className="text-sm font-normal space-x-10 flex">
            <div>Privacy Policy</div>
            <div>Disclaimer</div>
          </div>

          <div className="flex space-x-5">
            <div className="text-sm font-normal">Social Media</div>
            <div>
              <IoLogoFacebook />
            </div>
            <div>
              <IoLogoTwitter />
            </div>
            <div>
              <TiSocialLinkedin />
            </div>
            <div>
              <IoLogoInstagram />
            </div>
            <div>
              <FaGooglePlusG />
            </div>
            <div>
              <FaPinterest />
            </div>
            <div>
              <IoLogoRss />
            </div>
          </div>

          <div className="text-sm font-normal">
            Copy rights © 2025. All rights are reseved
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default layout;
