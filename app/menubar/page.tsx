import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="flex flex-row-reverse text-neptune-700">
      <div className="p-8">
        👋 say hi:
        <a
          href="mailto:jmstusveld@gmail.com?subject:Hello!"
          className="ml-2 hover:text-mypink-900"
        >
          email
        </a>{" "}
        ||{" "}
        <a
          href="https://linkedin.com/in/jasmine-tusveld"
          className="hover:text-mypink-900"
        >
          linkedin
        </a>
      </div>
    </div>
  );
}
