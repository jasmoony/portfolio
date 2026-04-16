import Image from "next/image";
import PageWrapper from "../components/PageWrapper";
import Badge from "../components/ui/Badge";
import { SOCIAL_LINKS } from "../lib/constants";

const techStack = [
  { category: "ios", items: ["Swift", "SwiftUI"] },
  { category: "web", items: ["React", "Next.js", "TypeScript"] },
  { category: "backend", items: ["Node.js", "PostgreSQL"] },
  { category: "design", items: ["Figma"] },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        {/* Headshot */}
        <div className="mb-14 relative">
          <Image
            src="/jasminefoto.jpeg"
            alt="jasmine tusveld"
            width={240}
            height={240}
            className="rounded-2xl shadow-card object-cover"
            priority
          />
          {/* TODO: re-add arrow once we have a transparent PNG */}
          <div className="absolute -bottom-6 left-0">
            <span className="font-serif text-neptune-900 text-2xl italic whitespace-nowrap">
              this is me
            </span>
          </div>
        </div>

        {/* About text */}
        <div className="space-y-6 text-neptune-700 text-lg leading-relaxed mb-16">
          <p>
            for years i worked as a product manager. i loved the work — taking
            an idea, arguing about it, shaping it, and watching it ship. but i
            spent every day handing ideas off to engineers and then sitting on my
            hands while they built them. eventually i got tired of sitting on my
            hands.
          </p>
          <p>
            so i quit my job and spent two years teaching myself to code.
            building my own apps. breaking things. fixing them. finding out what
            engineers actually mean when they say "it's not that simple."
          </p>
          <p>
            now i do both. i help founders and small teams take the thing
            they've been thinking about and actually ship it — scoping,
            designing, and building it as one person instead of three. no
            translation layer. no telephone game.
          </p>
          <p className="text-neptune-700 italic">
            (i also still argue about product decisions. it's in my nature.)
          </p>
        </div>

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-6">
            tech stack
          </h2>
          <div className="space-y-4">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-neptune-700 text-sm font-mono w-24 shrink-0">
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

        {/* Social links */}
        <section>
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            elsewhere
          </h2>
          <div className="flex gap-6 text-neptune-700">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-accent"
            >
              twitter
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-accent"
            >
              github
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-accent"
            >
              linkedin
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
