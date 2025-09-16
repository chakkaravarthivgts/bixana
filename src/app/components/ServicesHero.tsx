"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-8xl mx-auto px-20 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 xl:px-20">
        <h1
          className="text-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6 lg:mb-6"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: 300,
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
