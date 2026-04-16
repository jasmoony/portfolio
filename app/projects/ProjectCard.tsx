import Link from "next/link";
import Image from "next/image";
import { Project } from "./types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-mypink-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`aspect-[4/3] relative bg-background-muted overflow-hidden ${project.previewContain ? "p-6" : ""}`}>
        <Image
          src={project.screenshots[0]}
          alt={project.title}
          fill
          className={`${project.previewContain ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-neptune-900 mb-1">
          {project.title}
        </h3>
        <p className="text-neptune-700 text-sm">{project.tagline}</p>
      </div>
    </Link>
  );
}
