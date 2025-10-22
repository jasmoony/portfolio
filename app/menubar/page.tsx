import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="flex flex-row-reverse text-neptune-700">
      <div className="p-8">say hi</div>
      <Link className="p-8" href="/blog">
        this week i learned
      </Link>
      <div className="p-8">home</div>
    </div>
  );
}
