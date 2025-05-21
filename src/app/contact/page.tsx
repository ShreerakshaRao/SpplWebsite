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
            {/* MAIL US - clickable */}
            <div className="mt-10">
              <div className="font-medium text-xl">Mail Us</div>
              <div className="font-normal text-sm">
                Mail us your query - we will reply within 48 hours
              </div>
              <a
  href="https://mail.google.com/mail/?view=cm&to=info@tiameds.ai"
  target="_blank"
  rel="noopener noreferrer"
  className="flex space-x-2 font-medium text-base items-center pt-3 hover:underline"
>
  <IoMail /> <span className="font-medium">info@tiameds.ai</span>
</a>
            </div>

            {/* CALL US - clickable */}
            <div>
              <div className="font-medium text-xl">Call Us</div>
              <div className="font-normal text-sm">
                Call our team Mon-Sat from 9am to 7pm
              </div>
              <a
                href="tel:+919686812082"
                className="flex space-x-2 font-medium text-base items-center pt-3 hover:underline"
              >
                <IoIosCall />
                <span className="font-medium">+91 968 681 2082</span>
              </a>
            </div>

            {/* VISIT US - clickable */}
            <div>
  <div className="font-medium text-xl">Visit Us</div>
  <div className="font-normal text-sm">
    Visit our office Mon-Sat from 9am to 8pm
  </div>
  <a
    href="https://www.google.com/maps/place/Dakshina+Murthy+Towers/@12.3350797,76.6659096,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf711ac4a936a3:0x879214aef093b19d!8m2!3d12.3350745!4d76.6684845!16s%2Fg%2F11ybt6t057!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="flex space-x-2 font-medium text-base items-center pt-3 hover:underline"
  >
    <IoLocationSharp />
    <span className="font-medium">
      Sy. No. 59, 2nd Floor, Dakshina Murthy Towers,
      <br /> Devanooru, Rajeevnagara 2nd Stage,
      <br /> Udayagiri, Mysore 570019.
    </span>
  </a>
</div>


            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-tl-full bg-gradient-to-br from-[#E8F6F6] to-[#004C4C]"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
