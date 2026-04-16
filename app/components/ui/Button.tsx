import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded-full text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 hover:shadow-card",
    secondary:
      "border border-neptune-200 text-neptune-700 hover:border-accent hover:text-accent",
  };

  const classes = clsx(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
