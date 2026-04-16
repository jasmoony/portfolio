"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { getProjectBySlug } from "../data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-accent text-xl">project not found</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Back link */}
        <Link
          href="/projects"
          className="text-neptune-700 link-underline mb-10 inline-block text-sm"
        >
          &larr; back to projects
        </Link>

        {/* Title + tagline */}
        <header className="mb-12">
          <h1 className="font-serif text-display-xl text-neptune-900 mb-3">
            {project.title}
          </h1>
          <p className="text-neptune-700 text-xl">{project.tagline}</p>
        </header>

        {/* Hero visual */}
        <div className="mb-16">
          {project.heroVideo ? (
            <video
              src={project.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl shadow-card"
            />
          ) : (
            <div className="flex gap-4 md:gap-6 justify-center">
              {project.screenshots.map((src, i) => (
                <div key={i} className="w-40 md:w-52">
                  <Image
                    src={src}
                    width={300}
                    height={600}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-contain rounded-xl shadow-card"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* The problem */}
        <section className="mb-14">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            the problem
          </h2>
          <p className="text-neptune-700 text-lg leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* My role */}
        <section className="mb-14">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            my role
          </h2>
          <p className="text-neptune-700 text-lg leading-relaxed">
            {project.role}
          </p>
        </section>

        {/* Key decisions */}
        {project.keyDecisions.length > 0 && (
          <section className="mb-14">
            <h2 className="font-serif text-display-lg text-neptune-900 mb-6">
              key decisions
            </h2>
            <div className="space-y-6">
              {project.keyDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="bg-mypink-100 rounded-xl p-6 shadow-card"
                >
                  <h3 className="font-serif text-lg text-neptune-900 mb-2">
                    {decision.title}
                  </h3>
                  <p className="text-neptune-700 leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech stack */}
        {project.techStack.length > 0 && (
          <section className="mb-14">
            <h2 className="font-serif text-display-lg text-neptune-900 mb-6">
              tech stack
            </h2>
            <div className="space-y-4">
              {project.techStack.map((group) => (
                <div key={group.category} className="flex flex-wrap items-center gap-2">
                  <span className="text-neptune-700 text-sm font-mono w-28 shrink-0">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(project.liveUrl || project.appStoreUrl || project.githubUrl) && (
          <section className="mb-14">
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary" external>
                  view live
                </Button>
              )}
              {project.appStoreUrl && (
                <Button href={project.appStoreUrl} variant="primary" external>
                  app store
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary" external>
                  source code
                </Button>
              )}
            </div>
          </section>
        )}

        {/* What I learned */}
        {project.learned && (
          <section className="mb-14">
            <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
              what i learned
            </h2>
            <p className="text-neptune-700 text-lg leading-relaxed">
              {project.learned}
            </p>
          </section>
        )}
      </article>
    </PageWrapper>
  );
}
