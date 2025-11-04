"use client";
import Image from "next/image";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default function OurStory() {
  const storyImages = [
    "/about/about-hero-img1.png",
    "/about/about-hero-img2.png",
    "/about/about-hero-img3.png",
    "/about/about-hero-img4.png",
  ];
  const sectionRef = useRef<HTMLElement | null>(null);
  const textTrackRef = useRef<HTMLDivElement | null>(null);
  const textStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageStackRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const [textBoxHeight, setTextBoxHeight] = useState<number>(0);

  useLayoutEffect(() => {
    // Only apply GSAP animations on desktop
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const textTrack = textTrackRef.current;
    if (!section || !textTrack) return;

    const ctx = gsap.context(() => {
      const heights = textStepRefs.current
        .filter(Boolean)
        .map((el) => (el as HTMLDivElement).offsetHeight);
      const maxH = Math.max(0, ...heights);
      setTextBoxHeight(maxH);
      const total = 1400; // stable scroll distance

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.max(1600, total + 1000)}`,
          scrub: 1,
          pin: true,
        },
      });

      // Ensure initial state: first visible, others hidden
      textStepRefs.current.forEach((step, i) => {
        if (!step) return;
        if (i === 0) {
          gsap.set(step, { opacity: 1, y: 0 });
        } else {
          gsap.set(step, { opacity: 0, y: 40 });
        }
      });

      // Prepare images initial state
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        if (i === 0) {
          gsap.set(img, { opacity: 1, scale: 1 });
        } else {
          gsap.set(img, { opacity: 0, scale: 1 });
        }
      });

      // Interleave text and image transitions per step
      const steps = Math.min(
        textStepRefs.current.length,
        imageRefs.current.length
      );
      for (let i = 1; i < steps; i++) {
        const prevText = textStepRefs.current[i - 1];
        const curText = textStepRefs.current[i];
        const prevImg = imageRefs.current[i - 1];
        const curImg = imageRefs.current[i];
        if (!prevText || !curText || !prevImg || !curImg) continue;

        // fade previous text up, then bring next text in
        tl.to(prevText, { opacity: 0, y: -40, duration: 0.6 });
        tl.to(curText, { opacity: 1, y: 0, duration: 0.6 });

        // sync images with the same step
        tl.to(prevImg, { opacity: 0, duration: 0.4 }, "<");
        tl.fromTo(
          curImg,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "<"
        );
      }
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center relative z-10"
      style={{
        background:
          "linear-gradient(180deg, #0B56C7 0%, #0A4EC2 30%, #0A46B5 65%, #083C9E 100%)",
      }}
    >
      <div className="w-full h-full">
        {isMobile ? (
          /* Mobile Layout: Scrollable cards */
          <div className="px-0 py-8">
            {/* Header */}
            <div className="px-4 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-white/90 rounded-full" />
                <span
                  className="uppercase tracking-wide text-sm text-white/70"
                  style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                >
                  Our Story
                </span>
              </div>
              <h2
                className="text-white leading-tight"
                style={{
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  fontFamily: "Inter Tight",
                }}
              >
                <span className="block text-[32px] leading-[36px]">
                  How it began
                </span>
              </h2>
            </div>

            {/* Story Cards */}
            <div className="space-y-0">
              {storyImages.map((src, i) => (
                <div key={`mobile-story-${i}`} className="w-full">
                  {/* Story Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-6 mx-0 mb-4">
                    {/* Number */}
                    <div
                      className="text-white/60 text-[60px] leading-none mb-4"
                      style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Heading */}
                    <h3
                      className="text-white text-[24px] leading-[28px] mb-4"
                      style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                    >
                      {i === 0 && "How it began"}
                      {i === 1 && "Our Mission"}
                      {i === 2 && "Our Vision"}
                      {i === 3 && "Our Impact"}
                    </h3>

                    {/* Content */}
                    <p
                      className="text-white/90 text-[16px] leading-[24px] mb-6"
                      style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                    >
                      At ToothFairy, our numbers reflect the impact we create
                      for dental practices. From the growing number of clinics
                      we support to the efficiency gains our solutions deliver,
                      each statistic represents our commitment to innovation,
                      seamless workflows, and exceptional patient care.
                    </p>

                    {/* Image */}
                    <div className="relative w-full h-[250px] rounded-[12px] overflow-hidden bg-white">
                      <Image
                        src={src}
                        alt="ToothFairy workspace"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </div>

                  {/* Divider (except for last card) */}
                  {i < storyImages.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-full h-px bg-white/20"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Layout: Original with animations */
          <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 py-10 sm:py-14 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              {/* Left copy */}
              <div className="lg:col-span-6 text-white flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6 sm:mb-8">
                  <div className="w-3 h-3 bg-white/90 rounded-full" />
                  <span
                    className="uppercase tracking-wide font-['Helvetica_Neue'] text-sm"
                    style={{ fontWeight: 300 }}
                  >
                    Our Story
                  </span>
                </div>

                <div className="mb-6">
                  <h2
                    className="font-['Helvetica_Neue'] text-white leading-tight mt-3"
                    style={{ fontWeight: 300, letterSpacing: "-0.02em" }}
                  >
                    <span className="block text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px]">
                      How it began
                    </span>
                  </h2>
                </div>

                <div
                  ref={textTrackRef}
                  className="relative"
                  style={{ height: textBoxHeight || undefined }}
                >
                  {storyImages.map((_, i) => (
                    <div
                      key={`step-${i}`}
                      ref={(el) => {
                        textStepRefs.current[i] = el;
                      }}
                      className={`absolute inset-0 max-w-2xl`}
                      style={{
                        fontWeight: 300,
                        color: "#CFE1FF",
                        fontSize: 24,
                        lineHeight: "26px",
                        letterSpacing: "-0.02em",
                        opacity: i === 0 ? 1 : 0,
                      }}
                    >
                      At ToothFairy, our numbers reflect the impact we create
                      for dental practices. From the growing number of clinics
                      we support to the efficiency gains our solutions deliver,
                      each statistic represents our commitment to innovation,
                      seamless workflows, and exceptional patient care.
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="lg:col-span-6 w-full">
                <div className="w-full h-full flex justify-center lg:justify-end">
                  <div
                    ref={imageStackRef}
                    className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-white w-[92%] sm:w-[90%] max-w-[640px] aspect-[4/5]"
                  >
                    {storyImages.map((src, i) => (
                      <div
                        key={`img-${i}`}
                        ref={(el) => {
                          imageRefs.current[i] = el;
                        }}
                        className={`absolute inset-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <Image
                          src={src}
                          alt="ToothFairy workspace"
                          fill
                          sizes="(min-width: 1024px) 640px, 90vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
