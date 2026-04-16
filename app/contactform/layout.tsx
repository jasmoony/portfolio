import { Metadata } from "next";

export const metadata: Metadata = {
  title: "say hi — jasmine tusveld",
  description: "let's get in touch",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
