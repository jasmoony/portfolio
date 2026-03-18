"use client";

import Image from "next/image";
import Link from "next/link";
import MenuBar from "./menubar/page";
import ScrollAnimation from "./scrollanimation";
import ProjectCard from "./projects/ProjectCard";
import { getAllProjects } from "./projects/data";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-neptune-400 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8">
          hi! i'm jasmine.
        </div>
        <div className="mb-8">
          <Image src="/beach.jpg" alt="beach" width={200} height={200} />
        </div>
        <div className="text-neptune-400 font-normal text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-center px-4">
          welcome to my little corner on the internet. i am a self-taught
          software engineer with a business degree and a background in product
          management. check out my projects <Link href={`/projects`}>here</Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-neptune-400 font-bold text-3xl md:text-4xl mb-4">
            personal projects
          </h2>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
