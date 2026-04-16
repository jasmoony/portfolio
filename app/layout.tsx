import type { Metadata } from "next";
import { inter, fraunces, jetbrainsMono } from "./lib/fonts";
import KonamiListener from "./components/konami/KonamiListener";
import "./globals.css";

export const metadata: Metadata = {
  title: "jasmine tusveld — software engineer",
  description:
    "i help people ship the thing they've been thinking about. self-taught software engineer with a background in product management.",
  icons: {
    icon: [
      { url: "/cloud.png", sizes: "32x32", type: "image/png" },
      { url: "/cloud.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/cloud.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          skip to content
        </a>
        {children}
        <KonamiListener />
      </body>
    </html>
  );
}
