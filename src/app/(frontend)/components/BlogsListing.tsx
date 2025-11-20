"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const blogCategories = ["BLOGS", "NEWS", "INSIGHTS", "ARTICLES"];

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  featuredImage: { url?: string } | string | null;
}

export default function BlogsListing() {
  const [activeCategory, setActiveCategory] = useState("BLOGS");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/frontend/blogs?limit=9");
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
        {loading ? (
          <div className="text-center py-12">
            <p
              className="text-[#6B7390]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "18px",
              }}
            >
              Loading blogs...
            </p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p
              className="text-[#6B7390]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 300,
                fontSize: "18px",
              }}
            >
              No blogs found. Add blogs from the Payload admin panel.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts
              .filter(
                (post) =>
                  activeCategory === "BLOGS" || post.category === activeCategory
              )
              .map((post) => {
                const imageUrl =
                  typeof post.featuredImage === "object" &&
                  post.featuredImage?.url
                    ? post.featuredImage.url
                    : "/dental-png.jpg";

                return (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.slug}`}
                    className="overflow-hidden transition-shadow duration-200 block"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={imageUrl}
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
                      <div className="flex items-center gap-3 my-3">
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
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
