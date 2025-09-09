"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Image
              src="/clientlogo.png"
              alt="Bixana Logo"
              width={48}
              height={44}
              className="object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center" style={{ gap: "42px" }}>
            <button
              className="text-black transition-colors duration-200 hover:text-blue-600"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
              }}
            >
              About
            </button>
            <button
              className="text-black transition-colors duration-200 hover:text-blue-600"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
              }}
            >
              Services
            </button>
            <button
              className="text-black transition-colors duration-200 hover:text-blue-600"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
              }}
            >
              Pricing
            </button>
            <button
              className="text-black transition-colors duration-200 hover:text-blue-600"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
              }}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center" style={{ gap: "10px" }}>
            <button
              className="flex items-center justify-center gap-2 text-white rounded-full transition-colors duration-200 uppercase"
              style={{
                backgroundColor: "#0052CC",
                width: "205px",
                height: "48px",
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.3em",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              schedule demo
            </button>

            <button
              className="flex items-center justify-center text-black rounded-full transition-colors duration-200 uppercase"
              style={{
                width: "103px",
                height: "48px",
                border: "2px solid #777777",
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.3em",
              }}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
