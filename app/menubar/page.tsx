import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="flex flex-row-reverse text-neptune-700">
      <Link className="p-8" href="/contactform">
        say hi
      </Link>
      <Link className="p-8" href="/blog">
        this week i learned
      </Link>
      <Link className="p-8" href="/">
        home
      </Link>
    </div>
  );
}
