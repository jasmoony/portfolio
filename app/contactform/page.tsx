import Link from "next/link";
import MenuBar from "../menubar/page";

export default function ContactForm() {
  return (
    <div>
      {" "}
      <MenuBar />
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
        {" "}
        <div className="flex flex-col justify-center items-center p-4">
          <div className="text-neptune-400 font-bold text-2xl">
            let's get in touch!
          </div>
          <div className="flex flex-row justify-center items-center p-4 text-neptune-700">
            <div className="p-2 hover:underline">
              <Link href="https://www.linkedin.com/in/jasmine-tusveld/">
                linkedin
              </Link>
            </div>
            <div className="p-2 hover:underline">
              <Link href="mailto:jasminetusveld@gmail.com">email</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
