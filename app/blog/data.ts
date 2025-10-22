import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "what knitting and coding have in common",
    content: `both have their own language you need to learn. for both, it's trying, failing, learning and trying again. for me personally, the challenge in both of them is to see a project through to the end.`,
    date: "2025-10-22",
    slug: "knitting-and-coding-have-in-common",
    readTime: 5,
  },
  {
    id: "2",
    title: "using claude code",
    content: `saves a ton of work, but as someone still learning, it's easy to get stuck in a loop. the speed of it makes it less of a conversation, and it's harder to remain sharp on the code it writes. still really cool and a bit scary to see how fast ai is progressing.`,
    date: "2025-10-15",
    slug: "using-claude-code",
    readTime: 8,
  },
  {
    id: "3",
    title: "what swift taught me about async",
    content: `i got stuck working with the photospicker api, which was very annoying but it taught me more about async functions and how they work. this is quite a difficult concept to grasp when learning to code. but basically; the key takeaway for me was : don't trigger ui changes from inside async operations - trigger them from state changes instead.`,
    date: "2025-10-3",
    slug: "swift-async",
    readTime: 8,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
