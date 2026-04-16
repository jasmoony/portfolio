import Link from "next/link";
import { notFound } from "next/navigation";
import PageWrapper from "../../components/PageWrapper";
import { getPostBySlug, getAllPosts } from "../data";

interface WritingPostPageProps {
  params: {
    slug: string;
  };
}

export default function WritingPostPage({ params }: WritingPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12">
        <Link
          href="/writing"
          className="text-neptune-700 link-underline mb-10 inline-block text-sm"
        >
          &larr; back to writing
        </Link>

        <header className="mb-10">
          <h1 className="font-serif text-display-xl text-neptune-900 mb-3">
            {post.title}
          </h1>
          <div className="text-neptune-400 text-sm font-mono">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readTime && (
              <span className="ml-3">{post.readTime} min read</span>
            )}
          </div>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="text-neptune-700 text-lg leading-relaxed">
            {post.content?.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="font-serif text-3xl font-bold text-neptune-900 mt-8 mb-4"
                  >
                    {paragraph.substring(2)}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="font-serif text-2xl font-semibold text-neptune-900 mt-6 mb-3"
                  >
                    {paragraph.substring(3)}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="font-serif text-xl font-semibold text-neptune-900 mt-4 mb-2"
                  >
                    {paragraph.substring(4)}
                  </h3>
                );
              }
              if (paragraph.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
