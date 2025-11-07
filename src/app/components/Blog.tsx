"use client";

import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How to get started with ToothFairy",
    description:
      "Developing ethical frameworks and compliance standards for responsible AI adoption in dental practices.",
    image: "/Card 1 Image.png",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Benefits of fastening appointments",
    description:
      "Bridging startups, governments, and SMEs to co-create impactful AI solutions for modern healthcare.",
    image: "/Card 2 Image.png",
    date: "March 12, 2024",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Digital transformation in dentistry",
    description:
      "Exploring how digital tools are revolutionizing patient care and practice management in modern clinics.",
    image: "/dental-png.jpg",
    date: "March 10, 2024",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-white py-10 px-4 lg:px-8 xl:px-16">
      <div className="flex flex-col w-full max-w-8xl gap-8 lg:gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-8">
          {/* Left: Title Section */}
          <div className="flex flex-col gap-6 lg:gap-8 max-w-md lg:max-w-lg">
            {/* Tag */}
            <div className="flex items-center" style={{ gap: "8px" }}>
              <div
                className="rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(180deg, rgba(0, 82, 204, 1) 0%, rgba(255, 255, 255, 1) 100%)",
                }}
              />
              <span
                className="uppercase"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  color: "#000000",
                }}
              >
                blogs
              </span>
            </div>

            {/* Title */}
            <h2
              className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-black"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
            >
              Our Insights
            </h2>
          </div>

          {/* Right: See all link */}
          <a
            href="#"
            className="font-helvetica-neue-regular text-lg leading-relaxed tracking-tight text-black hover:text-blue-600 transition-colors duration-200 self-start lg:self-end"
          >
            See all
          </a>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 xl:gap-14">
          {/* Card 1 */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4">
            {/* Image */}
            <div className="rounded-[40px] overflow-hidden w-full aspect-[16/9] ">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                width={700}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4">
              {/* Headline */}
              <h3 className="font-helvetica-neue-light text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-black">
                {blogPosts[0].title}
              </h3>

              {/* Subtext */}
              <p className="font-helvetica-neue-regular text-base sm:text-lg lg:text-xl leading-relaxed tracking-tight text-gray-500">
                {blogPosts[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            {/* Image */}
            <div className="rounded-[40px] overflow-hidden w-full aspect-[16/9] ">
              <Image
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                width={729}
                height={425}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4">
              {/* Headline */}
              <h3 className="font-helvetica-neue-light text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-black">
                {blogPosts[1].title}
              </h3>

              {/* Subtext */}
              <p className="font-helvetica-neue-regular text-base sm:text-lg lg:text-xl leading-relaxed tracking-tight text-gray-500">
                {blogPosts[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
