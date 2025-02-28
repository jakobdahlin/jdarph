import { notFound } from "next/navigation";
import { articles } from "../articles";

export function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string, category: string } }) {
  const article = articles.find((post) => post.slug === params.slug && post.category === params.category);

  if (!article) return notFound();

  const ArticleComponent = article.component;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      <img
        src={article.coverImage}
        alt={article.title}
        className="mb-6 w-full aspect-[16/9] object-cover"
      />

      <div className="mt-6">
        <ArticleComponent />
      </div>
    </main>
  );
}
