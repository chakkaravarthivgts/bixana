"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  title: string;
  desc: string;
  image: string;
};

const STEPS: Step[] = [
  {
    title: "Select a template or create your own.",
    desc: "Generate accurate, compliant dental notes instantly, reducing the risk of errors and ensuring every record meets professional standards.",
    image: "/about/whatwedo.jpg",
  },
  {
    title: "Capture conversation in real-time.",
    desc: "Transcribe patient–clinician conversations live with high accuracy.",
    image: "/dental-png.jpg",
  },
  {
    title: "Review AI-suggested summaries.",
    desc: "Receive structured summaries and suggested notes for quick review.",
    image: "/about/whatwedo.jpg",
  },
  {
    title: "Customize and finalize.",
    desc: "Edit details, add context, and finalize notes in seconds.",
    image: "/dental-png.jpg",
  },
  {
    title: "Export to PMS.",
    desc: "Sync securely to your Practice Management System.",
    image: "/about/whatwedo.jpg",
  },
];

export default function AIHowItWorksWithTextReveal() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRevealRef = useRef<HTMLDivElement | null>(null);
  const imgTrackRef = useRef<HTMLDivElement | null>(null);
  const textTrackRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stRef = useRef<ScrollTrigger | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const line3Ref = useRef<HTMLSpanElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!mounted || !sectionRef.current) return;
    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 1024 : false;

    const ctx = gsap.context(() => {
      if (isMobile) return; // mobile: no pinning

      // How It Works Animation
      // Initial states: slide stacking (no opacity changes)
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          y: i === 0 ? 0 : "100%",
          position: "absolute",
          inset: 0,
        });
      });
      textRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          y: i === 0 ? 0 : "100%",
          position: "absolute",
          inset: 0,
        });
      });
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          color: i === 0 ? "#FFFFFF" : "rgba(255,255,255,0.6)",
          scale: i === 0 ? 1 : 0.6,
          transformOrigin: "left center",
        });
      });

      const tl = gsap.timeline({ paused: true });
      for (let i = 1; i < STEPS.length; i++) {
        const prevI = i - 1;
        const prevImg = imgRefs.current[prevI];
        const curImg = imgRefs.current[i];
        const prevTxt = textRefs.current[prevI];
        const curTxt = textRefs.current[i];

        if (prevImg && curImg) {
          tl.to(prevImg, { y: "-100%", duration: 0.6, ease: "power2.out" });
          tl.to(curImg, { y: "0%", duration: 0.6, ease: "power2.out" }, "<");
        }
        if (prevTxt && curTxt) {
          tl.to(prevTxt, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          tl.fromTo(
            curTxt,
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 0.6, ease: "power2.out" },
            "<"
          );
        }
        // Update numbers styling on each step (scale to avoid layout shift)
        tl.add(() => {
          numberRefs.current.forEach((el, idx) => {
            if (!el) return;
            const active = idx === i;
            gsap.to(el, {
              color: active ? "#FFFFFF" : "rgba(255,255,255,0.6)",
              scale: active ? 1 : 0.6,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }

      const pinDistance = 1200;

      stRef.current = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "center center",
        end: `+=${pinDistance}`,
        scrub: 1,
        pin: sectionRef.current!,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => tl.progress(self.progress),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const handleNumberClick = (index: number) => {
    if (!stRef.current) return;
    const st = stRef.current;
    const steps = Math.max(1, STEPS.length - 1);
    const progress = Math.min(1, Math.max(0, index / steps));
    const target = st.start + (st.end - st.start) * progress;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  // Text Reveal Animation
  useLayoutEffect(() => {
    if (!mounted || !textRevealRef.current) return;

    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    if (!l1 || !l2 || !l3) return;

    const ctx = gsap.context(() => {
      const l1Letters = l1.querySelectorAll(".letter");
      const l2Letters = l2.querySelectorAll(".letter");
      const l3Letters = l3.querySelectorAll(".letter");

      // Initial light gray for letters for reveal effect
      gsap.set([...l1Letters, ...l2Letters, ...l3Letters], {
        color: "rgba(255,255,255,0.35)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRevealRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      l1Letters.forEach((letter, i) => {
        tl.to(letter, { color: "#FFFFFF", duration: 0.05 }, i * 0.03);
      });
      const l1Dur = l1Letters.length * 0.03;
      l2Letters.forEach((letter, i) => {
        tl.to(letter, { color: "#FFFFFF", duration: 0.05 }, l1Dur + i * 0.03);
      });
      const l2Dur = l2Letters.length * 0.03;
      l3Letters.forEach((letter, i) => {
        tl.to(
          letter,
          { color: "#FFFFFF", duration: 0.05 },
          l1Dur + l2Dur + i * 0.03
        );
      });
    }, textRevealRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      {/* How It Works Section */}
      <section
        ref={sectionRef}
        className="relative w-full bg-[#0052CC] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Tag */}
          <div className="flex items-center justify-center" style={{ gap: 8 }}>
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #0E7AFE 100%)",
              }}
            />
            <span
              className="uppercase"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              How it works
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-center mt-4"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "clamp(28px,5vw,48px)",
              letterSpacing: "-0.02em",
            }}
          >
            From information to insights, instantly.
          </h2>

          {/* Content */}
          <div className="mt-10 lg:mt-16 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Left numbers */}
            <div
              className="hidden lg:flex flex-col items-start pt-6 flex-shrink-0"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  className="leading-none mb-6 cursor-pointer select-none"
                  onClick={() => handleNumberClick(i)}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "24px",
                    width: "56px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>

            {/* Center image track - portrait */}
            <div className="w-full lg:w-[480px]">
              <div
                ref={imgTrackRef}
                className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden mx-auto"
              >
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      imgRefs.current[i] = el;
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right text track */}
            <div className="w-full lg:flex-1">
              <div ref={textTrackRef} className="relative min-h-[220px]">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      textRefs.current[i] = el;
                    }}
                    className="pr-2"
                  >
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 300,
                        fontSize: "clamp(22px,3.6vw,32px)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-white/80"
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 300,
                        fontSize: 16,
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section
        ref={textRevealRef}
        className="w-full bg-[#0052CC] py-20 px-4 sm:px-6 lg:px-8 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-white"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "clamp(28px, 5.5vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            <span ref={line1Ref} className="block">
              {"Turn raw data into clear insights and "
                .split("")
                .map((ch, i) => (
                  <span key={i} className="letter">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
            </span>
            <span ref={line2Ref} className="block">
              {"informed actions — Toothfairy AI helps you see"
                .split("")
                .map((ch, i) => (
                  <span key={i} className="letter">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
            </span>
            <span ref={line3Ref} className="block">
              {"the next move with confidence.".split("").map((ch, i) => (
                <span key={i} className="letter">
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
