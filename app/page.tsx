import MenuBar from "./menubar/page";
import ScrollAnimation from "./scrollanimation";

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
            <div className="flex flex-wrap items-center justify-center">
              <div className="hover:line-through">product manager</div>
              <div className="ml-2"> turned</div>
              <a
                href="https://github.com/jasmoony"
                className="hover:font-bold hover:underline hover:text-mypink-700 hover:italic ml-2"
              >
                software engineer
              </a>
              <div className="text-center">with a love for</div>
              <div className="ml-2">magical stories,</div>
              <div className="hover:text-amber-950	">oat milk cappuccinos</div>
              <div className="ml-2">and the beach</div>
              <div className="ml-2 hover:animate-spin">🏄‍♀️</div>
            </div>
          </div>
        </div>
      </>

      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
}
