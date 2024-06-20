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
            <div className="ml-2 cursor-pointer "> turned</div>
            <a
              href="https://github.com/jasmoony"
              className="hover:font-bold hover:underline hover:text-mypink-700 hover:italic ml-2"
            >
              software engineer
            </a>{" "}
            {/* transitie versoepelen */}
            <div className="text-center">with a love for</div>
            <div className="ml-2">magical stories,</div>
            <div className="hover:text-amber-950	">oat milk cappuccinos</div>
            <div className="ml-2">and the beach</div>
            <div className="ml-2 hover:animate-spin">🏄‍♀️</div>{" "}
            {/* hit area groter maken */}
          </div>
        </div>
      </>

      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
}
