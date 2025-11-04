"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCardStack, { AboutCardData } from "./AboutCardStack";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Detect mobile viewport (below lg)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};

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

// Dedicated mobile card template (no absolute/pinning styles)
const MobileAboutCard = ({ card }: { card: AboutCard }) => {
  return (
    <div className={`${card.bgColor} rounded-[20px] p-6 w-full shadow-md`}>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className={`text-2xl font-light ${card.textColor} leading-tight`}>
            {card.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              card.textColor === "text-white" ? "text-white" : "text-gray-600"
            }`}
          >
            {card.description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {card.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`${card.iconColor} flex-shrink-0`}>
                {feature.icon}
              </div>
              <span className={`text-sm font-normal ${card.textColor}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-[220px] rounded-[16px] overflow-hidden">
          <img
            src={card.imageUrl || "/dental-png.jpg"}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const aboutCards: AboutCardData[] = [
  {
    title: "Smart Patient Appointment Management",
    description:
      "Simplify scheduling with smart tools that keep your appointments organized and patients on time. Streamline bookings, reminders, and confirmations — all in one intelligent scheduling system. Effortless scheduling made smarter, keeping your dental practice efficient and patient-friendly. Automate appointments and reduce no-shows with intelligent, real-time scheduling. A smarter way to manage patient bookings — simple, fast, and always on schedule.",
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
        title: "Instant Messaging",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        ),
        title: "Remainder & Confirmation",
      },
    ],
    bgColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "text-blue-600",
  },
  {
    title: "In Patient Appointment",
    description:
      "Seamless chairside coordination manages in-clinic visits effortlessly — Enhanced patient experience delivers a comfortable, efficient in-clinic journey that leaves every patient feeling cared for and valued.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        ),
        title: "Digital Consents",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
          </svg>
        ),
        title: "Treatment & Payment Plans",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
          </svg>
        ),
        title: "Recent Activity",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
          </svg>
        ),
        title: "Patient Statistics",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        ),
        title: "Email Templates",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        ),
        title: "Communication Log",
      },
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "Post Treatment",
    description:
      "Deliver seamless post-treatment support that keeps patients informed, engaged, and cared for. Manage follow-up care, track recovery progress, and maintain continuous communication with patients after their treatment. Ensure timely check-ins, automated reminders for post-treatment appointments, and personalized care instructions that enhance patient outcomes and satisfaction.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        ),
        title: "Patient review Request",
      },
    ],
    bgColor: "bg-gray-900",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "For Clinic",
    description:
      "Transform your clinic into a smarter, more connected practice built for modern dentistry. Empower your team with powerful analytics and reporting tools, comprehensive user account management, and seamless practice administration. Streamline clinic operations with customizable templates, intelligent task management, and flexible scheduling capabilities that adapt to your practice's unique needs.",
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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Top line with checkmark on left */}
            <path
              d="M3 7l2 2 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="9" y1="7" x2="21" y2="7" strokeLinecap="round" />
            {/* Middle line with checkmark on left */}
            <path
              d="M3 12l2 2 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="9" y1="12" x2="21" y2="12" strokeLinecap="round" />
            {/* Bottom line with dot on left */}
            <circle cx="4" cy="17" r="1.5" fill="currentColor" />
            <line x1="8" y1="17" x2="21" y2="17" strokeLinecap="round" />
          </svg>
        ),
        title: "Create Task for Clinic",
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
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable GSAP animations on mobile
    if (isMobile) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      return;
    }
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
        start: "top -45%", // Pin when About's top reaches 30% of viewport
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
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 sm:px-6 lg:px-8"
      data-about-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center ">
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
              fontFamily: "Inter Tight",
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

        {isMobile ? (
          // Mobile: use dedicated component to avoid GSAP/position issues
          <div className="mt-6 space-y-4 pb-10">
            {aboutCards.map((card, index) => (
              <MobileAboutCard key={index} card={card} />
            ))}
          </div>
        ) : (
          <AboutCardStack cards={aboutCards} />
        )}
      </div>
    </section>
  );
}
