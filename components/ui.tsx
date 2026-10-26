"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Button({ children, href, variant = "primary", className, type, onClick }: { children: ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; className?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
    variant === "primary" && "bg-cyan-500 text-zinc-950 hover:bg-cyan-400 shadow-glow",
    variant === "secondary" && "border border-zinc-700 bg-zinc-900/60 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/60",
    variant === "ghost" && "text-zinc-300 hover:text-white hover:bg-zinc-800/70",
    className
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type || "button"} onClick={onClick} className={cls}>{children}</button>;
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300", className)}>{children}</span>;
}

export function SeverityBadge({ severity }: { severity: string }) {
  const map: Record<string, string> = {
    Critical: "bg-red-500/15 text-red-400 border-red-500/30",
    High: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Medium: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    Low: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };
  return <span className={cn("inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold", map[severity] || "bg-zinc-500/15 text-zinc-300 border-zinc-500/30")}>{severity}</span>;
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6", className)}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-zinc-400">{sub}</p>}
    </div>
  );
}
