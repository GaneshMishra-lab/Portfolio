import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogFrontmatter, BlogSummary } from "@/lib/types";

const blogRoot = path.join(process.cwd(), "content", "blog");

function frontmatterFromContent(source: string): BlogFrontmatter {
  const parsed = matter(source);
  return {
    title: String(parsed.data.title ?? "Untitled"),
    description: String(parsed.data.description ?? ""),
    date: String(parsed.data.date ?? "1970-01-01"),
    tags: Array.isArray(parsed.data.tags)
      ? parsed.data.tags.map((tag: unknown) => String(tag))
      : [],
    published: Boolean(parsed.data.published ?? false),
  };
}

export async function getBlogSummaries(): Promise<BlogSummary[]> {
  const fileNames = await fs.readdir(blogRoot);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  const summaries = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const source = await fs.readFile(path.join(blogRoot, fileName), "utf8");
      const frontmatter = frontmatterFromContent(source);

      return {
        slug,
        ...frontmatter,
      } satisfies BlogSummary;
    })
  );

  return summaries
    .filter((post) => post.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogSlugs(): Promise<string[]> {
  const summaries = await getBlogSummaries();
  return summaries.map((summary) => summary.slug);
}

export async function getBlogBySlug(slug: string) {
  const absolutePath = path.join(blogRoot, `${slug}.mdx`);

  try {
    const source = await fs.readFile(absolutePath, "utf8");

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source,
      options: {
        parseFrontmatter: true,
      },
    });

    return { content, frontmatter };
  } catch {
    return null;
  }
}
