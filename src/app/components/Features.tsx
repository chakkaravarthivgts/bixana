"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Schedule Appointment",
    description:
      "Book and manage patient visits with an intuitive calendar. Easily create and manage appointments from any device.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 2,
    title: "Treatment Planning",
    description:
      "Create comprehensive treatment plans with detailed procedures, costs, and timelines for better patient communication.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 3,
    title: "Integration of signed consent",
    description:
      "Digitally capture and store patient consent forms with secure electronic signatures for compliance and convenience.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 4,
    title: "Verify eligibility benefit summary",
    description:
      "Instantly verify patient insurance eligibility and benefits to provide accurate cost estimates before treatment.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 5,
    title: "Reminders & Confirmations",
    description:
      "Automated appointment reminders and confirmations via SMS and email to reduce no-shows and improve patient attendance.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 6,
    title: "Reports & Analytics",
    description:
      "Comprehensive reporting dashboard with real-time insights into practice performance, revenue, and patient trends.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 7,
    title: "Two-Way Communication",
    description:
      "Secure messaging platform for seamless communication between patients and providers, enhancing care coordination.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
  {
    id: 8,
    title: "Treatment Finder",
    description:
      "Smart search tool to help patients find the right treatment options based on their symptoms and dental history.",
    image: "/features/6640b494f17a7589685c35013445c60915af6900.png",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const panelsContainerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only apply GSAP animations on desktop after mount
    if (!mounted || isMobile || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
      if (panels.length === 0) return;

      // Prepare panels stacked (start slightly below and hidden)
      gsap.set(panels, { position: "absolute", inset: 0, opacity: 0, y: 850 });
      gsap.set(panels[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({ paused: true });
      for (let i = 0; i < panels.length - 1; i += 1) {
        tl
          // current panel moves up out of view
          .to(panels[i], {
            y: -950,
            duration: 1.2,
            ease: "power3.inOut",
          })
          // next panel comes from below
          .fromTo(
            panels[i + 1],
            { opacity: 1, y: 950 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut" },
            "<"
          );
      }

      const st = ScrollTrigger.create({
        // Start pinning when the animation container (right side) hits the viewport top
        trigger: panelsContainerRef.current || sectionRef.current!,
        start: "top top",
        end: "+=" + panels.length * 900,
        scrub: 0.8,
        pin: sectionRef.current!,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          tl.progress(self.progress);
          const idx = Math.round(self.progress * (features.length - 1));
          setActiveFeature(features[Math.min(idx, features.length - 1)]);
        },
      });

      // store in refs to allow programmatic control from click handler
      tlRef.current = tl;
      stRef.current = st;

      // Refresh after mount/load to ensure correct measurements
      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 0);
      window.addEventListener("load", () => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      });

      return () => {
        tl.kill();
        st.kill();
        tlRef.current = null;
        stRef.current = null;
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted, isMobile]);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0052CC] via-[#003D99] to-[#002966]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="mb-20">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-white to-transparent"></div>
            <span className="text-white/90 text-[14px] font-medium uppercase tracking-[0.12em]">
              FEATURES
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-white text-[48px] lg:text-[72px] font-light leading-[1.1] tracking-[-0.03em] max-w-[800px]"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "68px",
              lineHeight: "1.147em",
              letterSpacing: "-0.03em",
            }}
          >
            What features bixana offers
          </h2>
        </div>

        {/* Main Content Grid */}
        {isMobile ? (
          /* Mobile: Scrollable content showing all features */
          <div className="space-y-12">
            {features.map((feature) => (
              <div key={feature.id} className="w-full">
                <div className="relative bg-gradient-to-br from-[#094EB4] to-[#0A3F8F] rounded-[24px] p-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4DCFF]/30 via-[#01327B]/30 to-[#01327B]/30 rounded-[24px]"></div>
                  <div className="relative bg-[#094EB4] rounded-[22px] p-8 shadow-2xl">
                    {/* Heading */}
                    <h3 className="text-white text-[28px] font-light leading-[1.15] tracking-[-0.02em] mb-4">
                      {feature.title}
                    </h3>

                    {/* Content moved above image */}
                    <p className="text-white/90 text-[18px] font-normal leading-[1.6] tracking-[-0.01em] mb-6">
                      {feature.description}
                    </p>

                    {/* Image - mobile landscape crop */}
                    <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-white/10">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center py-4">
                      <button className="group relative px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 bg-white text-[#0052CC] rounded-full font-medium text-sm sm:text-base lg:text-[16px] uppercase tracking-[0.08em] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/95">
                        <span className="relative z-10">View Details</span>
                        <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: Original layout with animations */
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Features List */}
            <div className="lg:w-[280px] self-center">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      setActiveFeature(feature);
                      // Scroll the page so ScrollTrigger drives the timeline to this feature
                      const st = stRef.current;
                      if (st) {
                        const total = Math.max(features.length - 1, 1);
                        const targetProgress = total === 0 ? 0 : index / total;
                        const start = st.start as number;
                        const end = st.end as number;
                        const targetScroll =
                          start + targetProgress * (end - start);
                        try {
                          window.scrollTo({
                            top: targetScroll,
                            behavior: "smooth",
                          });
                        } catch {
                          window.scrollTo(0, targetScroll);
                        }
                      }
                    }}
                    className={`block text-left w-full transition-all duration-300 hover:translate-x-2 ${
                      activeFeature.id === feature.id
                        ? "text-white"
                        : "text-[#6BA7FF] hover:text-white/80"
                    }`}
                  >
                    <span
                      className={`${
                        activeFeature.id === feature.id
                          ? "text-[24px] font-light"
                          : "text-[16px] font-normal"
                      } leading-[1.5] tracking-[-0.02em] transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis`}
                      title={feature.title}
                    >
                      {feature.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Panels stacked and transitioned by scroll (image + text + CTA together) */}
            <div className="flex-1">
              <div
                ref={panelsContainerRef}
                className="relative w-full h-[820px] lg:h-[900px] overflow-hidden"
              >
                {features.map((f, i) => (
                  <div
                    key={f.id}
                    ref={(el) => {
                      panelsRef.current[i] = el;
                    }}
                    className="absolute inset-0 flex flex-col"
                  >
                    {/* Text moved above image */}
                    <div className="space-y-12  my-12">
                      <div className="grid lg:grid-cols-2 gap-4 lg:gap-20">
                        <div>
                          <h3 className="text-white text-[28px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em]">
                            {f.title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-white/90 text-[18px] lg:text-[20px] font-normal leading-[1.6] tracking-[-0.01em]">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div>
                      <div className="relative bg-gradient-to-br from-[#094EB4] to-[#0A3F8F] rounded-[32px] p-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C4DCFF]/30 via-[#01327B]/30 to-[#01327B]/30 rounded-[32px]"></div>
                        <div className="relative bg-[#094EB4] rounded-[30px] p-8 lg:p-8 shadow-2xl">
                          <div className="relative w-full h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden border border-white/10">
                            <Image
                              src={f.image}
                              alt={f.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA below image */}
                    <div className="flex justify-center mt-12">
                      <button className="group relative px-10 py-4 bg-white text-[#0052CC] rounded-full font-medium text-[16px] uppercase tracking-[0.08em] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/95">
                        <span className="relative z-10">View Details</span>
                        <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}
