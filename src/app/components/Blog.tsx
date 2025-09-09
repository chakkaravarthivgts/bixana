"use client";

import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How to get started with Bixana",
    description:
      "Developing ethical frameworks and compliance standards for responsible AI adoption in dental practices.",
    image: "/dental-png.jpg",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Benefits of fastening appointments",
    description:
      "Bridging startups, governments, and SMEs to co-create impactful AI solutions for modern healthcare.",
    image: "/dental-png.jpg",
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
    <section
      className="relative w-full flex flex-col justify-center items-center"
      style={{
        background: "#FFFFFF",
        padding: "10px",
        height: "1048px",
      }}
    >
      <div
        className="flex flex-col"
        style={{
          width: "1528px",
          gap: "63px",
        }}
      >
        {/* Header */}
        <div
          className="flex justify-between items-end"
          style={{
            gap: "1113px",
          }}
        >
          {/* Left: Title Section */}
          <div
            className="flex flex-col"
            style={{
              width: "346px",
              gap: "30px",
            }}
          >
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
                  fontFamily: "Helvetica Neue",
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
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 300,
                fontSize: "68px",
                lineHeight: "1.147em",
                letterSpacing: "-3%",
                color: "#000000",
              }}
            >
              Our Insights
            </h2>
          </div>

          {/* Right: See all link */}
          <a
            href="#"
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.375em",
              letterSpacing: "-3%",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            See all
          </a>
        </div>

        {/* Blog Cards */}
        <div
          className="flex items-center"
          style={{
            gap: "69px",
          }}
        >
          {/* Card 1 */}
          <div
            className="flex flex-col"
            style={{
              width: "729px",
              gap: "25px",
            }}
          >
            {/* Image */}
            <div
              className="rounded-[40px] overflow-hidden"
              style={{
                width: "729px",
                height: "424px",
              }}
            >
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                width={729}
                height={424}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div
              className="flex flex-col"
              style={{
                gap: "17px",
                height: "119px",
              }}
            >
              {/* Headline */}
              <h3
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "40px",
                  lineHeight: "1.2em",
                  letterSpacing: "-2%",
                  color: "#000000",
                  height: "44px",
                }}
              >
                {blogPosts[0].title}
              </h3>

              {/* Subtext */}
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "1.6em",
                  letterSpacing: "-4%",
                  color: "#777777",
                  width: "681px",
                  height: "58px",
                }}
              >
                {blogPosts[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col"
            style={{
              width: "729px",
              height: "568px",
              gap: "25px",
            }}
          >
            {/* Image */}
            <div
              className="rounded-[40px] overflow-hidden"
              style={{
                width: "729px",
                height: "425px",
              }}
            >
              <Image
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                width={729}
                height={425}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div
              className="flex flex-col"
              style={{
                gap: "17px",
                height: "131px",
              }}
            >
              {/* Headline */}
              <h3
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "40px",
                  lineHeight: "1.2em",
                  letterSpacing: "-2%",
                  color: "#000000",
                  height: "46px",
                }}
              >
                {blogPosts[1].title}
              </h3>

              {/* Subtext */}
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "1.6em",
                  letterSpacing: "-4%",
                  color: "#777777",
                  width: "613px",
                }}
              >
                {blogPosts[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
