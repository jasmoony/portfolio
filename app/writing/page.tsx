import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { getAllPosts } from "./data";

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-4">
          writing
        </h1>
        <p className="text-neptune-700 text-lg mb-12">
          things that inspired me this week.
        </p>

        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/writing/${post.slug}`}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-4 border-b border-neptune-100/20 group"
            >
              <span className="text-neptune-700 group-hover:text-accent transition-colors link-underline">
                {post.title}
              </span>
              <span className="text-neptune-400 text-sm font-mono shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
