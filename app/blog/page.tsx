import type { Metadata } from "next";
import Link from "next/link";
import { Card, SectionHeading } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = { title: "Blog — CodeSentinel AI" };

export default function BlogPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Blog" title="Notes on secure, fast engineering" sub="Practical posts on vulnerabilities, review workflows, and the AI behind CodeSentinel. Full articles are published here as the blog grows." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <article key={p.slug}>
              <Link href="/blog" aria-label={`Read: ${p.title}`}>
                <Card className="h-full transition hover:border-cyan-500/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{p.category} · {p.readTime}</p>
                  <h3 className="mt-3 font-semibold leading-snug text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-zinc-500">{p.date}</p>
                </Card>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
