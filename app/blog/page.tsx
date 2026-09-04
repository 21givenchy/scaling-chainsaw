"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Only the Nairobi Omi Builder Sprint post
const blogPost = {
  id: "nairobi-omi-builder-sprint",
  title: "Omi Builder Sprint Nairobi: Showcasing the Future of AI Innovation",
  subtitle:
    "Witness the creativity of Nairobi's developers as they showcase AI-driven solutions for business, safety, and culture at the Omi Builder Sprint.",
  author: "George Karani & Team",
  date: "2026-04-28",
  readTime: "6 min",
  tags: ["Nairobi Tech", "AI Innovation", "Wearable Technology", "Developer Community"],
  excerpt:
    "Witness the creativity of Nairobi's developers as they showcase AI-driven solutions for business, safety, and culture at the Omi Builder Sprint.",
  thumbnailUrl: "/omi-hack.jpeg",
};

export default function BlogPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Blog</h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Insights and stories from the tech community
          </p>
        </div>

        {/* Featured Blog Post */}
        <Link href={`/post/${blogPost.id}`}>
          <article
            className="group block overflow-hidden rounded-2xl border border-border hover:border-foreground/50 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Featured indicator */}
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

            <div className="p-6 sm:p-8">
              {/* Top section - responsive layout */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Featured badge */}
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Featured Story
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {blogPost.title}
                  </h2>

                  <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                    {blogPost.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-secondary/40 hover:bg-secondary/60 text-foreground/70 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground/70">
                    <span className="font-medium">{blogPost.author}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{blogPost.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{blogPost.readTime} read</span>
                  </div>
                </div>

                {/* Thumbnail - responsive positioning */}
                {blogPost.thumbnailUrl && (
                  <div className="w-full lg:w-64 lg:flex-shrink-0">
                    <Image
                      src={blogPost.thumbnailUrl}
                      alt={blogPost.title}
                      width={300}
                      height={160}
                      className="w-full h-40 sm:h-48 lg:h-40 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Call to action */}
              <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/60">
                  Explore the full story
                </span>
                <ArrowRight
                  className={`w-5 h-5 text-foreground/60 transition-all duration-300 ${
                    isHovered ? "translate-x-2" : ""
                  }`}
                />
              </div>
            </div>
          </article>
        </Link>
      </main>
    </div>
  );
}