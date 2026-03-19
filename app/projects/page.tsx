import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export const metadata = {
  title: "Projects | Ganesh Mishra",
  description: "Project branches from Ganesh Mishra's engineering portfolio.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.26em] text-forest-glow/85">The Branches</p>
        <h1 className="forest-heading text-4xl text-moonlit sm:text-5xl">Projects</h1>
        <p className="mt-4 text-moonlit/85">
          Focused systems work where architecture choices were translated into measurable product outcomes.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="bark-panel glow-soft rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-accent">
            <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/80">{project.metric.label}</p>
            <p className="mt-1 text-2xl font-semibold text-moonlit">{project.metric.value}</p>
            <h2 className="mt-5 text-2xl text-moonlit">{project.title}</h2>
            <p className="mt-3 text-sm text-moonlit/85">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs text-moonlit/75">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-moonlit/20 bg-moonlit/5 px-3 py-1">
                  {tech}
                </li>
              ))}
            </ul>
            <Link
              href={`/projects/${project.id}`}
              className="nav-leaf mt-6 inline-flex items-center text-sm font-medium uppercase tracking-[0.12em] text-forest-glow"
            >
              Enter tree ring notes
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
