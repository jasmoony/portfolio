import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MenuBar from "../../menubar/page";
import ScrollAnimation from "../../scrollanimation";
import { getPostBySlug, getAllPosts } from "../data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-neptune-400 hover:text-neptune-300 transition-colors mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          back to archive
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neptune-400 mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-neptune-400 mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="text-neptune-700 leading-relaxed">
            {post.content?.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="text-3xl font-bold text-white mt-8 mb-4"
                  >
                    {paragraph.substring(2)}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold text-white mt-6 mb-3"
                  >
                    {paragraph.substring(3)}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-white mt-4 mb-2"
                  >
                    {paragraph.substring(4)}
                  </h3>
                );
              }
              if (paragraph.startsWith("```")) {
                return null;
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
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
