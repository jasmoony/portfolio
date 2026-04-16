import { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects — jasmine tusveld",
  description:
    "personal projects and case studies. ios apps, web apps, and weekend experiments.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
