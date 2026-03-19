import Link from "next/link";
import { getBlogSummaries } from "@/lib/blog";

export const metadata = {
  title: "Blogs | Ganesh Mishra",
  description: "MDX writing notes and engineering essays by Ganesh Mishra.",
};

export default async function BlogsPage() {
  const posts = await getBlogSummaries();

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.26em] text-forest-glow/85">The Clearing</p>
        <h1 className="forest-heading text-4xl text-moonlit sm:text-5xl">Blogs</h1>
        <p className="mt-4 text-moonlit/85">
          Long-form notes on architecture, product systems, and practical engineering trade-offs.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="forest-surface rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/80">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-3 text-3xl text-moonlit">{post.title}</h2>
            <p className="mt-3 text-moonlit/85">{post.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-moonlit/20 px-3 py-1 text-xs text-moonlit/80">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blogs/${post.slug}`} className="nav-leaf mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-forest-glow">
              Read entry
            </Link>
          </article>
        ))}
      </div>

      {posts.length <= 1 ? (
        <section className="relative mt-10 overflow-hidden rounded-3xl border border-moonlit/15 bg-black/25 p-8">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="fog-overlay absolute left-8 top-8 h-44 w-44 rounded-full blur-3xl" />
          </div>
          <div className="relative flex items-center gap-5">
            <div className="h-10 w-10 rounded-full bg-forest-glow/35 shadow-[0_0_40px_rgba(46,204,113,0.45)]" />
            <div>
              <h3 className="text-2xl text-moonlit">A lantern waits in the clearing</h3>
              <p className="mt-2 text-moonlit/80">
                More essays are being distilled from recent project journeys. New writing will appear here soon.
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
