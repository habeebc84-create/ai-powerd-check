import type { Metadata } from "next";
import { ArrowDown, CalendarClock, Code2, GitPullRequest, ShieldCheck } from "lucide-react";
import { Card, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "How it works — CodeSentinel AI" };

export default function HowItWorksPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="From webhook to verdict, in minutes" />
        <div className="mx-auto mt-12 max-w-3xl space-y-2">
          {[
            { icon: GitPullRequest, title: "Pull request opened", text: "A webhook fires. CodeSentinel fetches the diff plus surrounding repo context — no action needed from the author." },
            { icon: Code2, title: "Agents analyse in parallel", text: "Security, correctness, and performance agents run concurrently, sharing a data-flow graph of the change." },
            { icon: ShieldCheck, title: "Findings are scored & deduplicated", text: "Severity scoring, OWASP/CWE mapping, and deduplication against existing issues happen before anything reaches a human." },
            { icon: GitPullRequest, title: "Inline comments & suggested fixes", text: "Reviewers see ranked findings on the diff, authors apply fixes, and a re-review runs automatically." },
          ].map((s, i) => (
            <div key={s.title}>
              <Card className="flex gap-4"><s.icon className="shrink-0 text-cyan-400" size={24} /><div><h3 className="font-semibold text-white">{s.title}</h3><p className="mt-1 text-sm leading-relaxed text-zinc-400">{s.text}</p></div></Card>
              {i < 3 && <ArrowDown className="mx-auto my-1 text-zinc-600" size={20} aria-hidden />}
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-zinc-800/80 bg-zinc-900/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Workflows" title="Three ways to run CodeSentinel" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card><GitPullRequest className="text-cyan-400" size={24} /><h3 className="mt-3 font-semibold text-white">PR review (default)</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">Every pull request is reviewed automatically, with status checks that can block merge on critical findings.</p></Card>
            <Card><CalendarClock className="text-cyan-400" size={24} /><h3 className="mt-3 font-semibold text-white">Scheduled scans</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">Nightly or weekly full-repo scans catch drift, new dependency vulnerabilities, and config changes between releases.</p></Card>
            <Card><Code2 className="text-cyan-400" size={24} /><h3 className="mt-3 font-semibold text-white">IDE plugin</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">Get the same findings as you type in VS Code — fix issues before they ever become a pull request.</p></Card>
          </div>
          <Card className="mt-10">
            <h3 className="font-semibold text-white">Simple architecture</h3>
            <p className="mt-3 font-mono text-sm leading-loose text-zinc-300">Git host webhook → Review orchestrator → Security / Correctness / Performance agents → Severity &amp; dedup → PR comments + dashboard + audit log</p>
            <p className="mt-3 text-sm text-zinc-500">Your code is processed for review only and is never used to train models. On-prem deployments keep all processing inside your network.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
