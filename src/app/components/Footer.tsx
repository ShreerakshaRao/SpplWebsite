"use client";

import React from "react";
import Image from "next/image";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
} from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
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
    {
      icon: <IoLogoFacebook />,
      href: "https://www.facebook.com/people/Sudhanand-Pharmacies-Pvt-Ltd/61567580600810/",
    },
    {
      icon: <TiSocialLinkedin />,
      href: "https://www.linkedin.com/company/sudhanand-pharmacies/",
    },
    {
      icon: <IoLogoInstagram />,
      href: "https://www.instagram.com/sudhanand_pharmacies/?next=%2F",
    },
  ];

  return (
    <footer className="px-6 md:px-30 pt-15 pb-5 space-y-3 bg-[#003636] text-white overflow-x-hidden max-w-full">
      <div className="space-y-7 w-full flex flex-col md:flex-row justify-between md:items-start gap-3">
        <div className="flex-shrink-0">
          <Image
            src="/SudhanandLogo1.svg"
            alt="Company Logo"
            width={130}
            height={130}
          />
        </div>

        <div className="flex flex-row sm:flex-row sm:space-x-12 gap-8 sm:gap-16">
          {navLinks.map(({ title, links }) => (
            <div key={title} className="flex-1">
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

        <div className="space-y-6">
          {/* Address - clickable */}
          <div className="flex items-start space-x-3">
            <IoLocationSharp className="text-2xl" />
            <a
              href="https://www.google.com/maps/place/Dakshina+Murthy+Towers/@12.3350797,76.6659096,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf711ac4a936a3:0x879214aef093b19d!8m2!3d12.3350745!4d76.6684845!16s%2Fg%2F11ybt6t057!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal hover:underline"
            >
              Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru,
              <span className="hidden sm:block">
                Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
              </span>
              <span className="sm:hidden">
                Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:space-y-3 space-y-0 sm:flex-col">
            <div className="flex flex-row sm:flex-col sm:space-y-3 space-x-6 sm:space-x-0">
              {/* Phone - clickable */}
              <div className="flex flex-row items-center space-x-3">
                <IoIosCall />
                <a
                  href="tel:+919686812082"
                  className="flex items-center text-sm font-normal hover:underline"
                >
                  +91 968 681 2082
                </a>
              </div>

              {/* Email - clickable, open in new tab */}
              <div className="flex flex-row items-center space-x-3">
                <IoMail />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@tiameds.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-normal hover:underline"
                >
                  info@sppl.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-400" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="text-sm font-normal space-x-4 sm:space-x-10 flex">
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:inline">Social Media</span>
          {socialIcons.map(({ icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="text-sm font-normal text-center">
          Copyright © 2025. All rights are reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
