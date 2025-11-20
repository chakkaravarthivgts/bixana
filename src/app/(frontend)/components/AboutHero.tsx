"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const heroImages = [
  { src: "/about/about-hero-img1.png", alt: "Team 1" },
  { src: "/about/about-hero-img2.png", alt: "Team 2" },
  { src: "/about/about-hero-img3.png", alt: "Team 3" },
  { src: "/about/about-hero-img4.png", alt: "Team 4" },
  { src: "/about/about-hero-img5.png", alt: "Team 5" },
];

export default function AboutHero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const widthRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure width of a single sequence (we render it twice for seamless loop)
    const measure = () => {
      // track contains two sequences side-by-side; we want the width of one
      widthRef.current = track.scrollWidth / 2;
    };
    measure();
    const resizeObs = new ResizeObserver(measure);
    resizeObs.observe(track);

    const speedPxPerSec = 60; // adjust for faster/slower loop

    const step = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      xRef.current -= speedPxPerSec * dt;
      const sequenceWidth = widthRef.current;
      if (sequenceWidth > 0 && xRef.current <= -sequenceWidth) {
        // jump back without layout shift or pause
        xRef.current += sequenceWidth;
      }

      if (track) {
        track.style.transform = `translateX(${xRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObs.disconnect();
    };
  }, []);
  return (
    <section className="flex flex-col items-center gap-24 ">
      <div className="flex flex-col items-center mt-16 gap-12">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
            <span className="text-black text-base font-light uppercase tracking-wide">
              about us
            </span>
          </div>

          <h2
            className="text-[#0A0F29] text-[40px] sm:text-[52px] md:text-[62px] lg:text-[76px] xl:text-[80px] font-light leading-[1.08] text-center"
            style={{ fontFamily: "Inter Tight", letterSpacing: "-0.03em" }}
          >
            Simplifying complex dental <br />
            operations with{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
              }}
            >
              intuitive, reliable
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
              }}
            >
              solutions
            </span>
            .
          </h2>
        </div>

        <div className="relative overflow-hidden w-screen">
          <div
            ref={trackRef}
            className="flex gap-5 items-start will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {[...heroImages, ...heroImages].map((img, idx) => {
              const width = 345;
              const heights = [520, 360, 440, 300, 480]; // five unique sizes
              const height = heights[idx % heights.length];
              return (
                <div
                  className="flex-none"
                  key={`img-${idx}`}
                  style={{
                    width,
                    height,
                    borderRadius: 50,
                    overflow: "hidden",
                    // backgroundColor: "white",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={width}
                    height={height}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
