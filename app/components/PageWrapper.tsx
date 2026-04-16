"use client";

import Nav from "./Nav";
import Footer from "./Footer";
import ScrollProgressBar from "./ScrollProgressBar";
import PageTransition from "./PageTransition";
import CursorProvider from "./CursorProvider";
import TapBurst from "./TapBurst";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <CursorProvider />
      <TapBurst />
      <Nav />
      <main id="main-content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
