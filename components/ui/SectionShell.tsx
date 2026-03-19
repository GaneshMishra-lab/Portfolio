import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <header className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-forest-glow/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="forest-heading text-3xl font-semibold text-moonlit sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base text-moonlit/85 sm:text-lg">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
