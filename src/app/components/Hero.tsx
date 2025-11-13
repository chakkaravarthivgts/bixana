"use client";

import { ReactNode } from "react";
import Image from "next/image";

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

type HeroProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  videoSrc: string;
  posterSrc?: string;
  overlayOpacity?: number; // 0 to 1
};

export default function Hero({
  title = (
    <>
      Empower your business with{" "}
      <span className="text-blue-600">Toothfairy</span>
    </>
  ),
  subtitle = (
    <>Delivering innovative solutions with speed, quality, and reliability.</>
  ),
  primaryCta = { label: "Get Started", href: "#" },
  secondaryCta = { label: "Learn More", href: "#" },
  videoSrc,
  posterSrc = "/next.svg",
  overlayOpacity = 0.45,
}: HeroProps) {
  // const clampedOpacity = Math.min(1, Math.max(0, overlayOpacity));

  // Initialize Calendly badge widget on demand (when CTA is clicked)
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

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", borderRadius: "0px 0px 50px 50px" }}
    >
      {/* Header & Hero Content Container */}
      <div className="flex flex-col items-center w-full">
        {/* Header Section - 82px height */}

        {/* Hero Content Section */}
        <div
          className="relative overflow-hidden mb-[60px] sm:mb-[80px] lg:mb-[100px] mx-4 sm:mx-6 lg:mx-[100px]"
          style={{
            height: "calc(100vh - 110px)",
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "29px",
            marginLeft: "24px",
            marginRight: "24px",
          }}
        >
          <Image
            src="/Bixana hero.png"
            alt="Hero"
            fill
            className="object-cover lg:object-fill"
          />

          {/* Content container matching Figma layout */}
          <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 lg:px-[30px] py-6 lg:py-[47px]">
            {/* Headline - Upper left */}
            <div
              style={{ maxWidth: "1259px", width: "100%", minHeight: "120px" }}
            >
              <h1
                className="text-white"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 8vw, 62px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.03em",
                  textAlign: "left",
                }}
              >
                Smarter Patient Communication.
                <br /> Simpler Dental Practice.
              </h1>
            </div>

            {/* Bottom section with buttons and subtext */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end w-full gap-6 md:gap-10">
              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={initCalendlyBadge}
                  className="flex items-center justify-center gap-2 rounded-full transition-colors duration-200 uppercase"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "clamp(160px, 40vw, 231px)",
                    height: "50px",
                    fontFamily: "Inter Tight",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 2.6vw, 18px)",
                    lineHeight: "1.3em",
                    color: "#0052CC",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ stroke: "#0052CC", strokeWidth: "1.3px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  schedule demo
                </button>
              </div>

              {/* Subtext - Lower right */}
              <div style={{ width: "min(100%, 501px)" }}>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Inter Tight",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 3.6vw, 28px)",
                    lineHeight: "1.4",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                  }}
                >
                  Toothfairy is a cloud-based dental practice solution that
                  streamlines patient communication, enhances care, and drives
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
