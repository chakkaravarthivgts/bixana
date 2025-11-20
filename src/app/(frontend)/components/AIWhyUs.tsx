"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget?: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget?: (options: { url: string }) => void;
    };
  }
}

export default function AIWhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightGridRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Initialize Calendly popup widget
  const initCalendlyBadge = () => {
    // Inject Calendly CSS once
    const cssHref = "https://assets.calendly.com/assets/external/widget.css";
    if (!document.querySelector(`link[href='${cssHref}']`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssHref;
      document.head.appendChild(link);
    }

    // Helper to open popup immediately once Calendly script is ready
    const onCalendlyReady = () => {
      if (
        window.Calendly &&
        typeof window.Calendly.initPopupWidget === "function"
      ) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/corp-toothfairy/30min",
        });
      }
    };

    // Load script if not present, otherwise init immediately
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const existingScript = document.querySelector(
      `script[src='${scriptSrc}']`
    ) as HTMLScriptElement | null;
    if (existingScript && window.Calendly) {
      onCalendlyReady();
      return;
    }
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = onCalendlyReady;
      document.body.appendChild(script);
    } else {
      // Wait for the existing script to finish loading
      existingScript.addEventListener("load", onCalendlyReady, { once: true });
    }
  };

  useLayoutEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 1024 : false;

    const ctx = gsap.context(() => {
      if (isMobile) {
        return; // no pinning or animations on mobile
      }

      // Pin only the left column; allow the right column to scroll naturally
      // Extend pinning to cover all image sets including the last one
      ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        endTrigger: rightGridRef.current!,
        end: "+=100%",
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        {/* Left column - 50% */}
        <div className="w-full lg:w-[50%]" ref={leftColRef}>
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
                fontFamily: "Inter Tight",
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
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "clamp(28px,5vw,56px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Because you
            <br /> deserve <span style={{ color: "#0E7AFE" }}>clarity</span>,
            not complexity.
          </h3>

          <button
            onClick={initCalendlyBadge}
            className="mt-8 inline-flex items-center justify-center rounded-full px-6 h-10 text-white cursor-pointer transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: "#0E7AFE",
              fontFamily: "Inter Tight",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              fontSize: 18,
            }}
          >
            Schedule a demo
          </button>
        </div>

        {/* Right grid - 50% */}
        <div
          ref={rightGridRef}
          className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card A */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[0] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus1.png"
                alt="Accuracy"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Automatic Accuracy
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
                lineHeight: 1.6,
              }}
            >
              Generate accurate, compliant dental notes instantly, reducing risk
              of errors and ensuring professional standards.
            </p>
          </div>

          {/* Card B */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[1] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus2.png"
                alt="Save time"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Save Valuable Time
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
                lineHeight: 1.6,
              }}
            >
              Eliminate repetitive typing and documentation tasks, giving you
              back hours every week.
            </p>
          </div>

          {/* Card C */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[2] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus3.png"
                alt="Comfort"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Patient Comfort
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
                lineHeight: 1.6,
              }}
            >
              Keep the focus on your patients while AI handles the busywork in
              the background.
            </p>
          </div>

          {/* Card D */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[3] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus4.png"
                alt="Mobile first"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Built for Modern Clinics
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
                lineHeight: 1.6,
              }}
            >
              A streamlined experience that fits seamlessly into your daily
              workflows and tools.
            </p>
          </div>

          {/* Card E (extra) */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[4] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus5.png"
                alt="Seamless PMS"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Seamless PMS Integration
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
                lineHeight: 1.6,
              }}
            >
              Effortless syncing with leading practice management systems.
            </p>
          </div>

          {/* Card F (extra) */}
          <div className="flex flex-col">
            <div
              ref={(el) => {
                imageRefs.current[5] = el;
              }}
              className="rounded-[20px] overflow-hidden aspect-square max-w-[336px] mx-auto sm:mx-0"
            >
              <Image
                src="/ai/whuus/whyus6.png"
                alt="Compliance"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <h4
              className="mt-4 text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 28.8,
                letterSpacing: "-0.02em",
              }}
            >
              Compliance Ready
            </h4>
            <p
              className="mt-2 text-[#5A6177]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: 16.8,
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
