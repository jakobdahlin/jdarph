import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "public", "content", "posts");

  if (!fs.existsSync(postsDirectory)) {
    console.warn("⚠️ Posts directory is missing:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);

      if (!fs.existsSync(fullPath)) return null;

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "Unknown",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "/default-placeholder.jpg",
        content, // Ensure content is included
      };
    })
    .filter((post): post is Post => post !== null); // Type-safe filtering
}
