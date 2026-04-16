"use client";

import PageWrapper from "../components/PageWrapper";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "./data";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-12 text-center">
          projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
