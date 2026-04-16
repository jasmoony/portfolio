import PageWrapper from "../components/PageWrapper";
import { SOCIAL_LINKS } from "../lib/constants";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-4">
          say hi
        </h1>
        <p className="text-neptune-700 text-lg mb-12">
          {" "}
          i'd love to hear from you.
        </p>

        <div className="space-y-6">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="group block bg-mypink-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="font-mono text-sm text-neptune-400 mb-1">email</div>
            <div className="text-accent text-lg group-hover:text-accent-dark transition-colors">
              {SOCIAL_LINKS.email}
            </div>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-mypink-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="font-mono text-sm text-neptune-400 mb-1">
              linkedin
            </div>
            <div className="text-accent text-lg group-hover:text-accent-dark transition-colors">
              jasmine tusveld
            </div>
          </a>

          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-mypink-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="font-mono text-sm text-neptune-400 mb-1">
              twitter
            </div>
            <div className="text-accent text-lg group-hover:text-accent-dark transition-colors">
              @jasmoony1
            </div>
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
