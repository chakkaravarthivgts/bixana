import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABanner from "../../components/CTABanner";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";
import config from "@payload-config";

async function getBlog(slug: string) {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "blogs" as const,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (result.docs.length === 0) {
    return null;
  }

  return result.docs[0];
}

async function getMoreBlogs(currentBlogId: string) {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "blogs" as const,
    where: {
      and: [
        {
          id: {
            not_equals: currentBlogId,
          },
        },
      ],
    },
    limit: 3,
    sort: "-createdAt",
  });

  return result.docs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.intro,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  // Get more blogs (excluding current one)
  const moreBlogs = await getMoreBlogs(blog.id);

  // Get featured image URL
  const featuredImageUrl =
    typeof blog.featuredImage === "object" && blog.featuredImage?.url
      ? blog.featuredImage.url
      : "/dental-png.jpg";

  // Icon mapping
  const iconMap: Record<string, string> = {
    crown: "👑",
    lightbulb: "💡",
    checkmark: "✓",
    heart: "❤️",
    plant: "🌱",
    scales: "⚖️",
    sparkle: "✨",
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <h1
          className="text-black mb-6"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 400,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {blog.title}
        </h1>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12">
          <Image
            src={featuredImageUrl}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Introduction */}
        {blog.intro && (
          <div
            className="text-[#6B7390] mb-12"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.8,
              letterSpacing: "-0.01em",
            }}
          >
            <p>{blog.intro}</p>
          </div>
        )}

        {/* Sections */}
        {blog.sections && blog.sections.length > 0 && (
          <div className="space-y-12 mb-12">
            {blog.sections.map((section, index: number) => (
              <div key={index} className="flex gap-6">
                {/* Icon */}
                {section.icon && (
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-2xl">
                    {iconMap[section.icon] || "•"}
                  </div>
                )}
                {/* Content */}
                <div className="flex-1">
                  <h2
                    className="text-black mb-4"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "clamp(24px, 3vw, 24px)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {section.number}. {section.title}
                  </h2>
                  <div
                    className="text-[#6B7390]"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 300,
                      fontSize: "clamp(16px, 2vw, 18px)",
                      lineHeight: 1.8,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <RichText data={section.content} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        {blog.content && (
          <div
            className="text-[#6B7390] mb-12"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: 1.8,
              letterSpacing: "-0.01em",
            }}
          >
            <RichText data={blog.content} />
          </div>
        )}

        {/* Takeaway Section */}
        {blog.takeaway && (
          <div className="bg-neutral-50 rounded-2xl p-8 mb-12">
            <div className="flex gap-4 items-start">
              <div className="text-2xl">✨</div>
              <div className="flex-1">
                <h3
                  className="text-black mb-4"
                  style={{
                    fontFamily: "Inter Tight",
                    fontWeight: 400,
                    fontSize: "clamp(24px, 3vw, 32px)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {blog.takeaway.title || "The Takeaway"}
                </h3>
                <div
                  className="text-[#6B7390]"
                  style={{
                    fontFamily: "Inter Tight",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 2vw, 18px)",
                    lineHeight: 1.8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <RichText data={blog.takeaway.content} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Links */}
        {blog.ctaLinks && blog.ctaLinks.length > 0 && (
          <div className="flex flex-col gap-4">
            {blog.ctaLinks.map((cta, index: number) => (
              <Link
                key={index}
                href={cta.url}
                className="text-[#0052CC] hover:underline"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: 1.5,
                }}
              >
                {cta.text}
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* More Articles Section */}
      {moreBlogs.length > 0 && (
        <section className="bg-neutral-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto px-[3%]">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-12 lg:mb-16">
              <h2
                className="text-black"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                More Articles
              </h2>
              <Link
                href="/blogs"
                className="text-[#0052CC] hover:underline"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: 1.5,
                }}
              >
                See all
              </Link>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {moreBlogs.map((post) => {
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
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <Footer />
    </main>
  );
}
