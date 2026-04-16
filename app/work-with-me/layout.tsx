import { Metadata } from "next";

export const metadata: Metadata = {
  title: "work with me — jasmine tusveld",
  description:
    "mvp builds and personal websites. i help founders and small teams take ideas from concept to shipped product.",
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
