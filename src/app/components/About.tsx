"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
}

interface AboutCard {
  title: string;
  description: string;
  features: Feature[];
  bgColor: string;
  textColor: string;
  iconColor: string;
  imageUrl?: string;
}

const aboutCards: AboutCard[] = [
  {
    title: "Patient Appointment",
    description:
      "From booking the first appointment to managing post-treatment feedback — our all-in-one dental software streamlines your workflow, boosts patient satisfaction, and keeps your clinic running smoothly.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Schedule Appointment",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        ),
        title: "Instant messaging",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        ),
        title: "Reminders & Confirmation",
      },
    ],
    bgColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "text-blue-600",
  },
  {
    title: "In Patient Appointment",
    description:
      "From booking the first appointment to managing post-treatment feedback — our all-in-one dental software streamlines your workflow, boosts patient satisfaction, and keeps your clinic running smoothly.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Eligibility Benefit Summary",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Digital Consents",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        ),
        title: "Instant messaging",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        ),
        title: "Reminders & Confirmation",
      },
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "Post Treatment",
    description:
      "From booking the first appointment to managing post-treatment feedback — our all-in-one dental software streamlines your workflow, boosts patient satisfaction, and keeps your clinic running smoothly.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Eligibility Benefit Summary",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Digital Consents",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        ),
        title: "Instant messaging",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        ),
        title: "Reminders & Confirmation",
      },
    ],
    bgColor: "bg-gray-900",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "For Clinic",
    description:
      "From booking the first appointment to managing post-treatment feedback — our all-in-one dental software streamlines your workflow, boosts patient satisfaction, and keeps your clinic running smoothly.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
          </svg>
        ),
        title: "Analytics & Reports",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ),
        title: "Manage User Accounts",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H5v-2h9v2zm0-3H5v-2h9v2zm0-3H5V9h9v2zm0-3H5V6h9v2z" />
          </svg>
        ),
        title: "Manage Practices",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z" />
          </svg>
        ),
        title: "Create task for clinic",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Appointment Reschedule & Un-schedule",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        ),
        title: "Customize Text & Email Templates",
      },
    ],
    bgColor: "bg-white border border-gray-300",
    textColor: "text-black",
    iconColor: "text-blue-600",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Wait for refs to be populated
    const checkRefs = () => {
      const validRefs = cardRefs.current.filter((ref) => ref !== null);
      if (validRefs.length === 0) {
        setTimeout(checkRefs, 100);
        return;
      }

      initializeAnimation();
    };

    const initializeAnimation = () => {
      // Create GSAP timeline for card stacking animation
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          console.log("Card stacking animation completed");
        },
        onReverseComplete: () => {
          console.log("Card stacking animation reversed");
        },
      });

      // Set initial state: first card visible by default, others hidden below
      gsap.set(cardRefs.current, {
        y: "150%",
        opacity: 1,
      });
      const firstCard = cardRefs.current[0];
      if (firstCard) {
        gsap.set(firstCard, { y: 0, opacity: 1 });
      }

      // Create sequential animation for cards 2..N (stack on top of the first)
      for (let index = 1; index < aboutCards.length; index++) {
        const card = cardRefs.current[index];
        if (!card) continue;
        tl.to(
          card,
          {
            y: `${index * 82}px`, // Stack with 82px offset for better spacing
            duration: 0.8,
            ease: "power2.out",
          },
          (index - 1) * 0.8 // start after previous card settles
        );
      }

      // Store timeline reference
      timelineRef.current = tl;

      // Create ScrollTrigger for the card container with proper pinning
      const cardContainer =
        sectionRef.current?.querySelector(".card-container");

      if (!cardContainer) {
        console.error("Card container not found!");
        return;
      }

      console.log(
        "Initializing GSAP animation with",
        cardRefs.current.length,
        "cards"
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current, // Pin the whole About section
        start: "top -40%", // Pin when About's top reaches 30% of viewport
        end: "+=1400", // Scroll distance while About is pinned
        scrub: 1, // Smooth scrubbing for reversible animation
        pin: sectionRef.current, // Pin the section so other sections don't move
        pinSpacing: true, // Keep layout stable while pinned
        anticipatePin: 1, // Smooth pinning
        onUpdate: (self) => {
          // Progress from 0 to 1 as user scrolls through the card section
          const progress = self.progress;
          tl.progress(progress);
        },
        onEnter: () => {
          // First card is already visible; start scrubbed animation
          console.log("Card section entered - animation starts");
        },
        onLeave: () => {
          console.log("Card section left - animation complete");
        },
        onEnterBack: () => {
          console.log(
            "Card section entered back (scrolling up) - animation reverses"
          );
        },
        onLeaveBack: () => {
          console.log(
            "Card section left back (scrolling up) - animation resets"
          );
        },
      });

      // Cleanup function
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        if (scrollTrigger) {
          scrollTrigger.kill();
        }
      };
    };

    // Start checking for refs
    checkRefs();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-4 pb-64 px-4 sm:px-6 lg:px-8"
      data-about-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
            <span className="text-black text-base font-light uppercase tracking-wide">
              about
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight mb-10 max-w-5xl mx-auto"
            style={{
              letterSpacing: "-3%",
              lineHeight: "1.3",
              fontWeight: 300,
              fontFamily: "Helvetica Neue",
            }}
          >
            Comprehensive{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
              }}
            >
              Tools for Every Aspect
            </span>
            <br />
            of Your Dental Practice
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            From booking the first appointment to managing post-treatment
            feedback — our all-in-one dental software streamlines your workflow,
            boosts patient satisfaction, and keeps your clinic running smoothly.
          </p>
        </div>

        <div className="card-container relative h-[804px] width-full flex items-center justify-center">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`${card.bgColor} rounded-[50px] p-8 sm:p-12 absolute w-full max-w-7xl shadow-lg`}
              style={{
                zIndex: 10 + index,
                boxShadow: `0 ${index * 4 + 10}px ${index * 8 + 20}px rgba(0, 0, 0, 0.15)`,
                // height: "85%",
              }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="flex-1 space-y-8">
                  <div className="space-y-5">
                    <h3
                      className={`text-3xl sm:text-4xl font-light ${card.textColor} leading-tight`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-base sm:text-lg leading-relaxed ${card.textColor === "text-white" ? "text-white" : "text-gray-600"}`}
                    >
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className={`${card.iconColor} flex-shrink-0`}>
                          {feature.icon}
                        </div>
                        <span
                          className={`text-sm sm:text-base font-normal ${card.textColor}`}
                        >
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-[586px] h-[400px] sm:h-[500px] rounded-[50px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/dental-png.jpg"
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
