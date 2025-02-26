import { PostCard } from "@/components/ui/post-card";
import { articles } from "./articles";

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <PostCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            slug={article.slug}
            coverImage={article.coverImage}
          />
        ))}
      </div>
    </main>
  );
}
