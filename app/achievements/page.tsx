import { getAchievements } from "@/lib/content";

export const metadata = {
  title: "Achievements | Ganesh Mishra",
  description: "Research, performance, and hackathon milestones from Ganesh Mishra.",
};

export default async function AchievementsPage() {
  const groups = await getAchievements();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.26em] text-forest-glow/85">The Fruits</p>
        <h1 className="forest-heading text-4xl text-moonlit sm:text-5xl">Achievements</h1>
        <p className="mt-4 text-moonlit/85">
          Milestones grouped as harvests: evidence of sustained growth across systems, speed, and experimentation.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
          <section key={group.category} className="forest-surface rounded-2xl p-6">
            <h2 className="text-2xl text-moonlit">{group.category}</h2>
            <ul className="mt-5 grid gap-4">
              {group.items.map((item) => (
                <li key={`${item.title}-${item.year}`} className="rounded-xl border border-moonlit/15 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/80">{item.year}</p>
                  <h3 className="mt-2 text-lg text-moonlit">{item.title}</h3>
                  <p className="mt-2 text-sm text-moonlit/80">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
