"use client";

import React from "react";
import Image from "next/image";

export default function AIFeatures() {
  return (
    <section className="relative w-full bg-neutral-100 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Tag */}
        <div className="flex items-center justify-center gap-2">
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
          className="text-black text-center"
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

        {/* Grid (4x4 at lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[264px] gap-6 lg:gap-8">
          {/* Card 1 - 2w x 2h */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white flex flex-col">
            <div className="p-6 lg:p-8 flex-1">
              <h3
                className="text-black mb-3"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 2.4vw, 32px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                }}
              >
                Your AI-driven <br /> documentation assistant
              </h3>
              <p
                className="text-[#5A6177]"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: 1.6,
                }}
              >
                Toothfairy AI simplifies note-taking by transcribing
                patient-clinician conversations in real-time, generating
                structured clinical notes tailored to your workflow.
              </p>
            </div>
            <div className="h-1/2 bg-gradient-to-br from-[#0052CC] to-[#0B61E1]  relative">
              <div className="rounded-2xl overflow-hidden bg-white/05 h-full">
                <Image
                  src="/ai/features/card1.png"
                  alt="AI suggestions"
                  width={900}
                  height={500}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - 2w x 1h */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white flex flex-col relative">
            <h3
              className="text-black mb-4 p-6 lg:p-6"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.4vw, 32px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              HIPAA-compliant,
              <br />
              ensuring secure <br />
              documentation
            </h3>
            <div className="flex-1 relative">
              <div className="absolute bottom-0 right-0 w-[60%] translate-y-[35%] translate-x-[15%] rotate-45">
                <Image
                  src="/ai/features/rectangle.png"
                  alt="HIPAA"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 3 - 1w x 1h */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-3 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] bg-white p-6 lg:p-8">
            <h4
              className="text-black mb-2 text-center"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.4vw, 32px)",
                letterSpacing: "-0.02em",
              }}
            >
              Seamless integration with PMS
            </h4>
          </div>

          {/* Card 4 - 1w x 1h - Globe (20+ Languages) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-3 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] bg-white  flex flex-col  overflow-hidden">
            <h4
              className="text-black mb-4 text-center p-6"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                fontSize: "clamp(18px, 2.4vw, 32px)",
              }}
            >
              20+ Languages
            </h4>
            <div className="flex-1 relative">
              <div className="absolute bottom-0 left-0 w-[70%]">
                <Image
                  src="/ai/features/globe.png"
                  alt="Languages"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 5 - 2w x 2h */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2 rounded-[20px] lg:rounded-[24px] border border-[#E6EAF0] overflow-hidden bg-white flex flex-col">
            <div className="h-1/2 bg-gradient-to-br from-[#0052CC] to-[#0B61E1] relative">
              <div className="rounded-2xl overflow-hidden bg-white/05 h-full">
                <Image
                  src="/ai/features/card5.png"
                  alt="Analytics"
                  width={900}
                  height={500}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="p-6 lg:p-8 flex-1">
              <h4
                className="text-black mb-4"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 2.4vw, 32px)",
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
                  fontSize: 16,
                  lineHeight: 1.6,
                }}
              >
                AI-powered transcription that delivers accurate, structured
                notes during live patient encounters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
