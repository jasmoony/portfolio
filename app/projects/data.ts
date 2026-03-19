import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "4",
    title: "boekhoek",
    slug: "boekhoek",
    description:
      "a marketplace for secondhand books. expected to launch in april 2026",
    screenshots: ["/boekhoek1.png", "/boekhoek2.png"],
  },
  // {
  //   id: "3",
  //   title: "huphup",
  //   slug: "huphup",
  //   description: "a fun cheering app for runners and their friends",
  //   screenshots: ["/bettysbooks.png", "/bettysbooks.png"],
  // },
  {
    id: "2",
    title: "mixtapes",
    slug: "mixtapes",
    description: "customize your playlists and share them with friends",
    screenshots: ["/mixtapes1.png", "/mixtapes2.png"],
  },
  {
    id: "1",
    title: "taylor swift surprise song generator",
    slug: "taylor-swift",
    description: "website generating surprise song images from her eras tour",
    screenshots: ["/swiftie1.png", "/swiftie2.png"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
