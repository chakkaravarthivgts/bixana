"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AIWhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightGridRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 1024 : false;

    const ctx = gsap.context(() => {
      if (isMobile) {
        return; // no pinning or animations on mobile
      }

      // Pin only the left column; allow the right column to scroll naturally
      ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        endTrigger: rightGridRef.current!,
        end: "+=800",
        pin: leftColRef.current!,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div className="lg:col-span-1" ref={leftColRef}>
          {/* Tag */}
          <div className="flex items-center" style={{ gap: "8px" }}>
            <div
              className="rounded-full"
              style={{
                width: 12,
                height: 12,
                background: "linear-gradient(180deg, #0052CC 0%, #FFFFFF 100%)",
              }}
            />
            <span
              className="uppercase"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 12,
                color: "#0A0F29",
              }}
            >
              Why us?
            </span>
          </div>

          {/* Heading */}
          <h3
            className="mt-6 text-black"
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 300,
              fontSize: "clamp(28px,5vw,56px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Because you deserve{" "}
            <span style={{ color: "#0E7AFE" }}>clarity</span>, not complexity.
          </h3>

          <button
            className="mt-8 inline-flex items-center justify-center rounded-full px-6 h-10 text-white"
            style={{
              backgroundColor: "#0E7AFE",
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Schedule a demo
          </button>
        </div>

        {/* Right grid - all pairs visible by default */}
        <div
          ref={rightGridRef}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {/* Card A */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/about/whatwedo.jpg"
                alt="Accuracy"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Automatic Accuracy
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Generate accurate, compliant dental notes instantly, reducing risk
              of errors and ensuring professional standards.
            </p>
          </div>

          {/* Card B */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/dental-png.jpg"
                alt="Save time"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Save Valuable Time
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Eliminate repetitive typing and documentation tasks, giving you
              back hours every week.
            </p>
          </div>

          {/* Card C */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/about/whatwedo.jpg"
                alt="Comfort"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Patient Comfort
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Keep the focus on your patients while AI handles the busywork in
              the background.
            </p>
          </div>

          {/* Card D */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/dental-png.jpg"
                alt="Mobile first"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Built for Modern Clinics
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              A streamlined experience that fits seamlessly into your daily
              workflows and tools.
            </p>
          </div>

          {/* Card E (extra) */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/about/whatwedo.jpg"
                alt="Seamless PMS"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Seamless PMS Integration
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Effortless syncing with leading practice management systems.
            </p>
          </div>

          {/* Card F (extra) */}
          <div className="flex flex-col">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/dental-png.jpg"
                alt="Compliance"
                width={800}
                height={600}
                className="w-full h-60 object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Compliance Ready
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Secure by design to support HIPAA-aligned workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
