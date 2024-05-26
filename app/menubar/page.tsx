import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="flex flex-row-reverse text-neptune-700">
      <div className="p-8">
        <Link href="/contactform">contact</Link>{" "}
      </div>
      <div className="p-8">
        <Link href="/projects">projects</Link>{" "}
      </div>
      <div className="p-8">
        <Link href="/about">about</Link>
      </div>
    </div>
  );
}
