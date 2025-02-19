import Image from "next/image"
import Link from "next/link"
import type { Article } from "../lib/types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.id}`} className="group lg:px-1 sm:px-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-md overflow-hidden transition-transform 
      duration-300 lg:group-hover:scale-105 h-full">
        <Image
          src={article.imageUrl || "/placeholder.svg"}
          alt={article.title}
          width={400}
          height={300}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl text-left font-semibold mb-2 group-hover:text-neutral-400">{article.title}</h2>
          <p className="text-neutral-700 text-left mb-4">{article.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-neutral-500">
            <span>{article.author}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

