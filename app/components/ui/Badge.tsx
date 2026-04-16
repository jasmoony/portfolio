import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block px-3 py-1 text-xs font-mono bg-neptune-100 text-neptune-700 rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
}
