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
    <section
      className="relative w-full"
      style={{
        padding: "99px 96px",
      }}
    >
      <div
        className="relative w-full flex flex-col justify-center items-center"
        style={{
          background: "#F5F5F5",
          borderRadius: "36px",
          padding: "49px 76px",
          height: "952px",
        }}
      >
        <div className="flex justify-between w-full gap-49">
          {/* Text Content */}
          <div
            className="flex flex-col gap-78 justify-between align-middle"
            style={{ width: "536px" }}
          >
            {/* Main Text */}
            <div className="flex flex-col gap-6" style={{ height: "373px" }}>
              {/* Headline */}
              <h2
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "68px",
                  lineHeight: "1.147em",
                  letterSpacing: "-3%",
                  color: "#000000",
                  width: "503px",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "1.6em",
                  letterSpacing: "-4%",
                  color: "#777777",
                }}
              >
                We shall touch base with you as soon as possible to address your
                query. If you need help with product installation, setup and
                configtaiotn of Bixana product
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2" style={{ height: "105px" }}>
              <p
                style={{
                  fontFamily: "Helvetica Neue",
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
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "60px",
                  lineHeight: "1.147em",
                  letterSpacing: "-3%",
                  color: "#000000",
                }}
              >
                +1 (925) 332-0011
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="flex flex-col items-end gap-11"
            style={{ width: "644px" }}
          >
            <form onSubmit={handleSubmit} className="w-full">
              {/* Form Fields */}
              <div className="flex flex-col gap-4 w-full">
                {/* First Name */}
                <div
                  className="relative"
                  style={{
                    height: "60px",
                    background: "#FFFFFF",
                    border: "1px solid #C3C3C3",
                    borderRadius: "68px",
                  }}
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Email */}
                <div
                  className="relative"
                  style={{
                    height: "60px",
                    background: "#FFFFFF",
                    border: "1px solid #C3C3C3",
                    borderRadius: "68px",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Subject */}
                <div
                  className="relative"
                  style={{
                    height: "60px",
                    background: "#FFFFFF",
                    border: "1px solid #C3C3C3",
                    borderRadius: "68px",
                  }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full h-full bg-transparent border-none outline-none px-8"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "1.333em",
                      letterSpacing: "-4%",
                      color: "#777777",
                    }}
                  />
                </div>

                {/* Message */}
                <div
                  className="relative"
                  style={{
                    height: "440px",
                    background: "#FFFFFF",
                    border: "1px solid #C3C3C3",
                    borderRadius: "48px",
                  }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full h-full bg-transparent border-none outline-none resize-none px-9 py-8"
                    style={{
                      fontFamily: "Helvetica Neue",
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
              className="transition-all duration-300 hover:opacity-90"
              style={{
                width: "205px",
                height: "54px",
                background: "#0052CC",
                borderRadius: "200px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                className="uppercase"
                style={{
                  fontFamily: "Helvetica Neue",
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
