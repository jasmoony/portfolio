"use client";

import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { getAllPosts } from "./data";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <PageWrapper>
      <div className="flex flex-col max-w-4xl mx-auto px-4 py-8">
        <h1>
          <div className="text-accent font-serif font-bold text-xl md:text-xl lg:text-xl mb-8">
            this week i learned
          </div>
        </h1>
        {posts.map((post) => (
          <div
            className="text-accent p-4 link-underline transition-colors flex flex-row justify-between"
            key={post.id}
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <div className="text-neptune-700">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
