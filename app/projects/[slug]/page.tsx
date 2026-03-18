"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "../../menubar/page";
import ScrollAnimation from "../../scrollanimation";
import { getProjectBySlug } from "../data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <div>
        <ScrollAnimation />
        <div>
          <MenuBar />
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-neptune-400 text-xl">project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/projects"
          className="text-neptune-700 hover:underline decoration-wavy mb-8 inline-block"
        >
          &larr; back to projects
        </Link>

        <h1 className="text-neptune-400 font-bold text-3xl md:text-4xl mb-6">
          {project.title}
        </h1>

        <p className="text-neptune-700 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex gap-6">
          <div className="flex-1 bg-neptune-100 rounded-lg overflow-hidden">
            <Image
              src={project.screenshots[0]}
              width={500}
              height={350}
              alt={`${project.title} screenshot 1`}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 bg-neptune-100 rounded-lg overflow-hidden">
            <Image
              src={project.screenshots[1]}
              width={500}
              height={350}
              alt={`${project.title} screenshot 2`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
