"use client";

import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [, setResponseMessage] = useState("");

  //   const [responseMessage, setResponseMessage] = useState("");

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
    <>
      <main className="space-y-3">
        <div className="flex flex-col md:flex-row p-15 items-center md:items-start justify-center md:justify-start md:space-x-28 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="font-normal text-sm sm:text-base">
            We are Here to Help – Reach Out
            <br /> for Expert Support and <br />
            Personalized Solutions
          </div>
          <div className="text-2xl sm:text-4xl font-normal font-serif">
            Contact Us
            <br />
            for Support
          </div>
        </div>

        <div className="border-b-2 border-gray-400"></div>

        <div className="lg:m-25 m-2 flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden lg:w-[1300px] h-auto lg:h-[625px] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="w-full lg:basis-[60%]">
            <div className="max-w-xl space-y-7 mx-auto py-10 px-4 sm:px-6">
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative w-full">
                  <label
                    htmlFor="name"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.name ? "text-[#008080]" : "text-gray-500"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.name
                        ? "border-[#008080]"
                        : "border-[#939090] text-gray-500"
                    }`}
                  />
                </div>

                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.email ? "text-[#008080]" : "text-gray-500"
                    }`}
                  >
                    Email ID
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.email
                        ? "border-[#008080]"
                        : "border-[#939090] text-gray-500"
                    }`}
                  />
                </div>

                <div className="relative w-full">
                  <label
                    htmlFor="message"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.message ? "text-[#008080]" : "text-gray-500"
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here"
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.message
                        ? "border-[#008080]"
                        : "border-[#939090] text-gray-500"
                    }`}
                    rows={6}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  className="w-full bg-[#008080] text-white p-3 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-[#004C4C] text-white w-full max-w-full lg:basis-[40%] sm:m-6 px-6 sm:px-10 space-y-12 relative">
            <div className="mt-10">
              <div className="font-medium text-xl">Mail Us</div>
              <div className="font-normal text-sm">
                Mail us your query - we will reply within 48 hours
              </div>
              <div className="flex space-x-2 font-medium text-base items-center pt-3">
                <IoMail /> <span>info@sppl.com</span>
              </div>
            </div>

            <div>
              <div className="font-medium text-xl">Call Us</div>
              <div className="font-normal text-sm">
                Call our team Mon-Sat from 9am to 7pm
              </div>
              <div className="flex space-x-2 font-medium text-base items-center pt-3">
                <IoIosCall />
                <span>+91 968 681 2082</span>
              </div>
            </div>

            <div>
              <div className="font-medium text-xl">Visit Us</div>
              <div className="font-normal text-sm">
                Visit our office Mon-Sat from 9am to 8pm
              </div>
              <div className="flex space-x-2 font-medium text-base items-center pt-3">
                <IoLocationSharp />
                <span>
                  Sy. No. 59, 2nd Floor, Dakshina Murthy Towers,
                  <br /> Devanooru, Rajeevnagara 2nd Stage,
                  <br /> Udayagiri, Mysore 570019.
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-tl-full bg-gradient-to-br from-[#E8F6F6] to-[#004C4C]"></div>
          </div>
        </div>

        <div className="lg:m-25">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d352744.0387604467!2d76.56882720776927!3d12.362299987569557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf715882327299%3A0x32271a3be38a09eb!2sSudhanand%20Pharmacies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747812093324!5m2!1sen!2sin"width="1300" height="400" className="border-none"  loading="lazy"></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1093750.0075613216!2d77.24752632509997!3d10.897934123093172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf715882327299%3A0x32271a3be38a09eb!2sSudhanand%20Pharmacies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747741850450!5m2!1sen!2sin" width="1300" height="400" className="border-none"  loading="lazy"></iframe> */}
        </div>
      </main>
    </>
  );
};

export default Page;
