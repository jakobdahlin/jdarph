import Link from "next/link";
import ArticleCard from "@/components/articlecard";
import { articles } from "@/lib/data"


export default function BlogPage() {
    return (
      <main className="text-center flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>
    );
  }
