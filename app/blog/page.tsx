"use client";

import React from "react";
import Link from "next/link";
import MenuBar from "../menubar/page";
import ScrollAnimation from "../scrollanimation";
import { getAllPosts } from "./data";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      <div className="flex flex-col max-w-4xl mx-auto px-4 py-8">
        <h1>
          <div className="text-neptune-400 font-bold text-xl md:text-xl lg:text-xl mb-8">
            this week i learned
          </div>
        </h1>
        {posts.map((post) => (
          <div
            className="text-neptune-400 p-4 hover:underline decoration-wavy
 transition-colors flex flex-row justify-between"
            key={post.id}
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <div className="text-neptune-400">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
