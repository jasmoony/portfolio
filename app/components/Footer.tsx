import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neptune-100/20 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2 text-sm text-neptune-700">
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              twitter
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              github
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              linkedin
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} jasmine tusveld. built with
            next.js
          </p>
        </div>
        <div className="flex gap-4 text-sm text-neptune-700">
          <Link href="/colophon" className="link-underline">
            colophon
          </Link>
          <Link href="/now" className="link-underline">
            /now
          </Link>
        </div>
      </div>
    </footer>
  );
}
