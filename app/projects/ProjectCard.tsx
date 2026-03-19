import Image from "next/image";
import Link from "next/link";
import { Project } from "./types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block hover:opacity-80 transition-opacity"
    >
      <div className="text-neptune-400 font-semibold text-lg mb-3">
        {project.title}
      </div>
      <div className="flex gap-4 justify-center">
        <div className="w-40">
          <Image
            src={project.screenshots[0]}
            width={300}
            height={600}
            alt={`${project.title} screenshot 1`}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-40">
          <Image
            src={project.screenshots[1]}
            width={300}
            height={600}
            alt={`${project.title} screenshot 2`}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
