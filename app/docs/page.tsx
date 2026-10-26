import type { Metadata } from "next";
import Link from "next/link";
import { Card, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Docs — CodeSentinel AI" };

const SECTIONS = [
  { title: "Getting started", links: ["Install the GitHub app", "Connect your first repository", "Your first AI review", "Configure status checks"] },
  { title: "API reference", links: ["Authentication", "List findings", "Trigger a scan", "Webhooks"] },
  { title: "Guides", links: ["Custom rules & policies", "Blocking merges on critical findings", "Compliance reports for SOC 2", "Self-hosted deployment"] },
];

export default function DocsPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Documentation" title="Docs & API reference" sub="This is the docs landing structure — each section below maps to the full guides that ship with the product. Start with getting started, then explore the API." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SECTIONS.map((s) => (
            <Card key={s.title}>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.links.map((l) => (
                  <li key={l}><Link href="/docs" className="text-sm text-cyan-300 hover:text-cyan-200">{l} →</Link></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Card className="mt-8">
          <h3 className="font-semibold text-white">Quick start</h3>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-sm text-zinc-300"><code>{`# 1. Install the app on your git host
# 2. Select repositories to review
# 3. Open a pull request — your first AI review appears in minutes
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.codes`}</code></pre>
        </Card>
      </section>
    </div>
  );
}
