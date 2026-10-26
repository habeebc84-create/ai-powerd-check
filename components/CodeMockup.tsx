import { SeverityBadge } from "./ui";

export default function CodeMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/90 shadow-2xl backdrop-blur" role="img" aria-label="Preview of a CodeSentinel AI pull request review showing a critical SQL injection finding with a suggested fix">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-zinc-400">PR #4821 · api-gateway · Add OAuth refresh-token rotation</span>
      </div>
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-zinc-300"><code>{`// src/db/users.ts
const q = "SELECT * FROM users WHERE id = " + userId;
await db.query(q);

// CodeSentinel suggests:
const q = "SELECT * FROM users WHERE id = $1";
await db.query(q, [userId]);`}</code></pre>
        <div className="border-t border-zinc-800 p-4 md:border-l md:border-t-0">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-zinc-400">CWE-89 · SQL Injection</span>
            <SeverityBadge severity="Critical" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">User input is concatenated directly into a query. An attacker could read or modify any row in the users table.</p>
          <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
            <p className="text-xs font-semibold text-cyan-300">Suggested fix — ready to apply</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-300">Use a parameterised query so input is never treated as SQL. No behaviour change for valid IDs.</p>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Confidence: 98% · OWASP A03:2021 · 2 files affected</p>
        </div>
      </div>
    </div>
  );
}
