"use client";

import React, { useState } from "react";

export default function CTABanner() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-12 sm:py-16 lg:py-24">
      <div className="relative w-full flex flex-col justify-center items-center bg-[#F5F5F5] rounded-[24px] sm:rounded-[28px] lg:rounded-[36px] px-5 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-8 justify-between align-middle w-full lg:w-[536px]">
            {/* Main Text */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Headline */}
              <h2
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 6vw, 68px)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  width: "min(100%, 503px)",
                }}
              >
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                  }}
                >
                  Let&apos;s Talk{" "}
                </span>
                if you have any question to us
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 3.5vw, 20px)",
                  lineHeight: "1.6",
                  letterSpacing: "-0.02em",
                  color: "#777777",
                }}
              >
                We shall touch base with you as soon as possible to address your
                query. If you need help with product installation, setup and
                configtaiotn of ToothFairy product
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "1.6em",
                  letterSpacing: "-4%",
                  color: "#777777",
                }}
              >
                For Contact
              </p>
              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 6vw, 60px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                }}
              >
                +1 (925) 332-0011
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-11 w-full lg:w-[644px]">
            <form onSubmit={handleSubmit} className="w-full">
              {/* Form Fields */}
              <div className="flex flex-col gap-4 w-full">
                {/* First Name */}
                <div className="relative h-[52px] sm:h-[56px] lg:h-[60px] bg-white border border-[#C3C3C3] rounded-[68px]">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Email */}
                <div className="relative h-[52px] sm:h-[56px] lg:h-[60px] bg-white border border-[#C3C3C3] rounded-[68px]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Subject */}
                <div className="relative h-[52px] sm:h-[56px] lg:h-[60px] bg-white border border-[#C3C3C3] rounded-[68px]">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Message */}
                <div className="relative h-[220px] sm:h-[320px] lg:h-[440px] bg-white border border-[#C3C3C3] rounded-[24px] sm:rounded-[36px] lg:rounded-[48px]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full h-full bg-transparent border-none outline-none resize-none px-9 py-8"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.556em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>
              </div>
            </form>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="transition-all duration-300 hover:opacity-90 w-[180px] sm:w-[200px] lg:w-[205px] h-[48px] sm:h-[52px] lg:h-[54px] bg-[#0052CC] rounded-[200px] border-0 cursor-pointer"
            >
              <span
                className="uppercase"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "1.3em",
                  color: "#FFFFFF",
                }}
              >
                SUBMIT NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
