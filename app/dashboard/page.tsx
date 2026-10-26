"use client";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertTriangle, CheckCircle2, Clock, GitPullRequest, LayoutDashboard, Settings, ShieldCheck } from "lucide-react";
import { Card, SeverityBadge } from "@/components/ui";
import { PR_REVIEWS, SEVERITY_DISTRIBUTION, VULNERABILITIES } from "@/lib/data";
import { SITE_NAME } from "@/lib/site";

const NAV = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "PR Reviews", href: "/dashboard", icon: GitPullRequest },
  { label: "Vulnerabilities", href: "/dashboard", icon: AlertTriangle },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <aside aria-label="Dashboard navigation" className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <p className="flex items-center gap-2 px-2 font-bold text-white"><ShieldCheck className="text-cyan-400" size={20} />{SITE_NAME}</p>
          <nav className="mt-5 space-y-1">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"><n.icon size={18} />{n.label}</Link>
            ))}
          </nav>
          <p className="mt-6 px-2 text-xs leading-relaxed text-zinc-500">Static demo dashboard — data is mock data for preview purposes.</p>
        </aside>
        <div>
          <h1 className="text-2xl font-bold text-white">Security overview</h1>
          <p className="mt-1 text-sm text-zinc-400">All repositories · Last 7 days</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: AlertTriangle, label: "Open issues", value: "145", note: "↓ 18% vs last week" },
              { icon: ShieldCheck, label: "Critical vulnerabilities", value: "14", note: "2 need immediate action" },
              { icon: GitPullRequest, label: "PRs reviewed this week", value: "312", note: "Avg. review time: 4 min" },
              { icon: Clock, label: "Mean time to remediate", value: "1.8 days", note: "↓ 0.6 days vs last month" },
            ].map((c) => (
              <Card key={c.label}><c.icon className="text-cyan-400" size={20} /><p className="mt-3 text-3xl font-bold text-white">{c.value}</p><p className="text-sm text-zinc-400">{c.label}</p><p className="mt-1 text-xs text-emerald-400">{c.note}</p></Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="font-semibold text-white">Severity distribution</h2>
              <div className="mt-4 h-64" role="img" aria-label="Bar chart of findings by severity: Critical 14, High 32, Medium 58, Low 41">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SEVERITY_DISTRIBUTION}>
                    <CartesianGrid stroke="#27272A" vertical={false} />
                    <XAxis dataKey="name" stroke="#A1A1AA" fontSize={12} />
                    <YAxis stroke="#A1A1AA" fontSize={12} />
                    <Tooltip contentStyle={{ background: "#18181B", border: "1px solid #27272A", borderRadius: 12, color: "#fff" }} />
                    <Bar dataKey="value" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h2 className="font-semibold text-white">Open vulnerabilities</h2>
              <ul className="mt-4 space-y-3">
                {VULNERABILITIES.map((v) => (
                  <li key={v.id} className="rounded-xl border border-zinc-800 p-3">
                    <div className="flex items-center justify-between gap-2"><span className="font-mono text-xs text-zinc-400">{v.id}</span><SeverityBadge severity={v.severity} /></div>
                    <p className="mt-1.5 text-sm font-medium text-zinc-100">{v.title}</p>
                    <p className="mt-0.5 font-mono text-xs text-zinc-500">{v.file} · {v.category}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card className="mt-6">
            <h2 className="font-semibold text-white">Recent PR reviews</h2>
            <ul className="mt-4 divide-y divide-zinc-800">
              {PR_REVIEWS.map((pr) => (
                <li key={pr.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">{pr.id} · {pr.title}</p>
                    <p className="text-xs text-zinc-500">{pr.repo} · by {pr.author} · {pr.time} · {pr.issues} issues</p>
                  </div>
                  <div className="flex items-center gap-2"><SeverityBadge severity={pr.severity} /><span className="flex items-center gap-1 text-xs text-zinc-400"><CheckCircle2 size={14} className="text-emerald-400" />{pr.status}</span></div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
