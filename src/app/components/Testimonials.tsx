"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Nara @ MIUX is an amazing Designer! I recently gave you her a tight timeline for a full branded UX for a local small business website. She did so well with the layout, brand design and even copy were out of this world good. I highly recommend her!",
    author: "Husain Saab",
    position: "Co-Founder, ZOHO",
  },
  {
    quote:
      "Bixana has transformed our dental practice completely. The appointment scheduling system is intuitive and our patients love the seamless experience. It's been a game-changer for our clinic.",
    author: "Dr. Sarah Johnson",
    position: "Dental Practice Owner",
  },
  {
    quote:
      "The treatment planning feature in Bixana is exceptional. It has streamlined our workflow and improved patient care significantly. Highly recommend to any dental professional.",
    author: "Dr. Michael Chen",
    position: "Orthodontist",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="relative w-full flex flex-col justify-center items-center"
      style={{
        background: "#FAFBFC",
        padding: "57px 100px",
        height: "932px",
      }}
    >
      <div className="w-full flex flex-col items-end gap-28">
        {/* Content */}
        <div className="w-full flex flex-col items-center gap-24">
          {/* Intro */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Tag */}
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#0E7AFE",
                }}
              />
              <span
                className="uppercase"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "1.5em",
                  letterSpacing: "0.1em",
                  color: "#0E7AFE",
                }}
              >
                testimonial
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-center"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 300,
                fontSize: "72px",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#0A0F29",
                marginTop: "32px",
              }}
            >
              What <span className="text-[#0066FF]">our clients say</span>
            </h2>
          </div>

          {/* Content */}
          <div className="flex items-center gap-7">
            {/* Quote Icon */}
            <div
              className="flex-shrink-0"
              style={{
                width: "96.58px",
                height: "74.08px",
              }}
            >
              <svg
                width="98"
                height="75"
                viewBox="0 0 98 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.2821 68.3205C3.70294 62.3947 0.70752 55.7485 0.70752 44.9747C0.70752 26.0164 14.0163 9.0243 33.37 0.623047L38.2071 8.08721C20.1425 17.8589 16.6109 30.5393 15.2025 38.5343C18.1113 37.0285 21.9192 36.503 25.6513 36.8497C35.4229 37.7543 43.1254 45.7764 43.1254 55.7485C43.1254 60.7765 41.128 65.5987 37.5727 69.154C34.0173 72.7094 29.1952 74.7068 24.1671 74.7068C21.3864 74.6828 18.6384 74.1058 16.0829 73.0094C13.5274 71.913 11.2156 70.3191 9.2821 68.3205ZM63.4488 68.3205C57.8696 62.3947 54.8742 55.7485 54.8742 44.9747C54.8742 26.0164 68.1829 9.0243 87.5367 0.623047L92.3738 8.08721C74.3092 17.8589 70.7775 30.5393 69.3692 38.5343C72.2779 37.0285 76.0858 36.503 79.8179 36.8497C89.5896 37.7543 97.2921 45.7764 97.2921 55.7485C97.2921 60.7765 95.2947 65.5987 91.7393 69.154C88.184 72.7094 83.3618 74.7068 78.3338 74.7068C75.5531 74.6828 72.805 74.1058 70.2495 73.0094C67.6941 71.913 65.3823 70.3191 63.4488 68.3205Z"
                  fill="#0E7AFE"
                />
              </svg>
            </div>

            {/* Quote */}
            <div
              className="flex flex-col items-end gap-14"
              style={{
                width: "923px",
                height: "345px",
              }}
            >
              {/* Quote Text */}
              <p
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 300,
                  fontSize: "32px",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                  color: "#0A0F29",
                  width: "100%",
                }}
              >
                {testimonials[currentTestimonial].quote}
              </p>

              {/* Author */}
              <div
                className="flex flex-col gap-3 items-end"
                style={{ width: "600px" }}
              >
                <h4
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "1.125em",
                    letterSpacing: "-0.02em",
                    color: "#0A0F29",
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </h4>
                <p
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "1.6em",
                    letterSpacing: "-0.01em",
                    color: "#5A6177",
                  }}
                >
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4">
          {/* Previous Arrow */}
          <button
            onClick={prevTestimonial}
            className="transition-all duration-300 hover:opacity-70"
            style={{
              width: "24.75px",
              height: "24.75px",
              background: "#FAFBFC",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginLeft: "3.11px",
                marginTop: "3.59px",
              }}
            >
              <path
                d="M9.5 1L1 9.5L9.5 18M1 9.5H18"
                stroke="#0E7AFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextTestimonial}
            className="transition-all duration-300 hover:opacity-70"
            style={{
              width: "24.75px",
              height: "24.75px",
              background: "#FAFBFC",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginLeft: "3.11px",
                marginTop: "3.59px",
              }}
            >
              <path
                d="M9.5 1L18 9.5L9.5 18M18 9.5H1"
                stroke="#0E7AFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
