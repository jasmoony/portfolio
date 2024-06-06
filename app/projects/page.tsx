import Project from "./project";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
