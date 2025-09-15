"use client";

import Image from "next/image";

const PricingHero = () => {
  return (
    <div className="bg-white relative w-full h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between px-20 pt-20  w-full max-w-8xl mx-auto">
        <div className="relative shrink-0 text-[90px] text-black text-nowrap ">
          <p
            className="leading-[90px] font-light"
            style={{ fontFamily: "Helvetica Neue" }}
          >
            Pricing
          </p>
        </div>
        <div className="relative shrink-0 text-[#585858] text-[28px] tracking-[-1.12px] w-[355px]">
          <p
            className="leading-[38px] font-light"
            style={{ fontFamily: "Helvetica Neue" }}
          >
            Compare and select a plan that meets your business needs
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-20 pb-20">
        <div className="relative overflow-hidden rounded-[24px] w-full max-w-8xl h-[600px]">
          <Image
            src="/services/hero.jpg"
            alt="Services background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
