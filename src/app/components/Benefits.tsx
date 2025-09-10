"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

export default function Benefits() {
  // Refs for each benefit card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state - only content elements start with opacity 0
    const cards = [
      { ref: card1Ref, id: "benefit-1" },
      { ref: card2Ref, id: "benefit-2" },
      { ref: card3Ref, id: "benefit-3" },
      { ref: card4Ref, id: "benefit-4" },
      { ref: card5Ref, id: "benefit-5" },
      { ref: card6Ref, id: "benefit-6" },
    ];

    cards.forEach((card) => {
      if (card.ref.current) {
        // Find elements inside each card
        const iconElement = card.ref.current.querySelector(".benefit-icon");
        const textElement = card.ref.current.querySelector(".benefit-text");
        const whiteDiv1 = card.ref.current.querySelector(
          ".benefit-white-div-1"
        );
        const whiteDiv2 = card.ref.current.querySelector(
          ".benefit-white-div-2"
        );

        // Set initial state
        gsap.set([iconElement, textElement], {
          opacity: 0,
        });
        // If both halves exist, prepare vertical growth from center (scaleY)
        if (whiteDiv1 && whiteDiv2) {
          gsap.set([whiteDiv1, whiteDiv2], {
            scaleY: 0,
            transformOrigin: "center center",
          });
        } else {
          gsap.set(whiteDiv1, { scale: 0, transformOrigin: "center" });
        }
        // Hide border initially so it appears with white div
        gsap.set(card.ref.current, { borderColor: "transparent" });

        ScrollTrigger.create({
          trigger: card.ref.current,
          start: "top 80%", // When card hits 30% of viewport (100% - 30% = 70%)
          end: "bottom 20%",
          onEnter: () => {
            // Create timeline for sequential animation
            const tl = gsap.timeline();

            // Grow white background vertically from center: left half then right half
            if (whiteDiv1 && whiteDiv2) {
              // Left half (whiteDiv2) first, then right half (whiteDiv1)
              tl.to(whiteDiv2, {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.out",
              }).to(whiteDiv1, {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.out",
              });
            } else {
              tl.to(whiteDiv1, {
                scale: 1,
                duration: 0.45,
                ease: "power2.out",
              });
            }

            // Border appears in sync
            tl.to(
              card.ref.current,
              {
                borderColor: "#C1C1C1",
                duration: 0.3,
                ease: "power2.out",
              },
              "<"
            )
              // Then: Show the content after both white divs
              .to([iconElement, textElement], {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              });
          },
          onLeave: () => {
            // Hide both content and white divs when leaving viewport
            const tl = gsap.timeline();
            tl.to([iconElement, textElement], {
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            })
              // Border hides with white divs
              .to(
                card.ref.current,
                {
                  borderColor: "transparent",
                  duration: 0.3,
                  ease: "power2.in",
                },
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
            // Replay sequence when re-entering from above
            const tl = gsap.timeline();
            if (whiteDiv1 && whiteDiv2) {
              // Left half (whiteDiv2) first, then right half (whiteDiv1)
              tl.to(whiteDiv2, {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.out",
              }).to(whiteDiv1, {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.out",
              });
            } else {
              tl.to(whiteDiv1, {
                scale: 1,
                duration: 0.45,
                ease: "power2.out",
              });
            }
            // Border appears again
            tl.to(
              card.ref.current,
              {
                borderColor: "#C1C1C1",
                duration: 0.3,
                ease: "power2.out",
              },
              "<"
            ).to(
              [iconElement, textElement],
              {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.15"
            );
          },
          onLeaveBack: () => {
            // Hide both content and white divs when leaving upward
            const tl = gsap.timeline();
            tl.to([iconElement, textElement], {
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            })
              // Border hides with white divs
              .to(
                card.ref.current,
                {
                  borderColor: "transparent",
                  duration: 0.3,
                  ease: "power2.in",
                },
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
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] overflow-hidden">
      <div className="relative  mx-[100px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between lg:flex-row  gap-8 lg:gap-12 mb-[200px]">
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
                From booking the first appointment to managing post-treatment
                feedback — our all-in-one dental software streamlines your
                workflow, boosts patient satisfaction, and keeps your clinic
                running smoothly.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-[700px] w-full h-full">
            <div className="relative w-full h-full lg:h-[80%w] rounded-[24px] overflow-hidden">
              <img
                src="/dental-png.jpg"
                alt="Dental professionals using tablet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid - Exact Figma Layout */}
        <div
          className="grid gap-6 max-w-[1400px] mx-auto px-5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {/* Card 1 - Boost Profitability (spans 2 rows) */}
          <div
            ref={card1Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              // gridRow: "span",
              height: "343px",
              width: "380px",
            }}
            data-gsap="benefit-1"
          >
            {/* Growing white divs (two halves filling from center) */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_57_372)">
                  <path
                    d="M29.75 26.0002H49.25C50.112 26.0002 50.9386 25.6578 51.5481 25.0483C52.1576 24.4388 52.5 23.6121 52.5 22.7502C52.5 21.8882 52.1576 21.0616 51.5481 20.4521C50.9386 19.8426 50.112 19.5002 49.25 19.5002H29.75C28.8881 19.5002 28.0614 19.8426 27.4519 20.4521C26.8424 21.0616 26.5 21.8882 26.5 22.7502C26.5 23.6121 26.8424 24.4388 27.4519 25.0483C28.0614 25.6578 28.8881 26.0002 29.75 26.0002ZM31.2775 14.6252C31.3254 15.0215 31.5176 15.3864 31.8173 15.6501C32.117 15.9139 32.5033 16.058 32.9025 16.0552H46C46.3973 16.0511 46.7799 15.9045 47.0782 15.6421C47.3764 15.3796 47.5705 15.0187 47.625 14.6252C48.3397 11.1705 49.66 7.86964 51.525 4.87516C51.6972 4.58467 51.7683 4.2453 51.7271 3.91013C51.6859 3.57495 51.5349 3.26287 51.2975 3.02266C51.1015 2.76447 50.8328 2.57079 50.5258 2.46655C50.2188 2.3623 49.8877 2.35224 49.575 2.43766L43.53 5.03766C43.4287 5.0866 43.3176 5.11201 43.205 5.11201C43.0925 5.11201 42.9814 5.0866 42.88 5.03766C42.6784 4.96262 42.5148 4.81068 42.425 4.61516L40.995 1.00766C40.8701 0.714531 40.6619 0.464577 40.396 0.288889C40.1302 0.1132 39.8186 0.0195313 39.5 0.0195312C39.1814 0.0195312 38.8698 0.1132 38.604 0.288889C38.3382 0.464577 38.1299 0.714531 38.005 1.00766L36.575 4.61516C36.4853 4.81068 36.3216 4.96262 36.12 5.03766C36.0187 5.0866 35.9076 5.11201 35.795 5.11201C35.6825 5.11201 35.5714 5.0866 35.47 5.03766L29.425 2.43766C29.115 2.31228 28.7739 2.28558 28.4482 2.36119C28.1225 2.4368 27.8281 2.61105 27.605 2.86016C27.3677 3.10037 27.2166 3.41245 27.1754 3.74763C27.1343 4.0828 27.2053 4.42217 27.3775 4.71266C29.2604 7.75676 30.5813 11.1142 31.2775 14.6252ZM50.68 29.6402C50.3448 29.3826 49.9327 29.2453 49.51 29.2502H29.49C29.0673 29.2453 28.6553 29.3826 28.32 29.6402C20.0325 36.1402 10.77 47.1902 10.77 56.9402C10.77 70.6877 18.44 78.0002 39.5 78.0002C60.56 78.0002 68.23 70.6877 68.23 56.9402C68.23 47.1902 59 35.9777 50.68 29.6402ZM42.75 65.4227C42.5606 65.4598 42.3895 65.5606 42.2653 65.7084C42.1412 65.8563 42.0714 66.0421 42.0675 66.2352V67.4377C42.0675 68.0841 41.8107 68.7041 41.3536 69.1612C40.8965 69.6184 40.2765 69.8752 39.63 69.8752C38.9836 69.8752 38.3636 69.6184 37.9064 69.1612C37.4493 68.7041 37.1925 68.0841 37.1925 67.4377V66.3977C37.1925 66.1822 37.1069 65.9755 36.9545 65.8231C36.8022 65.6708 36.5955 65.5852 36.38 65.5852H34.4625C33.8161 65.5852 33.1961 65.3284 32.7389 64.8712C32.2818 64.4141 32.025 63.7941 32.025 63.1477C32.025 62.5012 32.2818 61.8812 32.7389 61.4241C33.1961 60.967 33.8161 60.7102 34.4625 60.7102H41.45C41.9688 60.728 42.4768 60.56 42.8826 60.2364C43.2884 59.9128 43.5653 59.4549 43.6633 58.9452C43.7613 58.4355 43.674 57.9075 43.4172 57.4565C43.1604 57.0054 42.7509 56.661 42.2625 56.4852L35.1775 53.6577C33.7495 53.1228 32.5346 52.1375 31.7163 50.8508C30.898 49.5641 30.5209 48.0459 30.6421 46.5259C30.7633 45.0059 31.3761 43.5666 32.3878 42.4258C33.3996 41.2849 34.7553 40.5046 36.25 40.2027C36.4395 40.1656 36.6105 40.0647 36.7347 39.9169C36.8589 39.7691 36.9287 39.5832 36.9325 39.3902V38.1877C36.9325 37.5412 37.1893 36.9212 37.6464 36.4641C38.1036 36.007 38.7236 35.7502 39.37 35.7502C40.0165 35.7502 40.6365 36.007 41.0936 36.4641C41.5507 36.9212 41.8075 37.5412 41.8075 38.1877V39.2277C41.8075 39.4431 41.8931 39.6498 42.0455 39.8022C42.1979 39.9546 42.4045 40.0402 42.62 40.0402H44.5375C45.184 40.0402 45.804 40.297 46.2611 40.7541C46.7182 41.2112 46.975 41.8312 46.975 42.4777C46.975 43.1241 46.7182 43.7441 46.2611 44.2012C45.804 44.6584 45.184 44.9152 44.5375 44.9152H37.68C37.1613 44.8973 36.6532 45.0653 36.2474 45.3889C35.8416 45.7125 35.5648 46.1705 35.4667 46.6802C35.3687 47.1899 35.456 47.7178 35.7128 48.1688C35.9697 48.6199 36.3792 48.9644 36.8675 49.1402L43.9525 51.9677C45.38 52.5134 46.5905 53.51 47.4 54.8063C48.2096 56.1025 48.574 57.6276 48.438 59.1498C48.3019 60.672 47.6729 62.1082 46.6463 63.2404C45.6197 64.3725 44.2517 65.1387 42.75 65.4227Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_372">
                    <rect
                      width="78"
                      height="78"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "28px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[0].title}
            </h3>
          </div>

          {/* Card 2 - Attracting patients */}
          <div
            ref={card2Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              height: "422px",
              width: "580px",
              transform: "translateY(50px)",
            }}
            data-gsap="benefit-2"
          >
            {/* Growing white halves filling from center */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="62"
                height="77"
                viewBox="0 0 62 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8438 0.5C15.866 0.5 17.8055 1.30071 19.2354 2.72599C20.6654 4.15126 21.4688 6.08435 21.4688 8.1C21.4688 10.1156 20.6654 12.0487 19.2354 13.474C17.8055 14.8993 15.866 15.7 13.8438 15.7C11.8215 15.7 9.88203 14.8993 8.45206 13.474C7.0221 12.0487 6.21875 10.1156 6.21875 8.1C6.21875 6.08435 7.0221 4.15126 8.45206 2.72599C9.88203 1.30071 11.8215 0.5 13.8438 0.5ZM8.125 19.5H19.5625C21.5848 19.5 23.5242 20.3007 24.9542 21.726C26.3842 23.1513 27.1875 25.0844 27.1875 27.1V48H21.4688V76.5H6.21875V48H0.5V27.1C0.5 25.0844 1.30335 23.1513 2.73331 21.726C4.16328 20.3007 6.10272 19.5 8.125 19.5ZM48.1562 0.5C50.1785 0.5 52.118 1.30071 53.5479 2.72599C54.9779 4.15126 55.7812 6.08435 55.7812 8.1C55.7812 10.1156 54.9779 12.0487 53.5479 13.474C52.118 14.8993 50.1785 15.7 48.1562 15.7C46.134 15.7 44.1945 14.8993 42.7646 13.474C41.3346 12.0487 40.5312 10.1156 40.5312 8.1C40.5312 6.08435 41.3346 4.15126 42.7646 2.72599C44.1945 1.30071 46.134 0.5 48.1562 0.5ZM42.4375 19.5H53.875C55.8973 19.5 57.8367 20.3007 59.2667 21.726C60.6967 23.1513 61.5 25.0844 61.5 27.1V48H55.7812V76.5H40.5312V48H34.8125V27.1C34.8125 25.0844 35.6158 23.1513 37.0458 21.726C38.4758 20.3007 40.4152 19.5 42.4375 19.5Z"
                  fill="#0052CC"
                />
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "32px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[1].title}
            </h3>
          </div>

          {/* Card 3 - Feature Updates */}
          <div
            ref={card3Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              height: "262px",
              width: "350px",
            }}
            data-gsap="benefit-3"
          >
            {/* Growing white halves filling from center */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="76"
                height="75"
                viewBox="0 0 76 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 7.03125C21.1997 7.03125 7.53125 20.7012 7.53125 37.5C7.53125 54.3252 21.1748 67.9688 38 67.9688C54.8003 67.9688 68.4688 54.3003 68.4688 37.5C68.4688 20.6733 54.8267 7.03125 38 7.03125ZM51.7695 39.1113C51.7695 41.8347 50.962 44.4969 49.4489 46.7613C47.9359 49.0257 45.7854 50.7905 43.2694 51.8327C40.7533 52.8749 37.9847 53.1476 35.3137 52.6163C32.6427 52.085 30.1892 50.7736 28.2635 48.8479C26.3378 46.9222 25.0263 44.4687 24.495 41.7976C23.9637 39.1266 24.2364 36.358 25.2786 33.842C26.3208 31.3259 28.0857 29.1754 30.3501 27.6624C32.6144 26.1494 35.2766 25.3418 38 25.3418H38.6167L35.1011 21.8262L38 18.9258L46.7598 27.6855L38 36.4453L35.0996 33.5449L39.1895 29.4551C38.8379 29.4434 38.4395 29.4434 38 29.4434C36.0879 29.4434 34.2187 30.0104 32.6288 31.0727C31.0389 32.135 29.7997 33.645 29.068 35.4116C28.3362 37.1781 28.1448 39.1221 28.5178 40.9975C28.8908 42.8729 29.8116 44.5955 31.1637 45.9476C32.5158 47.2997 34.2385 48.2205 36.1139 48.5935C37.9893 48.9666 39.9332 48.7751 41.6998 48.0434C43.4664 47.3116 44.9763 46.0725 46.0386 44.4826C47.101 42.8927 47.668 41.0235 47.668 39.1113V37.0605H51.7695V39.1113Z"
                  fill="#0052CC"
                />
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "32px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[2].title}
            </h3>
          </div>

          {/* Card 4 - Retaining Patients */}
          <div
            ref={card4Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              height: "279px",
              transform: "translateY(-70px)",
              width: "279px",
              marginLeft: "auto",
            }}
            data-gsap="benefit-4"
          >
            {/* Growing white halves filling from center */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.5598 15.0817C27.5105 11.1167 21.2673 12.9806 16.0754 19.2823C11.0671 25.3631 14.4829 36.3253 16.9366 44.2066C17.5216 46.0851 18.053 47.7897 18.4024 49.2099C20.2143 56.5874 21.9498 61.1862 25.9034 64.5142C27.8615 66.1619 30.0829 63.3296 32.4261 60.3428C34.4574 57.7526 36.5796 55.0453 38.7035 55.0388C40.7916 55.0323 42.8814 57.7363 44.885 60.3266C47.1974 63.3166 49.3944 66.1603 51.3411 64.5142C54.3636 61.9629 55.7335 60.0909 57.3943 54.8357C59.2029 49.1043 62.1263 42.2501 64.45 34.3493C66.0848 28.7918 66.2798 23.1303 61.5689 17.6687C54.8414 9.86869 45.5188 13.8987 41.1784 16.4776L47.0576 21.5151C47.2198 21.654 47.3531 21.8235 47.4497 22.0139C47.5464 22.2043 47.6046 22.4119 47.6211 22.6248C47.6375 22.8377 47.6119 23.0518 47.5456 23.2548C47.4793 23.4578 47.3737 23.6458 47.2348 23.8079C47.0958 23.9701 46.9263 24.1034 46.7359 24.2C46.5455 24.2967 46.3379 24.3549 46.125 24.3714C45.9121 24.3878 45.698 24.3622 45.495 24.2959C45.292 24.2296 45.1041 24.124 44.9419 23.9851L34.5598 15.0817Z"
                  fill="#0052CC"
                />
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "32px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[3].title}
            </h3>
          </div>

          {/* Card 5 - Empty space for layout balance */}
          <div
            ref={card5Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              height: "270px",
              width: "370px",
              marginLeft: "auto",
              transform: "translateY(50px)",
            }}
            data-gsap="benefit-empty"
          >
            {/* Growing white halves filling from center */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_57_372)">
                  <path
                    d="M29.75 26.0002H49.25C50.112 26.0002 50.9386 25.6578 51.5481 25.0483C52.1576 24.4388 52.5 23.6121 52.5 22.7502C52.5 21.8882 52.1576 21.0616 51.5481 20.4521C50.9386 19.8426 50.112 19.5002 49.25 19.5002H29.75C28.8881 19.5002 28.0614 19.8426 27.4519 20.4521C26.8424 21.0616 26.5 21.8882 26.5 22.7502C26.5 23.6121 26.8424 24.4388 27.4519 25.0483C28.0614 25.6578 28.8881 26.0002 29.75 26.0002ZM31.2775 14.6252C31.3254 15.0215 31.5176 15.3864 31.8173 15.6501C32.117 15.9139 32.5033 16.058 32.9025 16.0552H46C46.3973 16.0511 46.7799 15.9045 47.0782 15.6421C47.3764 15.3796 47.5705 15.0187 47.625 14.6252C48.3397 11.1705 49.66 7.86964 51.525 4.87516C51.6972 4.58467 51.7683 4.2453 51.7271 3.91013C51.6859 3.57495 51.5349 3.26287 51.2975 3.02266C51.1015 2.76447 50.8328 2.57079 50.5258 2.46655C50.2188 2.3623 49.8877 2.35224 49.575 2.43766L43.53 5.03766C43.4287 5.0866 43.3176 5.11201 43.205 5.11201C43.0925 5.11201 42.9814 5.0866 42.88 5.03766C42.6784 4.96262 42.5148 4.81068 42.425 4.61516L40.995 1.00766C40.8701 0.714531 40.6619 0.464577 40.396 0.288889C40.1302 0.1132 39.8186 0.0195313 39.5 0.0195312C39.1814 0.0195312 38.8698 0.1132 38.604 0.288889C38.3382 0.464577 38.1299 0.714531 38.005 1.00766L36.575 4.61516C36.4853 4.81068 36.3216 4.96262 36.12 5.03766C36.0187 5.0866 35.9076 5.11201 35.795 5.11201C35.6825 5.11201 35.5714 5.0866 35.47 5.03766L29.425 2.43766C29.115 2.31228 28.7739 2.28558 28.4482 2.36119C28.1225 2.4368 27.8281 2.61105 27.605 2.86016C27.3677 3.10037 27.2166 3.41245 27.1754 3.74763C27.1343 4.0828 27.2053 4.42217 27.3775 4.71266C29.2604 7.75676 30.5813 11.1142 31.2775 14.6252ZM50.68 29.6402C50.3448 29.3826 49.9327 29.2453 49.51 29.2502H29.49C29.0673 29.2453 28.6553 29.3826 28.32 29.6402C20.0325 36.1402 10.77 47.1902 10.77 56.9402C10.77 70.6877 18.44 78.0002 39.5 78.0002C60.56 78.0002 68.23 70.6877 68.23 56.9402C68.23 47.1902 59 35.9777 50.68 29.6402ZM42.75 65.4227C42.5606 65.4598 42.3895 65.5606 42.2653 65.7084C42.1412 65.8563 42.0714 66.0421 42.0675 66.2352V67.4377C42.0675 68.0841 41.8107 68.7041 41.3536 69.1612C40.8965 69.6184 40.2765 69.8752 39.63 69.8752C38.9836 69.8752 38.3636 69.6184 37.9064 69.1612C37.4493 68.7041 37.1925 68.0841 37.1925 67.4377V66.3977C37.1925 66.1822 37.1069 65.9755 36.9545 65.8231C36.8022 65.6708 36.5955 65.5852 36.38 65.5852H34.4625C33.8161 65.5852 33.1961 65.3284 32.7389 64.8712C32.2818 64.4141 32.025 63.7941 32.025 63.1477C32.025 62.5012 32.2818 61.8812 32.7389 61.4241C33.1961 60.967 33.8161 60.7102 34.4625 60.7102H41.45C41.9688 60.728 42.4768 60.56 42.8826 60.2364C43.2884 59.9128 43.5653 59.4549 43.6633 58.9452C43.7613 58.4355 43.674 57.9075 43.4172 57.4565C43.1604 57.0054 42.7509 56.661 42.2625 56.4852L35.1775 53.6577C33.7495 53.1228 32.5346 52.1375 31.7163 50.8508C30.898 49.5641 30.5209 48.0459 30.6421 46.5259C30.7633 45.0059 31.3761 43.5666 32.3878 42.4258C33.3996 41.2849 34.7553 40.5046 36.25 40.2027C36.4395 40.1656 36.6105 40.0647 36.7347 39.9169C36.8589 39.7691 36.9287 39.5832 36.9325 39.3902V38.1877C36.9325 37.5412 37.1893 36.9212 37.6464 36.4641C38.1036 36.007 38.7236 35.7502 39.37 35.7502C40.0165 35.7502 40.6365 36.007 41.0936 36.4641C41.5507 36.9212 41.8075 37.5412 41.8075 38.1877V39.2277C41.8075 39.4431 41.8931 39.6498 42.0455 39.8022C42.1979 39.9546 42.4045 40.0402 42.62 40.0402H44.5375C45.184 40.0402 45.804 40.297 46.2611 40.7541C46.7182 41.2112 46.975 41.8312 46.975 42.4777C46.975 43.1241 46.7182 43.7441 46.2611 44.2012C45.804 44.6584 45.184 44.9152 44.5375 44.9152H37.68C37.1613 44.8973 36.6532 45.0653 36.2474 45.3889C35.8416 45.7125 35.5648 46.1705 35.4667 46.6802C35.3687 47.1899 35.456 47.7178 35.7128 48.1688C35.9697 48.6199 36.3792 48.9644 36.8675 49.1402L43.9525 51.9677C45.38 52.5134 46.5905 53.51 47.4 54.8063C48.2096 56.1025 48.574 57.6276 48.438 59.1498C48.3019 60.672 47.6729 62.1082 46.6463 63.2404C45.6197 64.3725 44.2517 65.1387 42.75 65.4227Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_372">
                    <rect
                      width="78"
                      height="78"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "28px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[0].title}
            </h3>
          </div>

          {/* Card 6 - Additional card if needed */}
          <div
            ref={card6Ref}
            className="benefit-card flex flex-col gap-8 bg-[#F8F9FA] rounded-[40px] p-4 justify-center items-center text-center border border-[#C1C1C1] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              height: "430px",
              width: "380px",
              transform: "translateY(-160px)",
            }}
            data-gsap="benefit-6"
          >
            {/* Growing white halves filling from center */}
            <div className="benefit-white-div-1 absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-[40px] rounded-l-none transform origin-center z-10"></div>
            <div className="benefit-white-div-2 absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-[40px] rounded-r-none transform origin-center z-10"></div>
            <div className="benefit-icon w-[78px] h-[78px] rounded-full flex items-center justify-center relative z-10">
              <svg
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_57_372)">
                  <path
                    d="M29.75 26.0002H49.25C50.112 26.0002 50.9386 25.6578 51.5481 25.0483C52.1576 24.4388 52.5 23.6121 52.5 22.7502C52.5 21.8882 52.1576 21.0616 51.5481 20.4521C50.9386 19.8426 50.112 19.5002 49.25 19.5002H29.75C28.8881 19.5002 28.0614 19.8426 27.4519 20.4521C26.8424 21.0616 26.5 21.8882 26.5 22.7502C26.5 23.6121 26.8424 24.4388 27.4519 25.0483C28.0614 25.6578 28.8881 26.0002 29.75 26.0002ZM31.2775 14.6252C31.3254 15.0215 31.5176 15.3864 31.8173 15.6501C32.117 15.9139 32.5033 16.058 32.9025 16.0552H46C46.3973 16.0511 46.7799 15.9045 47.0782 15.6421C47.3764 15.3796 47.5705 15.0187 47.625 14.6252C48.3397 11.1705 49.66 7.86964 51.525 4.87516C51.6972 4.58467 51.7683 4.2453 51.7271 3.91013C51.6859 3.57495 51.5349 3.26287 51.2975 3.02266C51.1015 2.76447 50.8328 2.57079 50.5258 2.46655C50.2188 2.3623 49.8877 2.35224 49.575 2.43766L43.53 5.03766C43.4287 5.0866 43.3176 5.11201 43.205 5.11201C43.0925 5.11201 42.9814 5.0866 42.88 5.03766C42.6784 4.96262 42.5148 4.81068 42.425 4.61516L40.995 1.00766C40.8701 0.714531 40.6619 0.464577 40.396 0.288889C40.1302 0.1132 39.8186 0.0195313 39.5 0.0195312C39.1814 0.0195312 38.8698 0.1132 38.604 0.288889C38.3382 0.464577 38.1299 0.714531 38.005 1.00766L36.575 4.61516C36.4853 4.81068 36.3216 4.96262 36.12 5.03766C36.0187 5.0866 35.9076 5.11201 35.795 5.11201C35.6825 5.11201 35.5714 5.0866 35.47 5.03766L29.425 2.43766C29.115 2.31228 28.7739 2.28558 28.4482 2.36119C28.1225 2.4368 27.8281 2.61105 27.605 2.86016C27.3677 3.10037 27.2166 3.41245 27.1754 3.74763C27.1343 4.0828 27.2053 4.42217 27.3775 4.71266C29.2604 7.75676 30.5813 11.1142 31.2775 14.6252ZM50.68 29.6402C50.3448 29.3826 49.9327 29.2453 49.51 29.2502H29.49C29.0673 29.2453 28.6553 29.3826 28.32 29.6402C20.0325 36.1402 10.77 47.1902 10.77 56.9402C10.77 70.6877 18.44 78.0002 39.5 78.0002C60.56 78.0002 68.23 70.6877 68.23 56.9402C68.23 47.1902 59 35.9777 50.68 29.6402ZM42.75 65.4227C42.5606 65.4598 42.3895 65.5606 42.2653 65.7084C42.1412 65.8563 42.0714 66.0421 42.0675 66.2352V67.4377C42.0675 68.0841 41.8107 68.7041 41.3536 69.1612C40.8965 69.6184 40.2765 69.8752 39.63 69.8752C38.9836 69.8752 38.3636 69.6184 37.9064 69.1612C37.4493 68.7041 37.1925 68.0841 37.1925 67.4377V66.3977C37.1925 66.1822 37.1069 65.9755 36.9545 65.8231C36.8022 65.6708 36.5955 65.5852 36.38 65.5852H34.4625C33.8161 65.5852 33.1961 65.3284 32.7389 64.8712C32.2818 64.4141 32.025 63.7941 32.025 63.1477C32.025 62.5012 32.2818 61.8812 32.7389 61.4241C33.1961 60.967 33.8161 60.7102 34.4625 60.7102H41.45C41.9688 60.728 42.4768 60.56 42.8826 60.2364C43.2884 59.9128 43.5653 59.4549 43.6633 58.9452C43.7613 58.4355 43.674 57.9075 43.4172 57.4565C43.1604 57.0054 42.7509 56.661 42.2625 56.4852L35.1775 53.6577C33.7495 53.1228 32.5346 52.1375 31.7163 50.8508C30.898 49.5641 30.5209 48.0459 30.6421 46.5259C30.7633 45.0059 31.3761 43.5666 32.3878 42.4258C33.3996 41.2849 34.7553 40.5046 36.25 40.2027C36.4395 40.1656 36.6105 40.0647 36.7347 39.9169C36.8589 39.7691 36.9287 39.5832 36.9325 39.3902V38.1877C36.9325 37.5412 37.1893 36.9212 37.6464 36.4641C38.1036 36.007 38.7236 35.7502 39.37 35.7502C40.0165 35.7502 40.6365 36.007 41.0936 36.4641C41.5507 36.9212 41.8075 37.5412 41.8075 38.1877V39.2277C41.8075 39.4431 41.8931 39.6498 42.0455 39.8022C42.1979 39.9546 42.4045 40.0402 42.62 40.0402H44.5375C45.184 40.0402 45.804 40.297 46.2611 40.7541C46.7182 41.2112 46.975 41.8312 46.975 42.4777C46.975 43.1241 46.7182 43.7441 46.2611 44.2012C45.804 44.6584 45.184 44.9152 44.5375 44.9152H37.68C37.1613 44.8973 36.6532 45.0653 36.2474 45.3889C35.8416 45.7125 35.5648 46.1705 35.4667 46.6802C35.3687 47.1899 35.456 47.7178 35.7128 48.1688C35.9697 48.6199 36.3792 48.9644 36.8675 49.1402L43.9525 51.9677C45.38 52.5134 46.5905 53.51 47.4 54.8063C48.2096 56.1025 48.574 57.6276 48.438 59.1498C48.3019 60.672 47.6729 62.1082 46.6463 63.2404C45.6197 64.3725 44.2517 65.1387 42.75 65.4227Z"
                    fill="#0052CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_372">
                    <rect
                      width="78"
                      height="78"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3
              className="benefit-text relative z-10"
              style={{
                fontFamily: "Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "28px",
                lineHeight: "1.5",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: 0,
              }}
            >
              {benefits[0].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
