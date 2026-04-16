import { clsx } from "clsx";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={clsx(
        "font-serif text-neptune-900",
        Tag === "h1" && "text-display-xl",
        Tag === "h2" && "text-display-lg",
        Tag === "h3" && "text-2xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
