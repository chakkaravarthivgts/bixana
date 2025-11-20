"use client";

import React from "react";
import Image from "next/image";

export default function AIHero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: "var(--tf-hero-gradient)",
      }}
    >
      <div className="relative z-0 flex flex-col lg:flex-row items-start min-h-screen pt-20 sm:pt-28 lg:pt-32">
        {/* Left Side - Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 lg:pl-16 xl:pl-20">
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="flex items-center" style={{ gap: "8px" }}>
              <div
                className="rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(180deg, rgba(0, 82, 204, 1) 0%, rgba(255, 255, 255, 1) 100%)",
                }}
              />
              <span
                className="uppercase"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  color: "#ffffff",
                }}
              >
                Dental Intelligence
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-white mb-8 leading-tight mt-4"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "clamp(32px, 8vw, 62px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Real-Time AI <br />
              Transcription for Dental
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFFFFF 0%, #E0F2FF 100%)",
                }}
              >
                Practices
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/90 mb-10 sm:mb-12 max-w-xl"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "clamp(16px, 3vw, 20px)",
                lineHeight: 1.6,
                letterSpacing: "-0.02em",
              }}
            >
              Transform your dental practice with AI-powered real-time
              transcription. Automatically generate clinical notes, improve
              accuracy, and enhance patient care.
            </p>

            {/* CTA Button */}
            <a
              href="https://app.bixana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0052CC] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.3em",
                letterSpacing: "-0.02em",
              }}
            >
              GET STARTED
            </a>
          </div>
        </div>

        {/* Right Side - Visual Demo */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 lg:pr-16 xl:pr-20 py-8 sm:py-16 lg:py-24">
          <div className="relative mx-auto w-full">
            {/* Background Text (hidden on mobile) */}
            <div
              className="hidden lg:block absolute top-0 right-0 text-white text-[24px]"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Compare and select a plan
              <br /> that meets your business <br />
              needs.
            </div>

            {/* Oversized Tablet Image (intentional crop) */}
            <div className="relative h-[360px] sm:h-[520px] lg:h-[720px]">
              <Image
                src="/ai/95b723dbc6effdd20643bab57382ef1ede1874f2.png"
                alt="AI Clinical Notes Tablet"
                width={2400}
                height={1400}
                priority
                className="absolute max-w-none pointer-events-none select-none drop-shadow-[0_60px_120px_rgba(0,0,0,0.6)] right-[-10%] bottom-[-10%] w-[140%] sm:right-[-30%] sm:bottom-[-30%] sm:w-[160%] lg:right-[-55%] lg:bottom-[-50%] lg:w-[200%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
