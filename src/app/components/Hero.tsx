"use client";

import { ReactNode } from "react";

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
      Empower your business with <span className="text-blue-600">Bixana</span>
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
  const clampedOpacity = Math.min(1, Math.max(0, overlayOpacity));

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        borderRadius: "0px 0px 50px 50px",
      }}
    >
      {/* Header & Hero Content Container */}
      <div className="flex flex-col items-center w-full">
        {/* Header Section - 82px height */}
        <div className="flex justify-center items-center w-full">
          {/* Header content will be handled by Navbar component */}
        </div>

        {/* Hero Content Section */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: "1621px",
            width: "100%",
            height: "calc(100vh - 100px)", // Full height minus navbar
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "29px",
            margin: "0 auto",
          }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            style={{
              borderRadius: "29px",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />

          {/* Content container matching Figma layout */}
          <div
            className="relative z-10 flex flex-col justify-between h-full p-8"
            style={{ padding: "47px 30px" }}
          >
            {/* Headline - Upper left */}
            <div
              style={{ maxWidth: "1259px", width: "100%", minHeight: "188px" }}
            >
              <h1
                className="text-white"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "90px",
                  lineHeight: "1.1666666666666667em",
                  letterSpacing: "-0.05em",
                  textAlign: "left",
                }}
              >
                Smarter Patient Communication. Simpler Dental Practice.
              </h1>
            </div>

            {/* Bottom section with buttons and subtext */}
            <div
              className="flex justify-between items-end w-full"
              style={{ gap: "588px" }}
            >
              {/* CTA Buttons */}
              <div className="flex items-center" style={{ gap: "10px" }}>
                <button
                  className="flex items-center justify-center gap-2 rounded-full transition-colors duration-200 uppercase"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "231px",
                    height: "54px",
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "18px",
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

                <button
                  aria-label="Watch video"
                  className="flex items-center justify-center gap-2 rounded-full transition-colors duration-200 uppercase"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #FFFFFF",
                    width: "231px",
                    height: "58px",
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "1.3em",
                    color: "#FFFFFF",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ stroke: "#FFFFFF", strokeWidth: "1.25px" }}
                  >
                    <path
                      d="M8 5v14l11-7z"
                      fill="none"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  watch video
                </button>
              </div>

              {/* Subtext - Lower right */}
              <div style={{ width: "501px" }}>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "28px",
                    lineHeight: "1.3571428571428572em",
                    letterSpacing: "-0.04em",
                    textAlign: "left",
                  }}
                >
                  Bixana is a cloud-based dental practice solution that
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
