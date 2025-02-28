"use client";

import { useState } from "react";
import PostCard from "@/components/ui/post-card";
import { articles } from "./[category]/articles";

// Categories with both display names and URL slugs
const categories = [
  { name: "All", slug: "all" },
  { name: "Architectural Styles & Trends", slug: "architectural-styles-trends" },
  { name: "Behind The Lens", slug: "behind-the-lens" },
  { name: "Historical Insights", slug: "historical-insights" },
  { name: "Interior Design", slug: "interior-design" },
  { name: "Interviews & Spotlights", slug: "interviews-spotlights" },
  { name: "Neighborhood Highlights", slug: "neighborhood-highlights" },
  { name: "Real Estate Focus", slug: "real-estate-focus" },
  { name: "Real Estate Market Insights", slug: "real-estate-market-insights" },
  { name: "Special Features", slug: "special-features" },
  { name: "Technical Mastery", slug: "technical-mastery" },
  { name: "The Future of NYC Architecture", slug: "the-future-of-nyc-architecture" },
  { name: "Trends", slug: "trends" },
  { name: "Tutorials & Tips", slug: "tutorials-tips" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
  {categories.map((category) => (
    <button
      key={category.slug}
      onClick={() => setSelectedCategory(category.slug)}
      className={`relative cursor-pointer rounded-xl lg:px-10 md:px-8 px-2 mb-2
      py-3 bg-neutral-800 overflow-hidden group transition-transform 
      duration-100 transform hover:scale-95 
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]
      ${
        selectedCategory === category.slug
          ? "text-white bg-neutral-700"
          : "text-neutral-500 hover:text-neutral-300"
      }`}
    >
      <div
        style={{
          background: `
          border-box linear-gradient(180deg,
            rgba(100, 100, 100, 1), 
            rgba(50, 50, 50, 1),
            rgba(38, 38, 38, 1),
            rgba(38, 38, 38, 1)
          )
        `,
        }}
        className="absolute inset-0 rounded-xl transition-all duration-100
        bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
        group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
      />
      <div
        className="absolute inset-[1px] bg-neutral-900 rounded-xl pointer-events-none 
        transition-shadow duration-100 z-10"
      />
      <span className="relative z-10 text-md">{category.name}</span>
    </button>
  ))}
</div>


      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <PostCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            slug={`/blog/${article.category}/${article.slug}`} // Correct URL formatting
            category={article.category}
            coverImage={article.coverImage}
          />
        ))}
      </div>
    </main>
  );
}
