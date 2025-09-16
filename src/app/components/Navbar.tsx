"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-sm ">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo/Brand */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/home">
                <Image
                  src="/clientlogo.png"
                  alt="Bixana Logo"
                  width={48}
                  height={44}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-10 translate-x-[100px]">
              <Link
                className="text-black transition-colors duration-200 hover:text-blue-600"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-black transition-colors duration-200 hover:text-blue-600"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-black transition-colors duration-200 hover:text-blue-600"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-black transition-colors duration-200 hover:text-blue-600"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center flex-shrink-0 gap-2.5">
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

            {/* Mobile Hamburger */}
            <button
              className="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Rendered outside header */}
      {open && (
        <div className="fixed inset-0 z-[10000] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[80%] bg-white shadow-2xl border-l border-gray-200 p-6 flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between">
              <Link href="/home" onClick={() => setOpen(false)}>
                <Image
                  src="/clientlogo.png"
                  alt="Bixana Logo"
                  width={40}
                  height={36}
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 mt-4">
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-900 font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-900 font-medium"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-900 font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-900 font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <button
                className="w-full h-12 rounded-full text-white font-medium"
                style={{ backgroundColor: "#0052CC" }}
              >
                schedule demo
              </button>
              <button className="w-full h-12 rounded-full border border-[#777777] text-gray-900 font-medium">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
