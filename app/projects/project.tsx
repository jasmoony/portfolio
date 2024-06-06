import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-col bg-neptune-100">
        <Image
          className="self-center"
          src="/bettysbooks.png"
          width={500}
          height={500}
          alt="Screenshot Betty's Books"
        />{" "}
      </div>
      <h1 className="text-neptune-400 font-semibold">betty's books</h1>
      <p className="text-neptune-900">
        currently building my dream project: an online community for book clubs{" "}
      </p>
    </div>
  );
}
