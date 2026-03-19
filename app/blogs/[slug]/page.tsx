import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogSlugs, getBlogSummaries } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const summaries = await getBlogSummaries();
  const summary = summaries.find((item) => item.slug === slug);

  if (!summary) {
    return {
      title: "Blog not found | Ganesh Mishra",
    };
  }

  return {
    title: `${summary.title} | Ganesh Mishra`,
    description: summary.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:px-10">
      <article className="forest-surface rounded-3xl p-7 sm:p-10">
        <header className="border-b border-moonlit/15 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-forest-glow/80">
            {new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h1 className="forest-heading mt-4 text-4xl text-moonlit sm:text-5xl">{post.frontmatter.title}</h1>
          <p className="mt-4 text-moonlit/85">{post.frontmatter.description}</p>
        </header>

        <div className="mt-8 grid gap-4 text-moonlit/85 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:text-moonlit [&_li]:ml-5 [&_li]:list-decimal [&_p]:leading-8">
          {post.content}
        </div>
      </article>
    </main>
  );
}
