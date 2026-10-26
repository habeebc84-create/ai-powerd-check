"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bug, CheckCircle2, FileSearch, Gauge, GitPullRequest, KeyRound, Lock, PlayCircle, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import CodeMockup from "@/components/CodeMockup";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import { Badge, Button, Card, SectionHeading } from "@/components/ui";
import { PRICING_PLANS, TESTIMONIALS } from "@/lib/data";
import { SITE_NAME } from "@/lib/site";

const fade = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(6,182,212,0.25),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <motion.div {...fade} className="mx-auto max-w-3xl text-center">
            <Badge>✦ Now with context-aware review across your whole repo</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Every pull request, reviewed by AI that actually understands your code.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{SITE_NAME} catches security vulnerabilities, bugs, and performance issues before they reach production — and suggests fixes your team can merge in one click.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/signup">Start free trial <ArrowRight size={18} /></Button>
              <Button href="/pricing" variant="secondary"><PlayCircle size={18} /> Book a demo</Button>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Free for public repos · No credit card required · Set up in under 5 minutes</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mx-auto mt-12 max-w-5xl">
            <CodeMockup />
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section aria-label="Trusted by engineering teams" className="border-y border-zinc-800/80 py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Used by engineering teams at</p>
        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-lg font-semibold text-zinc-500">
          <span>Northwind Labs</span><span>Helios Health</span><span>Fjord Bank</span><span>Parcel &amp; Co</span><span>Meridian</span><span>Atlas Systems</span>
        </div>
        <p className="mt-3 text-center text-xs text-zinc-600">Illustrative team names shown for the product demo — not endorsements by real companies.</p>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The problem" title="Manual code review is broken" sub="Reviewers are overloaded, context is scattered, and the riskiest flaws are the easiest to miss in a 400-line diff." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Card><h3 className="font-semibold text-white">Reviews take days, not minutes</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">PRs sit in queues while reviewers context-switch. Velocity drops, and teams start rubber-stamping to keep shipping.</p></Card>
          <Card><h3 className="font-semibold text-white">Security flaws slip through</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">Injection, broken auth, and leaked secrets look like ordinary code at a glance. Humans catch patterns; attackers exploit the ones they miss.</p></Card>
          <Card><h3 className="font-semibold text-white">Feedback is inconsistent</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">What one reviewer flags, another ignores. Without shared rules, quality depends on who happened to be online.</p></Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-zinc-800/80 bg-zinc-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="From pull request to confident merge in four steps" />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              { icon: GitPullRequest, title: "1. Connect your repo", text: "Install the GitHub, GitLab, Bitbucket, or Azure DevOps app. No code changes, no agents to babysit." },
              { icon: FileSearch, title: "2. AI reads the whole context", text: "Agents map call graphs, data flow, and recent history — not just the changed lines." },
              { icon: ShieldCheck, title: "3. Findings land as PR comments", text: "Each issue is severity-scored, mapped to OWASP and CWE, and explained in plain language." },
              { icon: CheckCircle2, title: "4. Apply fixes in one click", text: "Accept a suggested patch, request a re-review, and merge with an audit trail attached." },
            ].map((s) => (
              <li key={s.title}><Card className="h-full"><s.icon className="text-cyan-400" size={24} /><h3 className="mt-3 font-semibold text-white">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p></Card></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Features" title="One review, every angle covered" sub="Security, correctness, and performance — checked together, so nothing falls between tools." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={ShieldCheck} title="OWASP Top 10 & CWE detection" description="Injection, broken access control, SSRF, XSS, and 200+ CWE patterns, mapped to the standard your auditors already use." />
          <FeatureCard icon={KeyRound} title="Secrets & credential scanning" description="Hard-coded keys, tokens, and passwords are flagged before merge, with rotation guidance for what already leaked." />
          <FeatureCard icon={Bug} title="Bug & logic detection" description="Null dereferences, race conditions, off-by-one errors, and broken edge cases — explained with the execution path." />
          <FeatureCard icon={Gauge} title="Performance review" description="N+1 queries, unbounded loops, chatty APIs, and memory risks are called out with the expected impact at scale." />
          <FeatureCard icon={Sparkles} title="One-click auto-fixes" description="Safe, minimal patches you can apply from the PR comment. Risky changes are proposed as diffs for a human to approve." />
          <FeatureCard icon={Workflow} title="Custom rules & policies" description="Encode your team's standards once — naming, error handling, logging — and enforce them on every PR automatically." />
          <FeatureCard icon={FileSearch} title="Dependency & supply-chain checks" description="Vulnerable and unmaintained dependencies are flagged with fixed versions and upgrade effort." />
          <FeatureCard icon={Lock} title="Misconfiguration detection" description="Insecure defaults in Docker, Kubernetes, Terraform, and CI configs are caught alongside application code." />
          <FeatureCard icon={Zap} title="Real-time PR comments" description="Reviews complete in minutes, inline on the diff, so authors fix issues while the code is still fresh in mind." />
        </div>
      </section>

      {/* AI capabilities */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">AI capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Not a linter with a chatbot attached</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">Rule-based tools match patterns. {SITE_NAME} agents reason about intent: what this code is trying to do, what data flows through it, and where that breaks down in production.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={20} /><span className="text-sm leading-relaxed text-zinc-300"><strong className="text-white">Vulnerability detection:</strong> data-flow analysis traces untrusted input from source to sink, cutting false positives.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={20} /><span className="text-sm leading-relaxed text-zinc-300"><strong className="text-white">Auto-fix suggestions:</strong> patches preserve behaviour, include tests where useful, and explain why the fix is safe.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={20} /><span className="text-sm leading-relaxed text-zinc-300"><strong className="text-white">Context-aware review:</strong> the model reads neighbouring files, schemas, and history, so it rarely flags code that is already safe.</span></li>
            </ul>
            <div className="mt-8"><Button href="/features">Explore all capabilities <ArrowRight size={18} /></Button></div>
          </div>
          <Card>
            <h3 className="font-semibold text-white">What the AI sees</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3"><span className="text-zinc-500">Input source</span><p className="mt-1 font-mono text-xs text-zinc-300">req.query.search — user-controlled</p></div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3"><span className="text-zinc-500">Data flow</span><p className="mt-1 font-mono text-xs text-zinc-300">search → buildQuery() → db.query() — no sanitisation</p></div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3"><span className="text-cyan-300">Verdict</span><p className="mt-1 text-zinc-200">Critical: untrusted input reaches a SQL sink. Fix with a parameterised query.</p></div>
            </div>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Integrations" title="Works where your team already works" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["GitHub", "GitLab", "Bitbucket", "Azure DevOps", "Slack", "Jira", "VS Code", "Linear"].map((n) => (
            <Card key={n} className="py-5 text-center font-semibold text-zinc-200">{n}</Card>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="border-y border-zinc-800/80 bg-zinc-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Security & compliance" title="Your code stays yours" sub="We never train models on your private code. Deploy in our cloud, your VPC, or fully on-prem." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["SOC 2 Type II", "GDPR", "ISO 27001", "On-prem / VPC option"].map((n) => (
              <Card key={n} className="text-center"><Lock className="mx-auto text-cyan-400" size={24} /><p className="mt-3 font-semibold text-white">{n}</p></Card>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">Encryption in transit and at rest · SSO / SAML · Role-based access · Full audit logs · Data residency options</p>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Start free. Scale when you're ready." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PRICING_PLANS.filter((p) => ["Free", "Team", "Enterprise"].includes(p.name)).map((p) => (
            <PricingCard key={p.name} plan={p} annual={false} />
          ))}
        </div>
        <p className="mt-8 text-center"><Link href="/pricing" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">Compare all plans and features →</Link></p>
      </section>

      {/* Testimonials */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Teams ship faster — and sleep better" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name}>
                <p className="leading-relaxed text-zinc-300">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 font-semibold text-cyan-300">{t.initials}</span>
                  <div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-xs text-zinc-500">{t.role}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Your next pull request could be the one that matters.</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">Connect a repository and get your first AI review in minutes — free, no credit card required.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/signup">Start free trial</Button>
          <Button href="/pricing" variant="secondary">Book a demo</Button>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/95 p-3 backdrop-blur md:hidden">
        <Button href="/signup" className="w-full">Start free trial</Button>
      </div>
      <div aria-hidden className="h-16 md:hidden" />
    </div>
  );
}
