import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-screen">
      <div className="m-4 w-full md:w-3/4 lg:w-1/2">
        <div className="text-neptune-400 font-bold text-xl">tl;dr</div>
        <div className="text-neptune-700 ">
          product manager turned software engineer. all about creating web apps
          that leave a smile on people's faces by adding just that extra
          unexpected touch.
        </div>
      </div>
      <div className="m-4 w-full md:w-3/4 lg:w-1/2">
        <div className="text-neptune-400 font-bold text-xl">
          a little bit more about me...
        </div>
        <div className="text-neptune-700">
          working as a product manager. i love creating products by starting
          with a simple idea and leading it to a realised product. however i
          always felt my own hands itching when talking to the developers, so i
          have decided to become a software engineer. with my experiences in
          both fields combined, my dream is to help others to actually create
          what has been stuck in their minds. always with a focus on the user,
          and creating an unforgettable experience.
        </div>
      </div>
      <div className="m-4 w-full md:w-3/4 lg:w-1/2">
        <div className="text-neptune-400 font-bold text-xl">tech stack</div>
        <div className="text-neptune-700">
          react, javascript, html/css, typescript, SQL, Node.js, Git
        </div>
      </div>
    </div>
  );
}
