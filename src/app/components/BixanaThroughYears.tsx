"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BixanaThroughYears() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const formatWithSuffix = (val: number, suffix: string) => {
      const rounded = Math.round(val);
      return `${rounded}${suffix}`;
    };

    valueRefs.current.forEach((el) => {
      if (!el) return;
      const target = Number(el.dataset.value || 0);
      const suffix = String(el.dataset.suffix || "");

      const state = { v: 0 } as { v: number };
      gsap.to(state, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = formatWithSuffix(state.v, suffix);
        },
        scrollTrigger: {
          trigger: sectionRef.current as Element,
          start: "top 80%",
          once: true,
        },
      });
    });
  }, []);
  return (
    <section className="bg-white" id="bixana-through-years">
      <div
        ref={sectionRef}
        className="mx-auto max-w-8xl md:px-10 lg:px-12 2xl:px-20 xl:px-16 py-24 md:py-28"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Heading and copy */}
          <div className="flex-1 min-w-[500px]">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                <span
                  className="text-black text-sm uppercase tracking-wide font-['Helvetica_Neue']"
                  style={{ fontWeight: 300 }}
                >
                  Bixana through years
                </span>
              </div>
              <h2
                className="text-black font-['Helvetica_Neue'] leading-tight"
                style={{ fontWeight: 300 }}
              >
                <span className="block text-[48px] md:text-[56px] lg:text-[72px]">
                  The{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                    }}
                  >
                    numbers
                  </span>{" "}
                  to back
                </span>
                <span className="block text-[48px] md:text-[56px] lg:text-[72px] mt-1">
                  it up.
                </span>
              </h2>

              <p
                className="mt-8 text-[#585858] font-['Helvetica_Neue'] max-w-2xl"
                style={{
                  fontWeight: 300,
                  fontSize: 18,
                  lineHeight: "32px",
                  letterSpacing: "-0.02em",
                }}
              >
                At Bixana, our numbers reflect the impact we create for dental
                practices. From the growing number of clinics we support to the
                efficiency gains our solutions deliver, each statistic
                represents our commitment to innovation, seamless workflows, and
                exceptional patient care.
              </p>
            </div>
          </div>

          {/* Right: Stats list */}
          <div className="flex-1 w-full">
            <ul className="divide-y divide-[#E5E7EB]">
              <li className="flex items-center justify-between py-4">
                <span
                  className="text-[#0A0F29] font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Completed Projects
                </span>
                <span
                  ref={(el) => {
                    valueRefs.current[0] = el;
                  }}
                  data-value="100"
                  data-suffix="%"
                  className="text-black font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 56,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0%
                </span>
              </li>
              <li className="flex items-center justify-between py-4">
                <span
                  className="text-[#0A0F29] font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Customer Satisfaction
                </span>
                <span
                  ref={(el) => {
                    valueRefs.current[1] = el;
                  }}
                  data-value="253"
                  data-suffix="+"
                  className="text-black font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 56,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0+
                </span>
              </li>
              <li className="flex items-center justify-between py-4">
                <span
                  className="text-[#0A0F29] font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Expert Support Team
                </span>
                <span
                  ref={(el) => {
                    valueRefs.current[2] = el;
                  }}
                  data-value="24"
                  data-suffix="h"
                  className="text-black font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 56,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0h
                </span>
              </li>
              <li className="flex items-center justify-between py-4">
                <span
                  className="text-[#0A0F29] font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Sales In Count
                </span>
                <span
                  ref={(el) => {
                    valueRefs.current[3] = el;
                  }}
                  data-value="78"
                  data-suffix="k"
                  className="text-black font-['Helvetica_Neue']"
                  style={{
                    fontWeight: 300,
                    fontSize: 56,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0k
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
