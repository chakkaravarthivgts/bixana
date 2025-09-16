"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PricingHero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Staggered animation for mobile
    const timer1 = setTimeout(() => setShowTitle(true), 300);
    const timer2 = setTimeout(() => setShowSubtitle(true), 800);
    const timer3 = setTimeout(() => setShowImage(true), 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-white relative w-full h-screen flex flex-col">
      {/* Desktop Header Section */}
      <div className="hidden lg:flex items-center justify-between px-20 pt-20 w-full max-w-8xl mx-auto">
        <div className="relative shrink-0 text-[90px] text-black text-nowrap">
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

      {/* Mobile Header Section */}
      <div className="lg:hidden flex flex-col items-center justify-center px-6 pt-16 pb-8 space-y-6">
        <div
          className={`relative shrink-0 text-[48px] text-black text-nowrap transition-all duration-700 ease-out ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="leading-[48px] font-light"
            style={{ fontFamily: "Helvetica Neue" }}
          >
            Pricing
          </p>
        </div>
        <div
          className={`relative shrink-0 text-[#585858] text-[18px] tracking-[-0.5px] w-full max-w-[320px] text-center transition-all duration-700 ease-out ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="leading-[26px] font-light"
            style={{ fontFamily: "Helvetica Neue" }}
          >
            Compare and select a plan that meets your business needs
          </p>
        </div>
      </div>

      {/* Desktop Image Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center px-20 pb-20">
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

      {/* Mobile Image Section */}
      <div className="lg:hidden flex-1 flex items-center justify-center px-6 pb-8">
        <div
          className={`relative overflow-hidden rounded-[16px] w-full h-[300px] transition-all duration-700 ease-out ${
            showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
