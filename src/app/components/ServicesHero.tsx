"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-8xl mx-auto px-20 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 xl:px-20">
        <h1
          className="pb-10 text-[#0A0F29] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1]"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 300,
            letterSpacing: "-0.03em",
          }}
        >
          Our Services
        </h1>

        <div className="relative w-full overflow-hidden rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/services/hero.jpg"
              alt="Services background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
