"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
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

// Reusable BenefitCard component
interface BenefitCardProps {
  ref: React.RefObject<HTMLDivElement | null>;
  title: string;
  icon: React.ReactNode;
  style: React.CSSProperties;
  dataGsap: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  ref,
  title,
  icon,
  style,
  dataGsap,
  className,
}) => (
  <div
    ref={ref}
    className={`benefit-card flex flex-col gap-8 xl:gap-6 bg-[#F8F9FA] rounded-[40px] p-4 xl:p-3 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-visible z-10 hover:z-[100] ${className || ""}`}
    style={style}
    data-gsap={dataGsap}
  >
    {/* Growing white divs (two halves filling from center) */}
    <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
    <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>

    <div className="benefit-icon w-[78px] h-[78px] xl:w-[62px] xl:h-[62px] rounded-full flex items-center justify-center relative z-10">
      {icon}
    </div>

    <h3
      className="benefit-text relative z-10 text-[28px] xl:text-[22px]"
      style={{
        fontFamily: "Inter Tight",
        fontWeight: 300,
        lineHeight: "1.5",
        letterSpacing: "-0.04em",
        color: "#000",
        margin: 0,
      }}
    >
      {title}
    </h3>
  </div>
);

const benefits = [
  {
    id: 1,
    title: "Boost Profitability and Compliance",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#0066FF" />
        <path
          d="M24 14V34M19 19H29M19 24H29M19 29H29"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="24"
          cy="24"
          r="10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Attracting new dental patients",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#0066FF" />
        <path
          d="M20 20C20 17.7909 21.7909 16 24 16C26.2091 16 28 17.7909 28 20C28 22.2091 26.2091 24 24 24C21.7909 24 20 22.2091 20 20Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Feature Updates Available",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#0066FF" />
        <path
          d="M24 16V28M24 28L20 24M24 28L28 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 30V31C32 31.5523 31.5523 32 31 32H17C16.4477 32 16 31.5523 16 31V30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Retaining Dental Patients",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#0066FF" />
        <path
          d="M24 14C20.1298 14 17 17.1298 17 21C17 24.8702 24 32 24 32C24 32 31 24.8702 31 21C31 17.1298 27.8702 14 24 14Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="21" r="2" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
];

// Animation helper function
const createCardAnimation = (
  cardRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!cardRef.current) return;

  const iconElement = cardRef.current.querySelector(".benefit-icon");
  const textElement = cardRef.current.querySelector(".benefit-text");
  const whiteDiv1 = cardRef.current.querySelector(".benefit-white-div-1");
  const whiteDiv2 = cardRef.current.querySelector(".benefit-white-div-2");

  // Set initial state
  gsap.set([iconElement, textElement], { opacity: 0 });

  if (whiteDiv1 && whiteDiv2) {
    gsap.set([whiteDiv1, whiteDiv2], {
      scaleY: 0,
      transformOrigin: "center center",
    });
  } else {
    gsap.set(whiteDiv1, { scale: 0, transformOrigin: "center" });
  }

  gsap.set(cardRef.current, { borderColor: "transparent" });

  return ScrollTrigger.create({
    trigger: cardRef.current,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
      const tl = gsap.timeline();

      if (whiteDiv1 && whiteDiv2) {
        tl.to(whiteDiv2, { scaleY: 1, duration: 0.45, ease: "power2.out" }).to(
          whiteDiv1,
          { scaleY: 1, duration: 0.45, ease: "power2.out" }
        );
      } else {
        tl.to(whiteDiv1, { scale: 1, duration: 0.45, ease: "power2.out" });
      }

      tl.to(
        cardRef.current,
        { borderColor: "#C1C1C1", duration: 0.3, ease: "power2.out" },
        "<"
      ).to([iconElement, textElement], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      const tl = gsap.timeline();
      tl.to([iconElement, textElement], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .to(
          cardRef.current,
          { borderColor: "transparent", duration: 0.3, ease: "power2.in" },
          "<"
        )
        .to(
          whiteDiv2 && whiteDiv1 ? [whiteDiv2, whiteDiv1] : whiteDiv1,
          {
            duration: 0.45,
            ease: "power2.in",
            scaleY: whiteDiv2 ? 0 : undefined,
            scale: whiteDiv2 ? undefined : 0,
            stagger: whiteDiv2 ? 0.05 : 0,
          },
          "-=0.1"
        );
    },
    onEnterBack: () => {
      const tl = gsap.timeline();
      if (whiteDiv1 && whiteDiv2) {
        tl.to(whiteDiv2, { scaleY: 1, duration: 0.45, ease: "power2.out" }).to(
          whiteDiv1,
          { scaleY: 1, duration: 0.45, ease: "power2.out" }
        );
      } else {
        tl.to(whiteDiv1, { scale: 1, duration: 0.45, ease: "power2.out" });
      }
      tl.to(
        cardRef.current,
        { borderColor: "#C1C1C1", duration: 0.3, ease: "power2.out" },
        "<"
      ).to(
        [iconElement, textElement],
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.15"
      );
    },
    onLeaveBack: () => {
      const tl = gsap.timeline();
      tl.to([iconElement, textElement], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .to(
          cardRef.current,
          { borderColor: "transparent", duration: 0.3, ease: "power2.in" },
          "<"
        )
        .to(
          whiteDiv2 && whiteDiv1 ? [whiteDiv2, whiteDiv1] : whiteDiv1,
          {
            duration: 0.45,
            ease: "power2.in",
            scaleY: whiteDiv2 ? 0 : undefined,
            scale: whiteDiv2 ? undefined : 0,
            stagger: whiteDiv2 ? 0.05 : 0,
          },
          "-=0.1"
        );
    },
  });
};

export default function BenefitsSimple() {
  // Refs for each benefit card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Only apply GSAP animations on desktop after mount
    if (!mounted || isMobile) return;

    const ctx = gsap.context(() => {
      // Create animations for all cards
      const cards = [
        { ref: card1Ref, id: "benefit-simple-1" },
        { ref: card2Ref, id: "benefit-simple-2" },
        { ref: card3Ref, id: "benefit-simple-3" },
        { ref: card4Ref, id: "benefit-simple-4" },
      ];

      cards.forEach((card) => {
        createCardAnimation(card.ref);
      });

      // Refresh after mount to ensure correct measurements
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
    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Desktop Benefits Grid - 4 cards in a row */}
          {!isMobile && (
            <div
              className="grid gap-6 max-w-[1400px] mx-auto px-5 overflow-visible"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {/* Card 1 - Boost Profitability */}
              <BenefitCard
                ref={card1Ref}
                title={benefits[0].title}
                icon={benefits[0].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-simple-1"
              />

              {/* Card 2 - Attracting patients */}
              <BenefitCard
                ref={card2Ref}
                title={benefits[1].title}
                icon={benefits[1].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-simple-2"
              />

              {/* Card 3 - Feature Updates */}
              <BenefitCard
                ref={card3Ref}
                title={benefits[2].title}
                icon={benefits[2].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-simple-3"
              />

              {/* Card 4 - Retaining Patients */}
              <BenefitCard
                ref={card4Ref}
                title={benefits[3].title}
                icon={benefits[3].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-simple-4"
              />
            </div>
          )}

          {/* Mobile Layout */}
          {isMobile && (
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-[#F8F9FA] border border-[#C1C1C1] rounded-[40px] p-6 w-full"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-[78px] h-[78px] rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3
                      className="text-[22px] font-light text-[#000000] leading-[1.5] text-center"
                      style={{
                        fontFamily: "Inter Tight",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
