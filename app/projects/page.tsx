"use client";

import MenuBar from "../menubar/page";
import ScrollAnimation from "../scrollanimation";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "./data";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
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
