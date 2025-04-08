import React from "react";
import Image from "next/image";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import { IoIosCall, IoLogoRss } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Categories", href: "/categories" },
        { label: "Full Catalog", href: "/products" },
      ],
    },
    {
      title: "Company",
      links: [{ label: "About Us", href: "/about" }],
    },
  ];

  const socialIcons = [
    <IoLogoFacebook key="facebook" />,
    <IoLogoTwitter key="twitter" />,
    <TiSocialLinkedin key="linkedin" />,
    <IoLogoInstagram key="instagram" />,
    <FaGooglePlusG key="googleplus" />,
    <FaPinterest key="pinterest" />,
    <IoLogoRss key="rss" />,
  ];

  return (
    <footer className="p-15 space-y-6">
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

          <div className="grid grid-cols-2 gap-10">
            {navLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <div className="space-y-2 text-base">
                  {links.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="block hover:underline"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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

              <button className="w-40 bg-[#0A72BB] text-white p-3">Send</button>
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

        <div className="flex items-center gap-4">
          <span>Social Media</span>
          {socialIcons.map((icon, idx) => (
            <div key={idx} className="text-lg ">
              {icon}
            </div>
          ))}
        </div>

        <div className="text-sm font-normal">
          Copy rights © 2025. All rights are reseved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
