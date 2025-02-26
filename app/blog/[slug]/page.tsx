import { notFound } from "next/navigation";
import { articles } from "../articles"; // Import metadata
import dynamic from "next/dynamic";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((post) => post.slug === params.slug);
  if (!article) return notFound(); // Show 404 if article isn't found

  // Dynamically import the correct article file
  const ArticleContent = dynamic(() => import(`../articles/${params.slug}`));

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <ArticleContent />
    </main>
  );
}
