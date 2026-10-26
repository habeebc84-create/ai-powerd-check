"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-white" aria-label={`${SITE_NAME} home`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-zinc-950"><ShieldCheck size={20} /></span>
          {SITE_NAME}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white">{l.label}</Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button type="button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full border border-zinc-700 p-2 text-zinc-300 hover:text-white">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="/login" variant="ghost">Sign in</Button>
          <Button href="/signup">Start free trial</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={() => setDark(!dark)} aria-label="Toggle theme" className="rounded-full border border-zinc-700 p-2 text-zinc-300">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="rounded-lg border border-zinc-700 p-2 text-white">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <div className={cn("border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden", !open && "hidden")}>
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800">{l.label}</Link>
          ))}
          <div className="mt-3 flex gap-2">
            <Button href="/login" variant="secondary" className="flex-1">Sign in</Button>
            <Button href="/signup" className="flex-1">Start free trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
