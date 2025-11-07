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
  const storyData = [
    {
      year: "2017",
      title: "The Beginning",
      content:
        "Our journey began inside a busy dental practice in 2017. While using Open Dental for practice management, we quickly realized how challenging it was to streamline daily operations. Managing essential tasks like billing, communication, reporting, and scheduling required multiple disconnected tools. It was complex, time-consuming, and costly — limiting the time we could truly spend on patient care.",
      image: "/about/about-hero-img1.png",
    },
    {
      year: "2018",
      title: "The Spark of an Idea",
      content:
        "In May 2018, during a casual conversation with a patient, Mr. Mohan — a computer engineer — an idea was born. We discussed the frustration of juggling several systems that didn't talk to each other. That moment inspired us to create something better: an all-in-one solution designed specifically for dental practices. Our vision was clear — to build a single, seamless platform that integrated appointments, billing, patient communication, and reporting, all accessible anytime, anywhere.",
      image: "/about/about-hero-img2.png",
    },
    {
      year: "2019",
      title: "From Practice to Platform",
      content:
        "What started as a solution for one clinic evolved into something bigger. In 2019, we began refining the platform for broader use — making it scalable and reusable for other dental practices. The goal was to empower clinics of all sizes to run efficiently under one unified system.",
      image: "/about/about-hero-img3.png",
    },
    {
      year: "2020",
      title: "Strengthening Core Features",
      content:
        "By 2020, we expanded Bixana with one of the most requested and essential capabilities — Eligibility Benefit Summary. This feature simplified insurance verification and patient eligibility checks, a major pain point for clinics everywhere. With support for over 1,300 providers, Bixana became an indispensable tool for front-office teams.",
      image: "/about/about-hero-img4.png",
    },
    {
      year: "2021",
      title: "Smarter Scheduling & Integration",
      content:
        "In 2021, we introduced Smart Appointment Scheduling and seamless Open Dental integration. These updates brought real-time connectivity between patient records, treatment plans, and appointment workflows — creating a smooth, unified experience for both staff and patients.",
      image: "/about/about-hero-img5.png",
    },
    {
      year: "2022",
      title: "From Idea to Impact",
      content:
        "By 2022, Bixana became a fully functional, practice-tested product, continuously enhanced based on real clinical feedback. The results were transformative: One Platform for Everything: Simplifying operations by eliminating multiple apps. Reduced Costs: Cutting unnecessary subscriptions and overhead. More Time for Patients: Streamlining workflows to focus on what matters most — care.",
      image: "/about/about-hero-img1.png",
    },
    {
      year: "Today",
      title: "Empowering Modern Dentistry",
      content:
        "What began as a simple idea to solve one clinic's challenges has grown into Bixana — a powerful, all-in-one dental software trusted by practices to run smarter, faster, and more connected. Our mission continues: to help every dental practice achieve operational excellence, enhance patient experiences, and embrace the future of digital dentistry.",
      image: "/about/about-hero-img2.png",
    },
  ];
  const sectionRef = useRef<HTMLElement | null>(null);
  const textTrackRef = useRef<HTMLDivElement | null>(null);
  const textStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
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

      // Numbers initial state
      numberRefs.current.forEach((num, i) => {
        if (!num) return;
        if (i === 0) {
          gsap.set(num, { opacity: 1, y: 0 });
        } else {
          gsap.set(num, { opacity: 0, y: 20 });
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
        imageRefs.current.length,
        storyData.length
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

        // numbers transition in sync
        const prevNum = numberRefs.current[i - 1];
        const curNum = numberRefs.current[i];
        if (prevNum && curNum) {
          tl.to(prevNum, { opacity: 0, y: -10, duration: 0.4 }, "<");
          tl.to(curNum, { opacity: 1, y: 0, duration: 0.4 }, "<");
        }
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
              {storyData.map((story, i) => (
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

                    {/* Heading with year prefix */}
                    <div className="mb-4">
                      <h3
                        className="text-white text-[24px] leading-[28px]"
                        style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                      >
                        {`${story.year} - ${story.title}`}
                      </h3>
                    </div>

                    {/* Content */}
                    <p
                      className="text-white/90 text-[16px] leading-[24px] mb-6"
                      style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                    >
                      {story.content}
                    </p>

                    {/* Image */}
                    <div className="relative w-full h-[250px] rounded-[12px] overflow-hidden bg-white">
                      <Image
                        src={story.image}
                        alt={`${story.year} - ${story.title}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </div>

                  {/* Divider (except for last card) */}
                  {i < storyData.length - 1 && (
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
              {/* Left copy */}
              <div className="lg:col-span-6 text-white flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-6 sm:mb-8">
                  <div className="w-3 h-3 bg-white/90 rounded-full" />
                  <span
                    className="uppercase tracking-wide font-['Inter_Tight'] text-md"
                    style={{ fontWeight: 300 }}
                  >
                    Our Story
                  </span>
                </div>

                {/* Headline + text centered to image height */}
                <div
                  className="w-[92%] sm:w-[90%] max-w-[640px] aspect-[4/5] flex flex-col justify-center"
                  style={{ transform: "translateY(-25%)" }}
                >
                  {/* Step Number (scroll-synced) */}
                  <div className="relative h-8 mb-2">
                    {storyData.map((story, idx) => (
                      <div
                        key={`num-${idx}`}
                        ref={(el) => {
                          numberRefs.current[idx] = el;
                        }}
                        className="absolute inset-0 flex items-center"
                        style={{
                          fontFamily: "Inter Tight",
                          fontWeight: 300,
                          color: "#FFFFFF",
                          opacity: idx === 0 ? 1 : 0,
                        }}
                      >
                        <span className="text-[28px] sm:text-[20px] md:text-[22px] lg:text-[32px] leading-none">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Dynamic title moves with content per step */}
                  <div className="mb-6" />
                  <div
                    ref={textTrackRef}
                    className="relative w-full"
                    style={{ height: textBoxHeight || undefined }}
                  >
                    {storyData.map((story, i) => (
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
                          lineHeight: "30px",

                          opacity: i === 0 ? 1 : 0,
                        }}
                      >
                        <div className="mb-4">
                          <h3
                            className="text-white leading-tight"
                            style={{ fontFamily: "Inter Tight" }}
                          >
                            <span
                              className="block text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
                              style={{ letterSpacing: "-0.02em" }}
                            >
                              {`${story.year} - ${story.title}`}
                            </span>
                          </h3>
                        </div>
                        <p>{story.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="lg:col-span-6 w-full">
                <div className="w-full h-full flex justify-center lg:justify-end">
                  <div
                    ref={imageStackRef}
                    className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-white w-[92%] sm:w-[90%] max-w-[640px] aspect-[4/5]"
                  >
                    {storyData.map((story, i) => (
                      <div
                        key={`img-${i}`}
                        ref={(el) => {
                          imageRefs.current[i] = el;
                        }}
                        className={`absolute inset-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <Image
                          src={story.image}
                          alt={`${story.year} - ${story.title}`}
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
