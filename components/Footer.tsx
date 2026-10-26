import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-white"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-zinc-950"><ShieldCheck size={20} /></span>{SITE_NAME}</Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">{SITE_TAGLINE}. Ship secure code faster, with evidence for every finding.</p>
            <p className="mt-4 text-xs text-zinc-500">SOC 2 Type II · GDPR · ISO 27001 · On-prem available</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <nav key={group} aria-label={`${group} links`}>
              <h3 className="text-sm font-semibold text-white">{group}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.href + l.label}><Link href={l.href} className="text-sm text-zinc-400 hover:text-cyan-300">{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <span>© 2026 {SITE_NAME}. All rights reserved.</span>
          <span>Built for teams that ship secure software.</span>
        </div>
      </div>
    </footer>
  );
}
