import { Metadata } from "next";

export const metadata: Metadata = {
  title: "writing — jasmine tusveld",
  description:
    "things i've learned, built, and thought about. notes from a self-taught developer.",
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
