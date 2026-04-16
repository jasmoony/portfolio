import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about — jasmine tusveld",
  description:
    "self-taught software engineer with 6+ years in product management. i help founders ship the thing they've been thinking about.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
