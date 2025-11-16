"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogCategories = ["BLOGS", "NEWS", "INSIGHTS", "ARTICLES"];

const blogPosts = [
  {
    id: 1,
    title:
      "AI + Empathy: Why AI Won't Replace Dental Staff — It'll Empower Them",
    category: "RESEARCH",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
  {
    id: 2,
    title: "From Insights To Action: Building A Data-Driven Dental Practice",
    category: "BLOG",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
  {
    id: 3,
    title:
      "From Missed Appointments To Loyal Patients: How Smart Scheduling Improve...",
    category: "BLOG",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
  {
    id: 4,
    title: "Hidden Cost Of Manual Scheduling In Dentistry",
    category: "RESEARCH",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
  {
    id: 5,
    title: "Is Your Practice Ready For AI? - A 5-Step Readiness Checklist",
    category: "BLOG",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
  {
    id: 6,
    title: "The Empathy Gap In Dentistry: Why Technology Alone Isn't Enough",
    category: "BLOG",
    readTime: "6MIN READ",
    image: "/dental-png.jpg",
  },
];

export default function BlogsListing() {
  const [activeCategory, setActiveCategory] = useState("BLOGS");

  return (
    <section className="bg-neutral-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto px-[3%]">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-start gap-3 mb-12 lg:mb-16">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#0052CC] text-white"
                  : "bg-gray-100 text-black"
              }`}
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 400,
                fontSize: "16px",
                letterSpacing: "0.02em",
                border:
                  activeCategory === category
                    ? "1px solid #0052CC"
                    : "1px solid #777777",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid - 3x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className=" overflow-hidden   transition-shadow duration-200 block"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Below Image */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className="text-black line-clamp-2"
                  style={{
                    fontFamily: "Inter Tight",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "1.4",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h3>
                {/* Category Tag */}
                <div className="flex items-center justify-between gap-3 my-3">
                  <span
                    className="px-3 py-1 rounded-full bg-gray-100 text-black"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "16px",
                      letterSpacing: "0.05em",
                      border: "1px solid #777777",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="text-black"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 300,
                      fontSize: "16px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
