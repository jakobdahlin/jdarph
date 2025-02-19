import { articles } from "@/lib/data";
import Image from "next/image";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return <p className="text-center text-red-500 text-2xl mt-20">404 - Article Not Found</p>;
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">{article.date} • {article.author}</p>
      
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={800}
        height={500}
        className="w-full h-auto rounded-lg"
      />

      <article
        className="mt-6 space-y-4 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}
