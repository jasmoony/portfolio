"use client";

import Image from "next/image";
import Link from "next/link";
import PageWrapper from "./components/PageWrapper";
import Button from "./components/ui/Button";
import { getAllProjects } from "./projects/data";

export default function Home() {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <h1 className="font-serif text-display-xl md:text-[4rem] text-neptune-400 mb-6 leading-[1.1]">
              hi, i'm jasmine.
            </h1>
            <p className="text-neptune-700 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              welcome to my little corner on the internet. i help people ship
              the thing they've been thinking about. i'm a self taught software
              engineer with over 6 years experience working in product
              management and business development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contactform" variant="primary">
                book a call
              </Button>
              <Button href="/projects" variant="secondary">
                see recent work
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/beach.jpg"
              alt="jasmine at the beach"
              width={320}
              height={320}
              className="rounded-2xl shadow-card object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services split */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-12 text-center">
            how i can help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mypink-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="font-serif text-2xl text-neptune-900 mb-3">
                mvp builds
              </h3>
              <p className="text-neptune-700 leading-relaxed mb-6">
                go from idea to launched product. i handle scoping, design, and
                development — one person instead of three. perfect for founders
                who want to validate fast.
              </p>
              <Link
                href="/work-with-me"
                className="text-accent font-medium link-underline"
              >
                learn more &rarr;
              </Link>
            </div>
            <div className="bg-mypink-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="font-serif text-2xl text-neptune-900 mb-3">
                personal websites
              </h3>
              <p className="text-neptune-700 leading-relaxed mb-6">
                let's built the website you've always wanted. clean, fast, with
                an unexpected touch that makes people remember it. seo-ready by
                default.
              </p>
              <Link
                href="/work-with-me"
                className="text-accent font-medium link-underline"
              >
                learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-12 text-center">
            recent work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
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
                  <p className="text-neptune-700 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
