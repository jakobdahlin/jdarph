import { articles } from "./articles";
import PostCard from "@/components/ui/post-card";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryArticles = articles.filter((article) => article.category === params.category);

  if (categoryArticles.length === 0) return notFound();

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-6 capitalize">{params.category.replace("-", " ")} Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.map((article) => (
          <PostCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            slug={`/blog/${params.category}/${article.slug}`} 
            category={article.category}
            coverImage={article.coverImage}
          />
        ))}
      </div>
    </main>
  );
}
