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
          <div className="text-neptune-400 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8">
            hi! i'm jasmine.
          </div>
          <div className="text-neptune-400 font-normal text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            welcome to my little corner on the internet. i am a programmer with
            a business degree and a background in product management. i'm
            learning how to code, next to raising a tiny human. and where
            there's time left, i like to read, knit or go to the beach.
          </div>
        </div>
      </>

      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
}
