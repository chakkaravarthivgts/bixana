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
      className="relative w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16"
      style={{ background: "#FAFBFC", paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="w-full flex flex-col items-center gap-28">
        {/* Content */}
        <div className="w-full flex flex-col items-center gap-12 sm:gap-16 lg:gap-24 max-w-7xl">
          {/* Intro */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Tag */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
              <span className="text-black text-base font-light uppercase tracking-wide">
                Testimonials
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-center"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: "clamp(28px, 6vw, 72px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#0A0F29",
              }}
            >
              What{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                }}
              >
                our clients say
              </span>
            </h2>
          </div>
          {/* Main testimonial content */}

          {/* Content */}
          <div className="flex items-start gap-4 sm:gap-6 lg:gap-7 w-full max-w-5xl">
            {/* Quote Icon */}
            <div
              className="flex-shrink-0 mt-1"
              style={{ width: 80, height: 60 }}
            >
              <svg
                width="80"
                height="60"
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
            <div className="flex flex-col items-end gap-8 sm:gap-10 lg:gap-14 w-full">
              {/* Quote Text */}
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "clamp(16px, 3.6vw, 32px)",
                  lineHeight: 1.5,
                  letterSpacing: "-0.02em",
                  color: "#0A0F29",
                  width: "100%",
                }}
              >
                {testimonials[currentTestimonial].quote}
              </p>

              {/* Author */}
              <div className="flex flex-col gap-2 sm:gap-3 items-end w-full max-w-xl">
                <h4
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 300,
                    fontSize: "clamp(18px, 4.2vw, 48px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#0A0F29",
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </h4>
                <p
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 3vw, 20px)",
                    lineHeight: 1.6,
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
        <div className="flex items-center gap-3 sm:gap-4">
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
