import { getAboutContent } from "@/lib/content";

export const metadata = {
  title: "About | Ganesh Mishra",
  description: "Roots, trunk, and branches of Ganesh Mishra's growth as a systems-minded developer.",
};

export default async function AboutPage() {
  const about = await getAboutContent();

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.26em] text-forest-glow/85">The Trunk</p>
        <h1 className="forest-heading text-4xl text-moonlit sm:text-5xl">{about.name}</h1>
        <p className="mt-2 text-lg text-moonlit/85">{about.role}</p>
        <p className="mt-4 text-moonlit/85">{about.bio}</p>
      </header>

      <section className="forest-surface rounded-2xl p-6">
        <h2 className="text-2xl text-moonlit">Focus areas</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {about.focusAreas.map((area) => (
            <li key={area} className="rounded-xl border border-moonlit/15 bg-black/20 px-4 py-3 text-sm text-moonlit/85">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 forest-surface rounded-2xl p-6">
        <h2 className="text-2xl text-moonlit">Contact</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a href={`mailto:${about.contacts.email}`} className="rounded-xl border border-moonlit/15 bg-black/20 px-4 py-3 text-sm text-moonlit/85 hover:border-forest-glow/50">
            {about.contacts.email}
          </a>
          <a href={`tel:${about.contacts.phone}`} className="rounded-xl border border-moonlit/15 bg-black/20 px-4 py-3 text-sm text-moonlit/85 hover:border-forest-glow/50">
            {about.contacts.phone}
          </a>
          <a href={about.contacts.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-moonlit/15 bg-black/20 px-4 py-3 text-sm text-moonlit/85 hover:border-forest-glow/50">
            LinkedIn profile
          </a>
          <a href={about.contacts.github} target="_blank" rel="noreferrer" className="rounded-xl border border-moonlit/15 bg-black/20 px-4 py-3 text-sm text-moonlit/85 hover:border-forest-glow/50">
            GitHub profile
          </a>
        </div>
      </section>

      <section className="mt-8 forest-surface rounded-2xl p-6">
        <h2 className="text-2xl text-moonlit">Education</h2>
        <div className="mt-5 grid gap-4">
          {about.education.map((entry) => (
            <article key={entry.title} className="rounded-xl border border-moonlit/15 bg-black/20 p-4">
              <h3 className="text-lg text-moonlit">{entry.title}</h3>
              <p className="mt-2 text-sm text-moonlit/80">{entry.institute}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-forest-glow/75">{entry.period}</p>
              <p className="mt-2 text-sm text-moonlit/85">{entry.score}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 forest-surface rounded-2xl p-6">
        <h2 className="text-2xl text-moonlit">Experience</h2>
        <div className="mt-5 grid gap-4">
          {about.experience.map((entry) => (
            <article key={`${entry.role}-${entry.company}`} className="rounded-xl border border-moonlit/15 bg-black/20 p-4">
              <h3 className="text-lg text-moonlit">{entry.role}</h3>
              <p className="mt-1 text-sm text-moonlit/80">{entry.company}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-forest-glow/75">{entry.period}</p>
              <ul className="mt-3 grid gap-2 text-sm text-moonlit/85">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-md border border-moonlit/10 bg-black/20 px-3 py-2">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 forest-surface rounded-2xl p-6">
        <h2 className="text-2xl text-moonlit">Growth timeline</h2>
        <ol className="mt-5 grid gap-5">
          {about.timeline.map((entry) => (
            <li key={entry.title} className="grid gap-3 rounded-xl border border-moonlit/15 bg-black/20 p-4 sm:grid-cols-[140px_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/80">{entry.phase}</p>
                <p className="mt-2 text-sm text-moonlit/75">{entry.period}</p>
              </div>
              <div>
                <h3 className="text-xl text-moonlit">{entry.title}</h3>
                <p className="mt-2 text-sm text-moonlit/85">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
