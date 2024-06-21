"use client";

import MenuBar from "./menubar/page";
import ScrollAnimation from "./scrollanimation";

{
  /* favicon toevoegen */
}

export default function Home() {
  return (
    <div>
      <ScrollAnimation />
      <div>
        <MenuBar />
      </div>
      <>
        <div className="flex flex-col justify-center items-center">
          <div className="text-neptune-400 font-extrabold text-8xl p-12">
            hi! i'm jasmine.
          </div>
          <div className="flex flex-col justify-center items-center text-neptune-400 text-6xl p-12">
            <div className="relative group">
              <span id="career" className="leading-none	">
                product manager
              </span>
              <div
                id="stripe"
                className="w-0 h-2 top-1/2 left-0 transition-[width] group-hover:w-full bg-neptune-400 absolute"
              ></div>
            </div>
            <span className="ml-2"> turned</span>
            <div className="relative group">
              <a
                href="https://github.com/jasmoony"
                className="hover:font-bold hover:text-mypink-700 hover:italic ml-2"
              >
                software engineer
              </a>{" "}
              <div
                id="underline"
                className="w-0 h-2 bottom-0 left-0 transition-[width] group-hover:w-full bg-mypink-700 absolute"
              ></div>
            </div>
            <span className="text-center">with a love for</span>
            <div className="relative group">
              <div
                id="sparkle"
                className="opacity-0 top-0 right-0 translate-x-full group-hover:opacity-100 absolute animate-pulse"
              >
                ✨
              </div>
              <span className="">magical stories,</span>
              <div
                id="sparkle"
                className="opacity-0 top-0 left-0 -translate-x-full group-hover:opacity-100 absolute animate-pulse"
              >
                ✨
              </div>
            </div>
            <span className="hover:text-amber-950	">oat milk cappuccinos</span>
            <div className="relative group">
              <span className="">and the beach</span>
              <div className="top-0 right-0 translate-x-full absolute group-hover:animate-spin repeat-2">
                🏄‍♀️
              </div>{" "}
            </div>
          </div>
        </div>
      </>

      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
}
