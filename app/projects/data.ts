import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "4",
    title: "boekhoek",
    slug: "boekhoek",
    tagline: "a marketplace for secondhand books",
    description:
      "the existing platforms for buying and selling secondhand books in the netherlands are clunky, overpriced, or buried inside general marketplace apps. boekhoek is a dedicated marketplace that makes it easy to find your next read and sell the ones you're done with — with built-in letterbox shipping so books actually arrive.",
    role: " i designed the app in figma, built the full ios app in swift/swiftui, and wrote the backend in bun with postgres. i also handled the myparcel integration for shipping labels and stripe for payments.",
    keyDecisions: [
      {
        title: "swift & swiftui",
        description:
          "native ios for the best user experience. swiftui made it fast to iterate on the ui while keeping things smooth and responsive.",
      },
      {
        title: "bun + postgres on hetzner",
        description:
          "lightweight and fast backend. hetzner keeps hosting costs low while bun handles requests efficiently. planetscale postgres for reliable data storage.",
      },
      {
        title: "myparcel for letterbox shipping",
        description:
          "books fit through a letterbox — no need to be home for delivery. myparcel integration generates shipping labels automatically.",
      },
    ],
    techStack: [
      { category: "ios", items: ["Swift", "SwiftUI"] },
      { category: "backend", items: ["Bun", "PostgreSQL", "Hetzner"] },
      { category: "integrations", items: ["MyParcel", "iDEAL"] },
      { category: "design", items: ["Figma"] },
    ],
    screenshots: ["/boekhoek1.png", "/boekhoek2.png"],
    learned:
      "building a two-sided marketplace taught me a lot about keeping scope tight. the biggest lesson was around shipping integration — what seems like a simple api call turns into edge case after edge case. i also learned that designing for trust matters more than designing for features when you're asking people to pay strangers for books.",
    cursorEmoji: "📚",
    previewContain: true,
  },
  {
    id: "3",
    title: "huphup",
    slug: "huphup",
    tagline: "a cheering app for runners and their friends",
    description:
      "running can be lonely, especially on long training runs or even a race. huphup lets friends record voice cheers that play live while you're running, so you get a personal cheer squad anytime, anywhere",
    role: "designed and built the ios app in swift/swiftui, the friend web app in vanilla html/js on cloudflare pages, and the api backend in bun with postgres.",
    keyDecisions: [
      {
        title: "voice-first, not text",
        description:
          "a voice message from a friend hits different than a push notification. the core bet is that audio cheers feel personal enough to actually motivate.",
      },
      {
        title: "friend webapp with no account required",
        description:
          "friends shouldn't need to download an app just to record a 10-second cheer. a simple web page with a share link keeps the barrier as low as possible.",
      },
      {
        title: "live cheers",
        description:
          "using polling, the cheers are immediately played after recording.",
      },
    ],
    techStack: [
      { category: "ios", items: ["Swift", "SwiftUI"] },
      { category: "backend", items: ["Bun", "PostgreSQL", "Hetzner"] },
      { category: "web", items: ["HTML", "JavaScript", "Cloudflare Pages"] },
      { category: "design", items: ["Figma"] },
    ],
    screenshots: ["/huphup1.png", "/huphup2.png", "/huphup3.png"],
    learned:
      "audio handling on ios is trickier than expected — background playback, interruption handling, and audio session categories all need careful setup. i also learned that the social loop (runner shares link → friend records cheer → runner hears it) needs to be frictionless or people drop off at every step.",
    cursorEmoji: "👟",
    previewContain: true,
  },
  {
    id: "2",
    title: "mixtapes",
    slug: "mixtapes",
    tagline: "customize your playlists and share them with friends",
    description:
      "mixtapes lets you take your playlists and make them personal — add custom covers, descriptions, and share them as beautiful cards with friends. because a playlist deserves more than a default spotify thumbnail.",
    role: "built the full ios app including playlist customization, image upload, and sharing functionality.",
    keyDecisions: [
      {
        title: "ios-app",
        description:
          "building natively with swift makes sure the app works great together with spotify.",
      },
      {
        title: "focus on the visual",
        description:
          "the whole point is making playlists feel like a gift. custom covers and card layouts make sharing feel intentional, not just a link dump.",
      },
    ],
    techStack: [
      { category: "ios", items: ["Swift", "SwiftUI"] },
      { category: "backend", items: ["Bun", "PostgreSQL", "Hetzner"] },
      { category: "design", items: ["Figma"] },
    ],
    screenshots: ["/mixtapes1.png", "/mixtapes2.png"],
    learned:
      "image handling and canvas manipulation for custom covers was a fun challenge. also learned that social features need to feel effortless — if sharing takes more than two taps, people won't do it.",
    cursorEmoji: "🎵",
    previewContain: true,
  },
  {
    id: "1",
    title: "taylor swift surprise song generator",
    slug: "taylor-swift",
    tagline: "generating surprise song images from her eras tour",
    description:
      "during taylor swift's eras tour, she played surprise songs at every show. this generator creates shareable images of surprise song combinations — built as a fun project to ship something fast.",
    role: "built and shipped the whole thing in a weekend.",
    keyDecisions: [
      {
        title: "ship fast, keep it fun",
        description:
          "this was intentionally a weekend project. no overengineering — just a clean ui that does one thing well and makes swifties smile.",
      },
      {
        title: "shareable image output",
        description:
          "the generated images are designed to be screenshot-friendly and shareable on social media. that's the whole distribution strategy.",
      },
    ],
    techStack: [
      { category: "web", items: ["React", "Next.js", "TypeScript"] },
      { category: "styling", items: ["Tailwind CSS"] },
    ],
    screenshots: ["/swiftie1.png", "/swiftie2.png"],
    learned:
      "needed to work with taylors entire discography, which was a lot of data.",
    cursorEmoji: "✨",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
