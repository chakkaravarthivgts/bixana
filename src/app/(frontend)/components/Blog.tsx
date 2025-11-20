"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  intro: string;
  featuredImage: { url?: string } | string | null;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/frontend/blogs?limit=2");
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data.docs || []);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading || blogPosts.length === 0) {
    return null;
  }
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
          <Link
            href="/blogs"
            className="font-helvetica-neue-regular text-lg leading-relaxed tracking-tight text-black hover:text-blue-600 transition-colors duration-200 self-start lg:self-end"
          >
            See all
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 xl:gap-14">
          {blogPosts.slice(0, 2).map((post, index) => {
            const imageUrl =
              typeof post.featuredImage === "object" && post.featuredImage?.url
                ? post.featuredImage.url
                : "/dental-png.jpg";

            return (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="flex flex-col w-full lg:w-1/2 gap-4 hover:opacity-90 transition-opacity"
              >
                {/* Image */}
                <div className="rounded-[40px] overflow-hidden w-full aspect-[16/9]">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={700}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4">
                  {/* Headline */}
                  <h3 className="font-helvetica-neue-light text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-black">
                    {post.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
