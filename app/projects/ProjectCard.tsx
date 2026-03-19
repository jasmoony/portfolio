import Link from "next/link";
import { Project } from "./types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block p-4 hover:underline decoration-wavy transition-colors flex flex-row justify-between"
    >
      <div className="text-neptune-400 font-semibold text-lg">
        {project.title}
      </div>
      <div className="text-neptune-700 text-sm">
        {project.description}
      </div>
    </Link>
  );
}
