"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OurValues() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial state for all cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        if (index === 0) {
          // First card starts expanded
          gsap.set(card, {
            backgroundColor: "#0052CC",
            color: "white",
            width: "40%",
            height: "400px",
          });
          gsap.set(card.querySelector(".card-title"), { color: "white" });
          gsap.set(card.querySelector(".card-description"), {
            opacity: 1,
            display: "block",
          });
          gsap.set(card.querySelector(".card-number"), {
            opacity: 0.1,
            display: "block",
          });
        } else {
          // Other cards start normal
          gsap.set(card, {
            backgroundColor: "white",
            color: "black",
            width: "20%",
            height: "400px",
          });
          gsap.set(card.querySelector(".card-title"), { color: "black" });
          gsap.set(card.querySelector(".card-description"), {
            opacity: 0,
            display: "none",
          });
          gsap.set(card.querySelector(".card-number"), {
            opacity: 0,
            display: "none",
          });
        }
      }
    });
  }, []);

  const handleCardHover = (index: number) => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        if (i === index) {
          // Expand hovered card
          gsap.to(card, {
            duration: 0.1,
            backgroundColor: "#0052CC",
            color: "white",
            width: "40%",
            height: "400px",
            ease: "power1.in",
          });
          gsap.to(card.querySelector(".card-title"), {
            duration: 0.1,
            color: "white",
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-description"), {
            duration: 0.1,
            opacity: 1,
            display: "block",
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-number"), {
            duration: 0.1,
            opacity: 0.1,
            display: "block",
            ease: "power2.out",
          });
        } else {
          // Collapse other cards
          gsap.to(card, {
            duration: 0.1,
            backgroundColor: "white",
            color: "black",
            width: "20%",
            height: "400px",
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-title"), {
            duration: 0.1,
            color: "black",
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-description"), {
            duration: 0.1,
            opacity: 0,
            display: "none",
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-number"), {
            duration: 0.1,
            opacity: 0,
            display: "none",
            ease: "power2.out",
          });
        }
      }
    });
  };

  const handleCardLeave = () => {
    // Reset to first card expanded
    handleCardHover(0);
  };

  return (
    <section className="bg-white" id="our-values">
      <div className="mx-auto max-w-8xl md:px-10 lg:px-12 xl:px-20 py-24 md:py-24 xl:py-32 2xl:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Left: Title */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
              <span
                className="text-black text-base uppercase tracking-wide font-['Helvetica_Neue']"
                style={{ fontWeight: 300 }}
              >
                Our Values
              </span>
            </div>
            <div className="flex justify-between gap-36">
              <div className="flex-1">
                <h2
                  className="font-['Helvetica_Neue'] text-[56px] leading-[64px] tracking-[-1.68px] text-black md:text-[64px] md:leading-[72px]"
                  style={{ fontWeight: 300 }}
                >
                  The{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                    }}
                  >
                    beliefs and <br />
                    <span>principles</span>
                  </span>{" "}
                  that define our culture
                </h2>
              </div>
              {/* Right: Description */}
              <div className="flex-1  content-start justify-center">
                <p
                  className="text-[#585858] font-['Helvetica_Neue'] text-[20px] md:text-[20px] leading-[30px] md:leading-[32px]"
                  style={{ fontWeight: 300 }}
                >
                  Our work is guided by a set of core values that define who we
                  <br />
                  are and how we serve our clients. These principles shape our
                  <br />
                  decisions, inspire our innovation, and ensure we deliver{" "}
                  <br />
                  exceptional solutions that empower dental teams to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div
          className="flex flex-col md:flex-row gap-6 lg:gap-8"
          onMouseLeave={handleCardLeave}
        >
          {/* Innovation Card */}
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="rounded-3xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleCardHover(0)}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3
                className="card-title font-['Helvetica_Neue'] text-[36px] leading-[36px] tracking-[-0.56px] mb-4"
                style={{ fontWeight: 300 }}
              >
                Innovation
              </h3>
              <p
                className="card-description text-white/90 font-['Helvetica_Neue'] text-[24px] leading-[36px] tracking-[-0.32px]"
                style={{ fontWeight: 300 }}
              >
                We continuously develop smarter, intuitive solutions that
                simplify dental practice management.
              </p>
            </div>
            <div
              className="card-number absolute bottom-0 right-0 text-white/10 font-['Helvetica_Neue'] text-[120px] leading-none"
              style={{ fontWeight: 300 }}
            >
              1
            </div>
          </div>

          {/* Excellence Card */}
          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col items-start text-left cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleCardHover(1)}
          >
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#0052CC]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3
              className="card-title font-['Helvetica_Neue'] text-[36px] leading-[36px] tracking-[-0.56px] mb-4"
              style={{ fontWeight: 300 }}
            >
              Excellence
            </h3>
            <p
              className="card-description text-white/90 font-['Helvetica_Neue'] text-[24px] leading-[36px] tracking-[-0.32px]"
              style={{ fontWeight: 300 }}
            >
              We maintain the highest standards in everything we do, from code
              quality to customer support.
            </p>
            <div
              className="card-number absolute bottom-0 right-0 text-white/10 font-['Helvetica_Neue'] text-[120px] leading-none"
              style={{ fontWeight: 300 }}
            >
              2
            </div>
          </div>

          {/* Collaboration Card */}
          <div
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
            className="bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col items-start text-left cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleCardHover(2)}
          >
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#0052CC]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3
              className="card-title font-['Helvetica_Neue'] text-[36px] leading-[36px] tracking-[-0.56px] mb-4"
              style={{ fontWeight: 300 }}
            >
              Collaboration
            </h3>
            <p
              className="card-description text-white/90 font-['Helvetica_Neue'] text-[24px] leading-[36px] tracking-[-0.32px]"
              style={{ fontWeight: 300 }}
            >
              We work closely with dental teams to understand their needs and
              create solutions that truly serve them.
            </p>
            <div
              className="card-number absolute bottom-0 right-0 text-white/10 font-['Helvetica_Neue'] text-[120px] leading-none"
              style={{ fontWeight: 300 }}
            >
              3
            </div>
          </div>

          {/* Integrity Card */}
          <div
            ref={(el) => {
              cardRefs.current[3] = el;
            }}
            className="bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col items-start text-left cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleCardHover(3)}
          >
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#0052CC]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3
              className="card-title font-['Helvetica_Neue'] text-[36px] leading-[36px] tracking-[-0.56px] mb-4"
              style={{ fontWeight: 300 }}
            >
              Integrity
            </h3>
            <p
              className="card-description text-white/90 font-['Helvetica_Neue'] text-[24px] leading-[36px] tracking-[-0.32px]"
              style={{ fontWeight: 300 }}
            >
              We build trust through transparency, security, and ethical
              practices in all our interactions.
            </p>
            <div
              className="card-number absolute bottom-0 right-0 text-white/10 font-['Helvetica_Neue'] text-[120px] leading-none"
              style={{ fontWeight: 300 }}
            >
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
