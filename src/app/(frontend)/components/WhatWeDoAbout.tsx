"use client";

import Image from "next/image";

const WhatWeDoAbout = () => {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex flex-col gap-8 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-32 xl:py-44 relative w-full">
      <div className="content-stretch flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[100px] xl:gap-[160px] items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="content-stretch flex flex-col items-start justify-between w-full lg:w-[698px]">
          <div className="content-stretch flex flex-col items-start justify-between gap-6 sm:gap-8">
            {/* Headline Section */}
            <div className="content-stretch flex flex-col items-start justify-between w-full">
              <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                <span className="text-black text-base font-light uppercase tracking-wide">
                  what we do
                </span>
              </div>
              <div
                className="font-light leading-[0] not-italic text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2.04px] w-full max-w-[673px] mb-6 sm:mb-8"
                style={{ fontFamily: "Inter Tight" }}
              >
                <p className="leading-snug sm:leading-[1.1] md:leading-[1.15] lg:leading-[62px]">
                  <span>We develop </span>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                    }}
                  >
                    digital strategies
                  </span>
                  <span> products and services</span>
                </p>
              </div>
            </div>

            {/* Description Text */}
            <div
              className="font-light leading-[0] not-italic text-[#585858] text-[15px] sm:text-base md:text-lg lg:text-[24px] tracking-[0.01em] sm:tracking-[0.02em] md:tracking-[-0.3px] lg:tracking-[-1.12px] w-full max-w-[980px]"
              style={{ fontFamily: "Inter Tight" }}
            >
              <p className="leading-relaxed sm:leading-[1.35] md:leading-[1.45] lg:leading-[38px] mb-4 sm:mb-6">
                At Toothfairy, we go beyond software—we build smarter systems
                for better dental care. From online appointment scheduling and
                two-way messaging to automated treatment plans, real-time
                benefit checks, and post-visit follow-ups, we help practices
                elevate every step of the patient journey.
              </p>
              <p className="leading-relaxed sm:leading-[1.35] md:leading-[1.45] lg:leading-[38px]">
                Our integrated approach ensures compliance, increases case
                acceptance, and enhances patient satisfaction—all while
                simplifying your day-to-day operations.
              </p>
            </div>
          </div>

          {/* Join Us Button */}
        </div>

        {/* Right Column - Image */}
        <div className="bg-white h-[360px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[700px] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] w-full lg:w-[628px] relative overflow-hidden mt-4 sm:mt-0">
          <Image
            src="/about/whatwedo.jpg"
            alt="Team collaborating around computer screen"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoAbout;
