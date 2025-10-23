"use client";

import Image from "next/image";
import Link from "next/link";
import MenuBar from "./menubar/page";
import ScrollAnimation from "./scrollanimation";
import { getAllPosts } from "./blog/data";

{
  /* favicon toevoegen */
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-neptune-400 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8">
          hi! i'm jasmine.
        </div>
        <div className="mb-8">
          <Image src="/beach.jpg" alt="beach" width={200} height={200} />
        </div>
        <div className="text-neptune-400 font-normal text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-center px-4">
          welcome to my little corner on the internet. i am a programmer with a
          business degree and a background in product management. i'm learning
          how to code, next to raising a tiny human. and where there's time
          left, i like to read, knit or go to the beach.
        </div>
      </div>

      {/* Blog Archive Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-neptune-400 font-bold text-3xl md:text-4xl mb-4">
            today i learned
          </h2>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="text-neptune-400 p-4 hover:underline decoration-wavy transition-colors flex flex-row justify-between"
            >
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <div className="text-neptune-400">
                {new Date(post.date).toLocaleDateString("en-US")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
