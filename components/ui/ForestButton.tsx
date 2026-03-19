import Link from "next/link";
import type { ReactNode } from "react";

type ForestButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ForestButton({
  href,
  children,
  variant = "primary",
  className = "",
}: ForestButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-glow/60";

  const styles =
    variant === "primary"
      ? "glow-accent bg-forest-glow/20 text-moonlit hover:bg-forest-glow/30"
      : "border border-moonlit/20 bg-moonlit/5 text-moonlit hover:border-forest-glow/60 hover:text-forest-glow";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
      {children}
    </Link>
  );
}
