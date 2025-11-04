"use client";

import { useState } from "react";

export default function PlanSimple() {
  const features = [
    "Schedule Appointments Anytime, Anywhere",
    "Basic reminders for effortless scheduling",
    "Instant messaging for quick communication",
    "Digital consents for secure approvals",
    "Treatment & payment plans for simplified management",
    "Eligibility benefits summary for coverage insights",
  ];

  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
        {/* Header inside pricing component */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full" />
          <span className="text-black text-sm sm:text-base font-light uppercase tracking-wide">
            PLAN
          </span>
        </div>
        <h2
          className="text-center text-black font-light tracking-[-0.02em] mb-8"
          style={{ fontFamily: "Inter Tight" }}
        >
          <span className="block text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
            Our Pricing is Affordable To all
          </span>
          <span className="block text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
            customer
          </span>
        </h2>
        <div className="rounded-[28px] border border-[#D9D9D9] bg-white  sm:p-8 lg:p-10 min-h-[560px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: switch + amount + button (left aligned) */}
            <div className="flex flex-col gap-8 items-start h-full">
              {/* Toggle (visual) */}
              <div className="w-full max-w-md rounded-full bg-neutral-100 p-2 border border-[#E5E7EB]">
                <div
                  className="grid grid-cols-2 text-center text-[#0A0F29]"
                  style={{ fontFamily: "Inter Tight" }}
                >
                  <button
                    type="button"
                    onClick={() => setIsYearly(false)}
                    className={`py-2 rounded-full transition ${!isYearly ? "bg-white shadow-sm" : "bg-transparent"}`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsYearly(true)}
                    className={`py-2 rounded-full transition ${isYearly ? "bg-white shadow-sm" : "bg-transparent"}`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              {/* Bottom group: price + button anchored to bottom on lg */}
              <div className="flex flex-col items-start gap-4 mt-8">
                {/* Price */}
                <div
                  className="relative mb-4"
                  style={{ fontFamily: "Inter Tight" }}
                >
                  {isYearly && (
                    <span className="absolute -top-6 left-0 text-xs px-2 py-1 rounded-full bg-[#E7F1FF] text-[#0052CC]">
                      Save 10%
                    </span>
                  )}
                  <div className="flex items-end gap-3">
                    <div className="text-[96px] leading-none text-black font-light">
                      {isYearly ? "$5389" : "$499"}
                    </div>
                    <div className="text-[#585858] text-xl mb-4">
                      {isYearly ? "/ year" : "/ month"}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="w-[160px] h-10 rounded-full bg-[#0052CC] text-white font-medium text-sm mb-4"
                  style={{ fontFamily: "Inter Tight" }}
                >
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Right: Available Features */}

            <div
              className="bg-neutral-100 rounded-[24px] p-6 sm:p-8"
              style={{ fontFamily: "Inter Tight" }}
            >
              <h3 className="text-3xl sm:text-4xl text-black font-light mb-6">
                Available Features
              </h3>
              <ul className="space-y-5 text-[#3A3F50] text-lg">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Below card helper text */}
        <div
          className="text-center mt-6 text-[#6B7390] text-lg"
          style={{ fontFamily: "Inter Tight" }}
        >
          <span>For group of clinic, </span>
          <a href="/contact" className="text-[#0052CC] underline">
            Contact our sales
          </a>
          <span> team</span>
        </div>
      </div>
    </section>
  );
}
