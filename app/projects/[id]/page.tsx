import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, getProjectIds } from "@/lib/content";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = await getProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: "Project not found | Ganesh Mishra",
    };
  }

  return {
    title: `${project.title} | Ganesh Mishra`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
      <article className="forest-surface rounded-3xl p-7 sm:p-10">
        <header className="border-b border-moonlit/15 pb-8">
          <p className="text-xs uppercase tracking-[0.26em] text-forest-glow/85">Inside the Tree</p>
          <h1 className="forest-heading mt-4 text-4xl text-moonlit sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-moonlit/85">{project.description}</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-forest-glow/40 bg-forest-glow/15 px-4 py-2 text-sm">
            <span className="font-medium text-moonlit">{project.metric.label}</span>
            <span className="text-forest-glow">{project.metric.value}</span>
          </div>
        </header>

        <div className="mt-8 grid gap-7">
          <section>
            <h2 className="text-2xl text-moonlit">Problem</h2>
            <p className="mt-3 text-moonlit/85">{project.story.problem}</p>
          </section>
          <section>
            <h2 className="text-2xl text-moonlit">Approach</h2>
            <p className="mt-3 text-moonlit/85">{project.story.approach}</p>
          </section>
          <section>
            <h2 className="text-2xl text-moonlit">Architecture</h2>
            <p className="mt-3 rounded-xl border border-moonlit/15 bg-black/20 p-4 font-mono text-sm text-moonlit/90">
              {project.story.architecture}
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-moonlit">Results</h2>
            <p className="mt-3 text-moonlit/85">{project.story.results}</p>
          </section>
        </div>
      </article>
    </main>
  );
}
