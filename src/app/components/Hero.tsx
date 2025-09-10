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

        {/* Hero Content Section */}
        <div
          className="relative overflow-hidden mb-[100px]"
          style={{
            height: "calc(100vh - 110px)", // Full height minus navbar
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "29px",
            marginLeft: "100px",
            marginRight: "100px",
            width: "calc(100vw - 80px)",
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
                  letterSpacing: "-4.5px",
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
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5075 6.79414C15.9077 7.00698 16.2425 7.32471 16.476 7.71329C16.7095 8.10187 16.8328 8.54665 16.8328 8.99997C16.8328 9.45329 16.7095 9.89807 16.476 10.2866C16.2425 10.6752 15.9077 10.993 15.5075 11.2058L4.83083 17.0116C3.11167 17.9475 1 16.7308 1 14.8066V3.19414C1 1.26914 3.11167 0.0533047 4.83083 0.987471L15.5075 6.79414Z"
                      stroke="white"
                      strokeWidth="1.25"
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
