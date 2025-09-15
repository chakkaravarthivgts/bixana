"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const line3Ref = useRef<HTMLSpanElement | null>(null);
  const line4Ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const line4 = line4Ref.current;

    if (!section || !line1 || !line2 || !line3 || !line4) return;

    const ctx = gsap.context(() => {
      // Get all letter spans from each line
      const line1Letters = line1.querySelectorAll(".letter");
      const line2Letters = line2.querySelectorAll(".letter");
      const line3Letters = line3.querySelectorAll(".letter");
      const line4Letters = line4.querySelectorAll(".letter");

      // Set initial gray state for all letters
      gsap.set([...line1Letters, ...line2Letters, ...line4Letters], {
        color: "#777777",
      });
      gsap.set(line3Letters, {
        backgroundImage: "linear-gradient(90deg, #777777 0%, #777777 100%)",
      });

      // Create the progressive reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line1,
          start: "top bottom",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Animate each line sequentially
      // Line 1: letter by letter
      line1Letters.forEach((letter, index) => {
        tl.to(letter, { color: "#000000", duration: 0.05 }, index * 0.05);
      });

      // Line 2: letter by letter (starts after line 1 completes)
      const line1Duration = line1Letters.length * 0.05;
      line2Letters.forEach((letter, index) => {
        tl.to(
          letter,
          { color: "#000000", duration: 0.05 },
          line1Duration + index * 0.05
        );
      });

      // Line 3: letter by letter with gradient
      const line2Duration = line2Letters.length * 0.05;
      line3Letters.forEach((letter, index) => {
        tl.to(
          letter,
          {
            backgroundImage: "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
            duration: 0.05,
          },
          line1Duration + line2Duration + index * 0.05
        );
      });

      // Line 4: letter by letter
      const line3Duration = line3Letters.length * 0.05;
      line4Letters.forEach((letter, index) => {
        tl.to(
          letter,
          { color: "#000000", duration: 0.05 },
          line1Duration + line2Duration + line3Duration + index * 0.05
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="w-full bg-white relative">
      {/* Dotted border lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <div className="h-full border-l-2 border-dotted border-blue-200"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-px">
        <div className="h-full border-r-2 border-dotted border-blue-200"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-14 md:py-18 lg:py-24">
        <div className="text-center">
          <p
            className="text-black"
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 300,
              fontSize: "clamp(28px, 6vw, 68px)",
              lineHeight: 1.15,
              letterSpacing: "-2.08px",
            }}
          >
            <span ref={line1Ref} className="block">
              {"One platform for every dental need"
                .split("")
                .map((char, index) => (
                  <span key={index} className="letter">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </span>
            <span ref={line2Ref} className="block">
              {"—checkups, treatments, and more."
                .split("")
                .map((char, index) => (
                  <span key={index} className="letter">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </span>
            <span ref={line3Ref} className="block">
              {"Simple, secure, and reliable".split("").map((char, index) => (
                <span
                  key={index}
                  className="letter text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span ref={line4Ref} className="block">
              {"from start to finish.".split("").map((char, index) => (
                <span key={index} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
