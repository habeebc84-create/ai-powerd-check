"use client";
import Link from "next/link";
import { Github, ShieldCheck } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { SITE_NAME } from "@/lib/site";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16">
      <Card className="w-full">
        <div className="text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-zinc-950"><ShieldCheck size={24} /></span>
          <h1 className="mt-4 text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-zinc-400">Sign in to {SITE_NAME} to continue reviewing.</p>
        </div>
        <div className="mt-6 grid gap-2">
          <Button variant="secondary" className="w-full"><Github size={18} /> Continue with GitHub</Button>
          <Button variant="secondary" className="w-full">Continue with Google</Button>
        </div>
        <div className="my-6 flex items-center gap-3 text-xs text-zinc-500"><span className="h-px flex-1 bg-zinc-800" />or continue with email<span className="h-px flex-1 bg-zinc-800" /></div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div><label htmlFor="email" className="text-sm font-medium text-zinc-200">Work email</label><input id="email" type="email" required autoComplete="email" placeholder="you@company.com" className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500" /></div>
          <div><label htmlFor="password" className="text-sm font-medium text-zinc-200">Password</label><input id="password" type="password" required autoComplete="current-password" placeholder="••••••••" className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500" /></div>
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-zinc-400">New here? <Link href="/signup" className="font-semibold text-cyan-300">Create an account</Link></p>
        <p className="mt-3 text-center text-xs text-zinc-600">Demo UI only — social buttons do not start a real OAuth flow.</p>
      </Card>
    </div>
  );
}
