"use client";

import React from "react";
import Image from "next/image";

export default function AIFeatures() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Tag */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(180deg, #0052CC 0%, #FFFFFF 100%)",
            }}
          />
          <span
            className="uppercase text-black/80"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: 12,
              letterSpacing: 1,
            }}
          >
            Features
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-black"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 300,
            fontSize: "clamp(28px, 4.6vw, 44px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Harnessing AI for Seamless
          <br />
          Dental Workflows
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 - Text + Blue image bottom */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white">
            <div className="p-6 lg:p-8">
              <h3
                className="text-black mb-3"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 2.4vw, 24px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                }}
              >
                Your AI-driven documentation assistant
              </h3>
              <p
                className="text-[#5A6177]"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                ToothFairy AI simplifies note-taking by transcribing
                patient-clinician conversations in real-time, generating
                structured clinical notes tailored to your workflow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0052CC] to-[#0B61E1] p-6 lg:p-8">
              <div className="rounded-2xl overflow-hidden bg-white/05">
                <Image
                  src="/dental-png.jpg"
                  alt="AI suggestions"
                  width={900}
                  height={500}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - HIPAA text with illustration */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white flex flex-col">
            <div className="p-6 lg:p-8 flex-1">
              <h3
                className="text-black mb-3"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 2.4vw, 24px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                }}
              >
                HIPAA-compliant,
                <br />
                ensuring secure documentation
              </h3>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/about/whatwedo.jpg"
                  alt="HIPAA"
                  width={900}
                  height={500}
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 - Blue gradient with chart */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#0B61E1] border border-[#0A4DB6]">
            <div className="p-6 lg:p-8">
              <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <Image
                  src="/dental-png.jpg"
                  alt="Analytics"
                  width={900}
                  height={500}
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] bg-white p-6 lg:p-8">
            <h4
              className="text-black mb-2"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Seamless integration with PMS
            </h4>
            <p
              className="text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Effortless syncing with leading practice management systems.
            </p>
          </div>

          {/* Card 5 - Languages with globe */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] bg-white p-6 lg:p-8 flex flex-col items-start">
            <h4
              className="text-black mb-4"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 20,
                letterSpacing: "-0.02em",
              }}
            >
              20+ Languages
            </h4>
            <div className="rounded-2xl overflow-hidden w-full">
              <Image
                src="/about/whatwedo.jpg"
                alt="Languages"
                width={900}
                height={500}
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Card 6 - Real-time transcription */}
          <div className="col-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white flex flex-col">
            <div className="p-6 lg:p-8">
              <h4
                className="text-black mb-2"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                Real-time transcription of patient-provider conversations
              </h4>
              <p
                className="text-[#5A6177]"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Accurate, structured notes captured during live encounters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
