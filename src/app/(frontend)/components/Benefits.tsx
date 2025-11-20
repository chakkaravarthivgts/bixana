"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reusable BenefitCard component
interface BenefitCardProps {
  ref: React.RefObject<HTMLDivElement | null>;
  title: string;
  icon: string | React.ReactNode;
  style: React.CSSProperties;
  dataGsap: string;
  className?: string;
  tooltip?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  ref,
  title,
  icon,
  style,
  dataGsap,
  className,
  tooltip,
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
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      ) : (
        icon
      )}
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
      dangerouslySetInnerHTML={{ __html: title }}
    />

    {/* Tooltip */}
    {tooltip && (
      <div
        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 w-[280px] xl:w-[320px] bg-[#0A0F29] text-white text-xs xl:text-sm rounded-lg p-3 xl:p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] pointer-events-none shadow-lg"
        style={{
          fontFamily: "Inter Tight",
          fontWeight: 300,
          lineHeight: "1.5",
          position: "absolute",
        }}
      >
        <div className="relative">
          {tooltip}
          {/* Tooltip arrow pointing left */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#0A0F29]"></div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const benefits = [
  {
    id: 1,
    title: "Boost Profitability <br /> and Compliance",
    tooltip:
      "Automate the whole appointment cycle from the moment the patient schedules an appointment and receives forms, through a smart check-in and automated consent and treatment presentation to post-op follow-up and collecting payments.",
    icon: "/homepagesvg/streamline-ultimate_money-bag-dollar-bold.svg",
  },
  {
    id: 2,
    title: "Attracting new dental <br /> patients",
    tooltip:
      "Boost your online presence and grow your practice with marketing campaigns, online scheduling, easy to use web chat, top-tier reputation management system and smart referrals.",
    icon: "/homepagesvg/Vector.svg",
  },
  {
    id: 3,
    title: "Feature Updates <br /> Available",
    tooltip:
      "We are doing continuous process improvement and will be releasing new and enhance the feature often and the same will automatically be available for users.",
    icon: "/homepagesvg/ion_refresh-circle-sharp.svg",
  },
  {
    id: 4,
    title: "Retaining Dental <br /> Patients",
    tooltip:
      "Boost your online presence and grow your practice with marketing campaigns, online scheduling, easy to use web chat, top-tier reputation management system and smart referrals.",
    icon: "/homepagesvg/healthicons_tooth.svg",
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

export default function Benefits() {
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
        { ref: card1Ref, id: "benefit-1" },
        { ref: card2Ref, id: "benefit-2" },
        { ref: card3Ref, id: "benefit-3" },
        { ref: card4Ref, id: "benefit-4" },
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
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100 overflow-hidden"
    >
      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-7xl">
          {isMobile ? (
            /* Mobile Layout */
            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                  <span className="text-black text-sm font-light uppercase tracking-wide">
                    Benefits
                  </span>
                </div>

                <h2
                  className="text-[32px] font-light text-[#000000] leading-[1.1] mb-6"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  What{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                    }}
                  >
                    you will get
                  </span>
                  <br />
                  those are the need
                  <br />
                  for you
                </h2>

                <p className="text-[14px] text-[#6B7280] leading-[1.6] font-normal max-w-2xl mx-auto mb-8">
                  From booking the first appointment to managing post-treatment
                  feedback — our all-in-one dental software streamlines your
                  workflow, boosts patient satisfaction, and keeps your clinic
                  running smoothly.
                </p>

                {/* Mobile Image */}
                <div className="relative w-full h-[250px] rounded-[16px] overflow-hidden mb-8">
                  <Image
                    src="/dental-png.jpg"
                    alt="Dental professionals using tablet"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Mobile Benefits Cards */}
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit) => (
                  <div
                    key={benefit.id}
                    className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center flex-shrink-0">
                        {typeof benefit.icon === "string" ? (
                          <Image
                            src={benefit.icon}
                            alt={benefit.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        ) : (
                          benefit.icon
                        )}
                      </div>
                      <h3
                        className="text-[16px] font-light text-[#000000] leading-[1.4]"
                        dangerouslySetInnerHTML={{ __html: benefit.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Layout */
            <>
              {/* Header Section */}
              <div className="flex flex-col items-center justify-between lg:flex-row gap-8 lg:gap-12 mb-16 lg:mb-20">
                {/* Left Content */}
                <div className="flex-1 max-w-[500px] flex items-center justify-center flex-col">
                  <div>
                    <div className="flex items-center justify-start gap-2 mb-10">
                      <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                      <span className="text-black text-base font-light uppercase tracking-wide">
                        Benefits
                      </span>
                    </div>

                    <h2 className="text-[48px] lg:text-[56px] font-light text-[#000000] leading-[1.1] mb-6">
                      What{" "}
                      <span
                        className="text-transparent bg-clip-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                        }}
                      >
                        you will get
                      </span>
                      <br />
                      those are the need
                      <br />
                      for you
                    </h2>

                    <p className="text-[16px] text-[#6B7280] leading-[1.6] font-normal">
                      From booking the first appointment to managing
                      post-treatment feedback — our all-in-one dental software
                      streamlines your workflow, boosts patient satisfaction,
                      and keeps your clinic running smoothly.
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 max-w-[700px] w-full h-full">
                  <div className="relative w-full h-[500px] rounded-[16px] overflow-hidden">
                    <Image
                      src="/dental-png.jpg"
                      alt="Dental professionals using tablet"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 700px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Desktop Benefits Grid - Only show on desktop */}
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
                tooltip={benefits[0].tooltip}
                icon={benefits[0].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-1"
              />

              {/* Card 2 - Attracting patients */}
              <BenefitCard
                ref={card2Ref}
                title={benefits[1].title}
                tooltip={benefits[1].tooltip}
                icon={benefits[1].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-2"
              />

              {/* Card 3 - Feature Updates */}
              <BenefitCard
                ref={card3Ref}
                title={benefits[2].title}
                tooltip={benefits[2].tooltip}
                icon={benefits[2].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-3"
              />

              {/* Card 4 - Retaining Patients */}
              <BenefitCard
                ref={card4Ref}
                title={benefits[3].title}
                tooltip={benefits[3].tooltip}
                icon={benefits[3].icon}
                style={{
                  height: "330px",
                  width: "100%",
                }}
                className="xl:h-[264px]"
                dataGsap="benefit-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
