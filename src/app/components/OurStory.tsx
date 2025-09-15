"use client";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const textTrack = textTrackRef.current;
    if (!section || !textTrack) return;

    const ctx = gsap.context(() => {
      const gap = 48;
      const heights = textStepRefs.current
        .filter(Boolean)
        .map((el) => (el as HTMLDivElement).offsetHeight);
      const total =
        heights.reduce((a, b) => a + b, 0) + gap * (heights.length - 1);

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

      let offset = 0;
      textStepRefs.current.forEach((step, i) => {
        if (!step) return;
        if (i === 0) {
          // initial static state (no image animation). Keep first step visible
          tl.fromTo(
            step,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6 }
          );
        } else {
          offset += (heights[i - 1] || 0) + gap;
          tl.to(textTrack, {
            y: -offset,
            duration: 0.8,
          });
          const prevText = textStepRefs.current[i - 1];
          if (prevText) {
            tl.to(prevText, { opacity: 0, duration: 0.4 }, "<");
          }
          tl.fromTo(
            step,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8 },
            "<"
          );
        }

        const img = imageRefs.current[i];
        if (i > 0 && img) {
          tl.fromTo(
            img,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8 },
            "<"
          );
          const prev = i > 0 ? imageRefs.current[i - 1] : null;
          if (prev) tl.to(prev, { opacity: 0, duration: 0.4 }, "<");
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left copy */}
            <div className="lg:col-span-6 text-white">
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

              <div ref={textTrackRef} className="relative">
                {storyImages.map((_, i) => (
                  <div
                    key={`step-${i}`}
                    ref={(el) => {
                      textStepRefs.current[i] = el;
                    }}
                    className={`font-['Helvetica_Neue'] max-w-2xl ${i === 0 ? "mt-0" : "mt-8 sm:mt-10 md:mt-12"}`}
                    style={{
                      fontWeight: 300,
                      color: "#CFE1FF",
                      fontSize: 18,
                      lineHeight: "26px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    At Bixana, our numbers reflect the impact we create for
                    dental practices. From the growing number of clinics we
                    support to the efficiency gains our solutions deliver, each
                    statistic represents our commitment to innovation, seamless
                    workflows, and exceptional patient care.
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
                        alt="Bixana workspace"
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
      </div>
    </section>
  );
}
