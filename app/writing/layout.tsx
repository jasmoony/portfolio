import { Metadata } from "next";

export const metadata: Metadata = {
  title: "writing — jasmine tusveld",
  description:
    "things that inspired me this week.",
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
