"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full">
      {/* Top Section with Background Image */}
      <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[400px] overflow-hidden">
        <Image
          src="/dental-png.jpg"
          alt="Dental clinic background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0052CC] opacity-60"></div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0052CC] px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 lg:mb-[200px]">
            {/* Brand and Menus */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="lg:col-span-1 w-full lg:w-[600px]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full"></div>
                  </div>
                  <h2
                    className="text-white"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 300,
                      fontSize: "clamp(24px, 5vw, 48px)",
                      lineHeight: "1.147em",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    BIXANA
                  </h2>
                </div>
                <p
                  className="text-white/90 text-[14px] sm:text-[16px] leading-[1.6] font-normal"
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 300,
                    fontSize: "clamp(14px, 3.5vw, 24px)",
                    lineHeight: "1.5",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Bixana, A cloud application which helps dental clinic to keep
                  better connect and continue relationship with patients
                </p>
              </div>

              {/* Menu Section */}
              <div className="flex gap-12 sm:gap-16 lg:gap-20">
                <div>
                  <h3 className="text-white font-medium text-[14px] sm:text-[16px] mb-4 sm:mb-6 uppercase tracking-[0.1em]">
                    MENU
                  </h3>
                  <ul className="space-y-4">
                    {["Home", "About Us", "Service", "Pricing", "Contact"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-white/80 hover:text-white text-[14px] sm:text-[16px] font-normal transition-colors duration-300"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Legal Section */}
                <div>
                  <h3 className="text-white font-medium text-[14px] sm:text-[16px] mb-4 sm:mb-6 uppercase tracking-[0.1em]">
                    LEGAL
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Privacy Policy",
                      "Terms of Use",
                      "Accessibility Statement",
                      "Funding Transparency",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white/80 hover:text-white text-[14px] sm:text-[16px] font-normal transition-colors duration-300"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="mt-10 sm:mt-12 space-y-2 text-white/70 text-[14px] sm:text-[16px]"
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 300,
              fontSize: "clamp(14px, 3.5vw, 24px)",
              lineHeight: "1.5",
              letterSpacing: "-0.02em",
            }}
          >
            <p>123 Innovation Drive, Tech City, TC 12345</p>
            <p>+1 (555) 123-4567</p>
            <p>info@quantleap.org</p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30 mt-10 sm:mt-12 pt-6 sm:pt-8 mb-10 lg:mb-[100px]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-5 sm:gap-6 lg:gap-8">
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[16px] font-normal transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[16px] font-normal transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[16px] font-normal transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                  Instagram
                </a>
              </div>

              {/* Copyright */}
              <p
                className="text-white/60 text-[14px]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "1.147em",
                  letterSpacing: "-0.02em",
                }}
              >
                © {currentYear} Bixana. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
