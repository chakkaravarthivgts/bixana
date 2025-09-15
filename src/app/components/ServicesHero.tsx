"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-8xl mx-auto px-20 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 xl:px-20">
        <h1
          className="text-black"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: 300,
            fontSize: "64px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Our Services
        </h1>

        <div className="relative w-full overflow-hidden rounded-[24px]">
          <div
            className="relative w-full"
            style={{ height: "calc(100vh - 200px)", maxHeight: "600px" }}
          >
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
