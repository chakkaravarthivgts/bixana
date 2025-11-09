"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ShinyText from "./ShinyText";
// import { toothfairy } from "public/toothfairy.svg";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget?: (options: Record<string, unknown>) => void;
      initPopupWidget?: (options: { url: string }) => void;
    };
  }
}

type NavbarProps = {
  variant?: "light" | "dark";
};

export default function Navbar({ variant = "light" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    if (variant === "dark") {
      return (
        (isActive
          ? "text-white underline underline-offset-4 decoration-2"
          : "text-white hover:text-white/80") +
        " transition-colors duration-200"
      );
    }
    return (
      (isActive
        ? "text-[#0052CC] underline underline-offset-4 decoration-2"
        : "text-black hover:text-blue-600") + " transition-colors duration-200"
    );
  };

  // Hide navbar on scroll for dark variant (AI page)
  useEffect(() => {
    if (variant !== "dark") return;
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

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
          url: "https://calendly.com/santhosh-25/toothfairy-ai",
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
    <>
      <header
        className={
          variant === "dark"
            ? `fixed top-0 left-0 right-0 z-[100] w-full bg-transparent transition-transform duration-300 ${scrolled ? "-translate-y-full" : "translate-y-0"}`
            : "sticky top-0 z-[100] w-full "
        }
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo/Brand */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <>
                  {variant === "dark" ? (
                    <Image
                      src="/Asset 1 2.svg"
                      alt="ToothFairy Logo"
                      width={200}
                      height={200}
                    />
                  ) : (
                    <Image
                      src="/Asset 1 1.svg"
                      alt="ToothFairy Logo"
                      width={200}
                      height={200}
                    />
                  )}
                </>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-10 translate-x-[100px]">
              <Link
                className={linkClass("/about")}
                style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                href="/about"
              >
                About
              </Link>
              <Link
                className={linkClass("/services")}
                style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                href="/services"
              >
                Services
              </Link>
              <Link
                className={linkClass("/pricing")}
                style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className={linkClass("/ai")}
                style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                href="/ai"
              >
                ToothFairy AI
              </Link>
              <Link
                className={linkClass("/contact")}
                style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center flex-shrink-0 gap-2.5">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  initCalendlyBadge();
                }}
                className={
                  variant === "dark"
                    ? "flex items-center justify-center gap-2 text-[#0052CC] rounded-full transition-colors duration-200  bg-white hover:bg-white/90"
                    : "flex items-center justify-center gap-2 text-white rounded-full transition-colors duration-200 "
                }
                style={{
                  backgroundColor: variant === "dark" ? "#ffffff" : "#0052CC",
                  width: "205px",
                  height: "42px",
                  fontFamily: "Inter Tight",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "1.3em",
                  cursor: "pointer",
                  zIndex: 1000,
                  // l: "Inter Tight",
                  letterSpacing: "0.02em",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    stroke: variant === "dark" ? "#0052CC" : "#FFFFFF",
                    strokeWidth: "1.3px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <ShinyText
                  text="Schedule Demo"
                  disabled={false}
                  speed={5}
                  textColor={variant === "dark" ? "#FFFFFF" : "#FFFFFF"}
                />
              </a>

              <a
                href="https://app.bixana.com/"
                className={
                  variant === "dark"
                    ? "flex items-center justify-center text-white rounded-full transition-colors duration-200  border border-white bg-transparent hover:bg-white/10"
                    : "flex items-center justify-center text-black rounded-full transition-colors duration-200 "
                }
                style={{
                  width: "103px",
                  height: "42px",
                  border:
                    variant === "dark"
                      ? "2px solid #ffffff"
                      : "2px solid #777777",
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.3em",
                }}
              >
                Login
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={
                variant === "dark"
                  ? "lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
                  : "lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              }
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke={variant === "dark" ? "#FFFFFF" : "currentColor"}
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
        <div className="fixed inset-0 z-[10000] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[80%] bg-white shadow-2xl border-l border-gray-200 p-6 flex flex-col gap-4 h-full">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src="/toothfairy white BG.svg"
                  alt="ToothFairy Logo"
                  style={{
                    width: "240px",
                    height: "60px",
                  }}
                  width={240}
                  height={60}
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
            <nav className="flex flex-col gap-4 mt-0">
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
                href="/ai"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-900 font-medium"
              >
                AI
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  initCalendlyBadge();
                  setOpen(false);
                }}
                className="w-full h-12 rounded-full text-white font-medium flex items-center justify-center"
                style={{ backgroundColor: "#0052CC" }}
              >
                schedule demo
              </a>
              <a
                href="https://app.bixana.com/"
                className="w-full h-12 rounded-full border border-[#777777] text-gray-900 font-medium flex items-center justify-center"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
