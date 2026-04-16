import { MetadataRoute } from "next";
import { getAllProjects } from "./projects/data";
import { getAllPosts } from "./writing/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jasminetusveld.com";

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/work-with-me",
    "/writing",
    "/contactform",
    "/now",
    "/colophon",
    "/uses",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectPages = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const writingPages = getAllPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...projectPages, ...writingPages];
}
