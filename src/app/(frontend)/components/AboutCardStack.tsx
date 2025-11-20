"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Feature = { icon: React.ReactNode; title: string };
export type AboutCardData = {
  title: string;
  description: string;
  features: Feature[];
  bgColor: string;
  textColor: string;
  iconColor: string;
  imageUrl?: string;
};

export default function AboutCardStack({ cards }: { cards: AboutCardData[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!sectionRef.current) return;

    const init = () => {
      const tl = gsap.timeline({ paused: true });

      // Set initial state
      gsap.set(cardRefs.current, { y: "150%", opacity: 1 });
      if (cardRefs.current[0])
        gsap.set(cardRefs.current[0], { y: 0, opacity: 1 });

      for (let i = 1; i < cards.length; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        tl.to(
          card,
          { y: `${i * 16}%`, duration: 0.8, ease: "power2.out" },
          (i - 1) * 0.8
        );
      }

      timelineRef.current = tl;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // exact pin for all screens
        end: "+=1400",
        scrub: 1,
        pin: sectionRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          tl.progress(self.progress);
        },
      });

      return () => {
        timelineRef.current?.kill();
        st.kill();
      };
    };

    const cleanup = init();
    // refresh after mount for accurate measurements
    setTimeout(() => ScrollTrigger.refresh(), 0);
    return cleanup;
  }, [cards.length, mounted]);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="relative">
      <div className="card-container relative h-[804px] w-full flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`${card.bgColor} rounded-[50px] p-8 sm:p-12 absolute w-full max-w-7xl`}
            style={{
              zIndex: 10 + index,
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
                    className={`text-base sm:text-lg leading-relaxed ${
                      card.textColor === "text-white"
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
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
                  src={card.imageUrl || "/dental-png.jpg"}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
