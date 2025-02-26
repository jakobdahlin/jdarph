import { notFound } from "next/navigation";
import { articles } from "../articles"; // Import metadata

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((post) => post.slug === params.slug);
  if (!article) return notFound(); // Show 404 if article isn't found

  // Get the article component from articles.ts
  const ArticleContent = article.component;

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <ArticleContent />
    </main>
  );
}
