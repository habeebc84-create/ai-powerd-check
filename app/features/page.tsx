import type { Metadata } from "next";
import { Bug, Gauge, KeyRound, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Card, SectionHeading } from "@/components/ui";
import { LANGUAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Features — CodeSentinel AI" };

const DETAILS = [
  { icon: ShieldCheck, title: "Vulnerability detection", description: "OWASP Top 10, CWE, secrets, and misconfigurations — each finding includes severity, exploit path, and evidence. Platform accuracy claims are based on internal benchmarks against labelled open-source vulnerability datasets; results vary by codebase." },
  { icon: Sparkles, title: "Auto-fix suggestions", description: "Minimal, behaviour-preserving patches with explanations. Safe fixes apply in one click; riskier ones arrive as reviewable diffs." },
  { icon: Bug, title: "Bug & correctness review", description: "Logic errors, null handling, concurrency hazards, and API misuse — flagged with the execution path that triggers them." },
  { icon: Gauge, title: "Performance review", description: "Queries, loops, and API patterns that degrade at scale, ranked by expected production impact rather than style preference." },
  { icon: KeyRound, title: "Secrets & supply chain", description: "Leaked credentials and vulnerable dependencies, with fixed versions and rotation steps for exposed secrets." },
  { icon: Workflow, title: "Custom policies", description: "Turn team conventions into enforceable rules, scoped per repo, team, or organisation." },
];

export default function FeaturesPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Features" title="Deep review, not shallow linting" sub="Every capability below runs on every pull request — no separate tools, no separate queues." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((f) => <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />)}
        </div>
      </section>
      <section className="border-t border-zinc-800/80 bg-zinc-900/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Language support" title="Ten languages, first-class — not an afterthought" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead><tr className="border-b border-zinc-800 text-zinc-400"><th className="py-3 pr-4">Language</th><th className="py-3 pr-4">Support</th><th className="py-3">Common frameworks</th></tr></thead>
              <tbody>
                {LANGUAGES.map((l) => (
                  <tr key={l.name} className="border-b border-zinc-800/60"><td className="py-3 pr-4 font-medium text-white">{l.name}</td><td className="py-3 pr-4 text-cyan-300">{l.support}</td><td className="py-3 text-zinc-400">{l.frameworks}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card className="mt-10">
            <h3 className="font-semibold text-white">How we measure accuracy</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">Our internal benchmarks report high precision on labelled vulnerability datasets, with human review of borderline findings to keep false positives low. These are platform claims from internal evaluation, not independent third-party certification — try the free tier on your own repos and judge the signal yourself.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
