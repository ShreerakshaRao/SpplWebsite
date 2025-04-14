"use client";

import React, { useState } from "react";
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

interface FormData {
  name: string;
  email: string;
  message: string;
}

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

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(
          "Failed to send the message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-20 p-6 sm:p-15 space-y-6 bg-[#003636] text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* 📱 Responsive: flex-col on small, row on large */}
        <div className="space-y-7 w-full lg:w-1/2">
          <div>
            <Image
              src="/SudhanandLogo.svg"
              alt="Company Logo"
              width={250}
              height={170}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* 📱 Responsive: single column on mobile */}
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

          <div className="flex items-start space-x-3">
            <IoLocationSharp />
            <div className="text-sm font-normal">
              Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru,
              <br />
              Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-36 space-y-4 sm:space-y-0">
            {/* 📱 Responsive: stacked on small screens */}
            <div className="flex items-center space-x-3">
              <IoIosCall />
              <div className="text-sm font-normal">+91 8214280152</div>
            </div>

            <div className="flex items-center space-x-3">
              <IoMail />
              <div className="text-sm font-normal">info@tiameds.ai</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="max-w-md space-y-7 mx-auto">
            <h2 className="text-xl font-medium">Contact Us</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#F4F0EF] outline-none text-gray-500"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full p-3 bg-[#F4F0EF] outline-none text-gray-500"
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                className="w-full p-3 bg-[#F4F0EF] outline-none text-gray-500"
                rows={6}
              ></textarea>

              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="w-full sm:w-40 bg-[#0A72BB] text-white p-3"
              >
                {/* 📱 Responsive: button fills on mobile */}
                {loading ? "Sending..." : "Send"}
              </button>

              {responseMessage && (
                <p className="mt-4 text-gray-300">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-400" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        {/* 📱 Responsive: stacked vertically on mobile */}
        <div className="text-sm font-normal space-x-4 sm:space-x-10 flex">
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span>Social Media</span>
          {socialIcons.map((icon, idx) => (
            <div key={idx} className="text-lg">
              {icon}
            </div>
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
