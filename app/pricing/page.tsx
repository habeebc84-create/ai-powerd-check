"use client";
import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { Card, SectionHeading } from "@/components/ui";
import { PRICING_PLANS } from "@/lib/data";
import { cn } from "@/lib/utils";

const FAQS = [
  { q: "Is there really a free tier?", a: "Yes. The Free plan covers public repositories and up to 3 repos with OWASP Top 10 detection, forever — no credit card required." },
  { q: "Do you train models on my code?", a: "No. Private code is processed only to produce your review and is never used for model training." },
  { q: "Can I self-host?", a: "Yes — Enterprise supports on-prem and VPC deployments, with the same review engine and an offline update path." },
  { q: "What happens when a trial ends?", a: "You drop to the Free plan automatically. No surprise charges, and your findings history stays accessible." },
  { q: "Which git hosts are supported?", a: "GitHub, GitLab, Bitbucket, and Azure DevOps, plus a REST API for custom workflows." },
];

const COMPARE = [
  ["PR reviews", "Public only", "Unlimited", "Unlimited", "Unlimited"],
  ["Auto-fix suggestions", "—", "✓", "✓", "✓"],
  ["Secrets scanning", "—", "✓", "✓", "✓"],
  ["Compliance reports", "—", "—", "✓", "✓"],
  ["SSO / SAML", "—", "—", "✓", "✓"],
  ["On-prem deployment", "—", "—", "—", "✓"],
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Simple pricing that scales with your team" />
        <div className="mt-8 flex items-center justify-center gap-3">
          <button type="button" onClick={() => setAnnual(false)} aria-pressed={!annual} className={cn("rounded-full px-4 py-2 text-sm font-medium", !annual ? "bg-cyan-500 text-zinc-950" : "border border-zinc-700 text-zinc-300")}>Monthly</button>
          <button type="button" onClick={() => setAnnual(true)} aria-pressed={annual} className={cn("rounded-full px-4 py-2 text-sm font-medium", annual ? "bg-cyan-500 text-zinc-950" : "border border-zinc-700 text-zinc-300")}>Annual — save ~17%</button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((p) => <PricingCard key={p.name} plan={p} annual={annual} />)}
        </div>
      </section>
      <section className="border-t border-zinc-800/80 bg-zinc-900/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Compare" title="Feature comparison" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead><tr className="border-b border-zinc-800 text-zinc-400"><th className="py-3 pr-4">Feature</th>{["Free", "Team", "Business", "Enterprise"].map((n) => <th key={n} className="py-3 pr-4">{n}</th>)}</tr></thead>
              <tbody>{COMPARE.map((row) => (<tr key={row[0]} className="border-b border-zinc-800/60"><td className="py-3 pr-4 font-medium text-white">{row[0]}</td>{row.slice(1).map((c, i) => <td key={i} className="py-3 pr-4 text-zinc-300">{c}</td>)}</tr>))}</tbody>
            </table>
          </div>
          <div className="mt-12 space-y-3">
            <h3 className="text-xl font-semibold text-white">Frequently asked questions</h3>
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <summary className="cursor-pointer font-medium text-white">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
