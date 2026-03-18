"use client";

import MenuBar from "../menubar/page";
import ScrollAnimation from "../scrollanimation";

export default function AboutPage() {
  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>

      <div className="flex flex-col items-center min-h-screen py-16 px-4">
        <div className="max-w-2xl w-full space-y-12">
          <div>
            <h2 className="text-neptune-400 font-bold text-2xl md:text-3xl mb-4">
              tl;dr
            </h2>
            <p className="text-neptune-700 text-lg leading-relaxed">
              i'm all about creating web apps that leave a smile on people's
              faces by adding just that extra unexpected touch.
            </p>
          </div>

          <div>
            <h2 className="text-neptune-400 font-bold text-2xl md:text-3xl mb-4">
              a little bit more about me...
            </h2>
            <p className="text-neptune-700 text-lg leading-relaxed">
              working as a product manager. i love creating products by starting
              with a simple idea and leading it to a realised product. however i
              always felt my own hands itching when talking to the developers, so
              i have decided to become a software engineer. with my experiences
              in both fields combined, my goal is to help others to actually
              create what has been stuck in their minds.
            </p>
          </div>

          <div>
            <h2 className="text-neptune-400 font-bold text-2xl md:text-3xl mb-4">
              tech stack
            </h2>
            <p className="text-neptune-700 text-lg leading-relaxed">
              swift, react, javascript, html/css, typescript, SQL, Node.js, Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
