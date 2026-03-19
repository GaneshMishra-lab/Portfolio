import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AtmosphereLayers, Reveal, ScrollDepthController } from "@/components/ui";
import { getBlogSummaries } from "@/lib/blog";
import { getAboutContent, getAllProjects, getFeaturedProjects } from "@/lib/content";

export default async function HomePage() {
  await Promise.all([
    getFeaturedProjects(),
    getAllProjects(),
    getAboutContent(),
    getBlogSummaries(),
  ]);

  return (
    <main className="relative min-h-screen overflow-hidden p-2 sm:p-4">
      <div className="parallax-layer absolute inset-0" style={{ "--layer-speed": 0.04 } as CSSProperties}>
            <Image
              src="/forest.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-45"
            />
          </div>
      <ScrollDepthController />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-90">
        <div className="parallax-layer absolute -top-24 left-[8%] h-96 w-96 rounded-full bg-canopy-green/30 blur-3xl" style={{ "--layer-speed": 0.06 } as CSSProperties} />
        <div className="parallax-layer absolute top-[18%] right-[4%] h-[28rem] w-[28rem] rounded-full bg-forest-glow/10 blur-3xl" style={{ "--layer-speed": 0.1 } as CSSProperties} />
        <div className="parallax-layer absolute top-[46%] left-[-8%] h-[24rem] w-[24rem] rounded-full bg-earth-bark/35 blur-3xl" style={{ "--layer-speed": 0.15 } as CSSProperties} />
      </div>
      <AtmosphereLayers />

      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-2xl border border-forest-glow/20 bg-[#05271f]/95 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="parallax-layer absolute inset-0" style={{ "--layer-speed": 0.04 } as CSSProperties}>
            <Image
              src="/forest.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#041e16]/80 via-[#041e16]/62 to-[#03140f]/90" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16, 73, 52, 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 73, 52, 0.22) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-65"
          style={{
            background:
              "linear-gradient(100deg, rgba(5,35,27,0.95) 0%, rgba(5,35,27,0.74) 35%, rgba(4,22,17,0.84) 100%), radial-gradient(circle at 72% 10%, rgba(52,98,76,0.44), transparent 42%), radial-gradient(circle at 58% 28%, rgba(24,58,46,0.5), transparent 50%)",
          }}
        />

        <header className="relative z-10 flex h-14 items-center justify-between border-b border-forest-glow/15 bg-[#0b3226]/75 px-4 sm:px-6">
          <p className="text-sm font-medium text-moonlit/92">Ganesh Mishra</p>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.14em] text-moonlit/70 sm:flex">
             <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em]">
                <Link href="/projects" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Projects</Link>
                <Link href="/achievements" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Achievements</Link>
                <Link href="/blogs" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Blogs</Link>
                <Link href="/about" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">About</Link>
              </div>
          </nav>
          <div className="h-6 w-6 rounded-full border border-forest-glow/40 bg-forest-glow/15" />
        </header>

        <section className="relative z-10 grid min-h-[74vh] grid-cols-1 md:grid-cols-[62px_1fr]">
          <aside className="hidden border-r border-forest-glow/15 bg-[#062e22]/50 md:flex md:flex-col md:items-center md:py-4">
            <div className="mt-4 h-8 w-8 rounded-lg border border-forest-glow/40 bg-forest-glow/15" />
            <div className="mt-14 flex flex-1 flex-col items-center gap-5 text-moonlit/65">
              <span className="text-xs">◉</span>
              <span className="text-xs">○</span>
              <span className="text-xs">✦</span>
              <span className="text-xs">✹</span>
            </div>
          </aside>

          <div className="relative flex flex-col p-5 sm:p-8 lg:p-10">
            <div
              aria-hidden
              className="parallax-layer pointer-events-none absolute inset-0 opacity-25"
              style={{
                "--layer-speed": 0.08,
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, rgba(152,196,170,0.11) 36%, transparent 58%), radial-gradient(circle at 78% 5%, rgba(157,184,167,0.24), transparent 40%), linear-gradient(180deg, rgba(10,54,41,0.5), rgba(5,22,17,0.74))",
              } as CSSProperties}
            />

            <div className="relative max-w-4xl pt-6 sm:pt-10">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.24em] text-forest-glow/80">The Entrance</p>
              </Reveal>
              <Reveal className="stagger-1">
                <h1 className="forest-heading mt-4 text-6xl leading-[0.95] text-moonlit sm:text-7xl lg:text-[6rem]">
                  Ganesh
                  <br />
                  Mishra
                </h1>
              </Reveal>
              <Reveal className="stagger-2">
                <p className="mt-6 max-w-xl text-base text-moonlit/78 sm:text-lg">
                  Curious and systems-oriented developer focused on full-stack products, scalable architecture, and practical execution.
                </p>
              </Reveal>
              <Reveal className="stagger-3">
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="rounded-md  bg-[#123527] from-moonlit/95 to-moonlit/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white  hover:bg-green-900 transition hover:brightness-105"
                  >
                    Walk forward
                  </Link>
                  <a href="#roots" className="text-[11px] uppercase tracking-[0.2em] text-forest-glow/70">
                    Scroll to explore
                  </a>
                </div>
              </Reveal>
            </div>

            {/* <div className="relative mt-10 grid gap-4 md:mt-auto md:grid-cols-[2fr_1fr]">
              <Reveal>
                <article id="roots" className="bark-panel rounded-lg p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-forest-glow/75">Core Philosophy</p>
                  <h2 className="mt-3 text-3xl text-moonlit sm:text-[2.15rem]">
                    Digital Silviculture is the art of nurturing complex ecosystems.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm text-moonlit/75">
                    I treat codebases as living forests requiring careful thinning, sustainable growth, and a deep
                    understanding of the roots that bind every branch.
                  </p>
                </article>
              </Reveal>

              <Reveal className="stagger-1">
                <article id="leaves" className="forest-surface h-full rounded-lg p-5">
                  <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-xl border border-forest-glow/30 bg-forest-glow/10 text-xl">
                    🍃
                  </div>
                  <h3 className="mt-6 text-center text-2xl text-moonlit">Growth Log</h3>
                  <p className="mt-3 text-center text-xs text-moonlit/70">
                    Recent insights from technical understorey.
                  </p>
                  <Link
                    href={latestPost ? `/blogs/${latestPost.slug}` : "/blogs"}
                    className="mt-6 block rounded-md border border-moonlit/10 bg-moonlit/5 px-4 py-2 text-center text-[10px] uppercase tracking-[0.15em] text-moonlit/70 transition hover:border-forest-glow/40 hover:text-forest-glow"
                  >
                    Read entries
                  </Link>
                </article>
              </Reveal>

              <Reveal className="stagger-2">
                <article id="branches" className="forest-surface rounded-lg p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-forest-glow/80">Active Branches</p>
                  <p className="mt-4 text-5xl font-semibold text-moonlit">{allProjects.length}</p>
                  <p className="mt-2 text-xs text-moonlit/65">projects across web, desktop, and mobile</p>
                </article>
              </Reveal>

              <Reveal className="stagger-3">
                <article className="relative overflow-hidden rounded-lg border border-moonlit/10 bg-[#0a3125]/90 p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-45"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 10%, rgba(115,166,139,0.28), transparent 44%), linear-gradient(160deg, rgba(13,52,40,0.6), rgba(5,23,17,0.86))",
                    }}
                  />
                  <div className="relative">
                    <h3 className="text-3xl text-moonlit">Explore the Canopy</h3>
                    <p className="mt-2 text-sm text-moonlit/80">High-level systems architecture and strategic visioning.</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.13em]">
                      <Link href="/projects" className="rounded border border-forest-glow/35 bg-forest-glow/10 px-3 py-1 text-forest-glow/95">Projects</Link>
                      <Link href="/achievements" className="rounded border border-moonlit/20 bg-moonlit/5 px-3 py-1 text-moonlit/80">Achievements</Link>
                      <Link href="/about" id="trunk" className="rounded border border-moonlit/20 bg-moonlit/5 px-3 py-1 text-moonlit/80">About</Link>
                      <Link href="/blogs" id="fruits" className="rounded border border-moonlit/20 bg-moonlit/5 px-3 py-1 text-moonlit/80">Blogs</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div> */}
          </div>
        </section>

        {/* <footer className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-forest-glow/10 bg-[#0a3125]/70 px-4 py-3 text-[10px] uppercase tracking-[0.12em] text-moonlit/45 sm:px-6">
          <div className="flex items-center gap-4">
            <span>Privacy Path</span>
            <span>Growth Log</span>
            <span>Signal</span>
          </div>
          <span>Featured branches {featuredProjects.length} · Total projects {allProjects.length} · Timeline rings {about.timeline.length}</span>
        </footer> */}
      </div>

      {/* <section className="mx-auto mt-6 max-w-[1180px] px-3 pb-10 sm:px-6"> */}
        {/* <Reveal>
          <div className="forest-surface rounded-xl p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/75">Fast route access</p>
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em]">
                <Link href="/projects" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Projects</Link>
                <Link href="/achievements" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Achievements</Link>
                <Link href="/blogs" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">Blogs</Link>
                <Link href="/about" className="rounded border border-moonlit/15 bg-moonlit/5 px-3 py-1 text-moonlit/80">About</Link>
              </div>
            </div>
          </div>
        </Reveal> */}
      {/* </section> */}
    </main>
  );
}
