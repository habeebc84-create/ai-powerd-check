export type Severity = "Critical" | "High" | "Medium" | "Low";

export const PR_REVIEWS = [
  { id: "PR #4821", title: "Add OAuth refresh-token rotation", repo: "api-gateway", author: "priya.s", status: "Needs changes", severity: "Critical" as Severity, issues: 4, time: "12 min ago" },
  { id: "PR #4819", title: "Migrate payment webhook to async queue", repo: "billing-service", author: "marcus.l", status: "Approved with notes", severity: "High" as Severity, issues: 2, time: "38 min ago" },
  { id: "PR #4817", title: "Refactor search indexing pipeline", repo: "search-core", author: "ana.r", status: "Approved", severity: "Medium" as Severity, issues: 1, time: "2 h ago" },
  { id: "PR #4812", title: "Bump dependency versions, fix lint", repo: "web-app", author: "tom.k", status: "Approved", severity: "Low" as Severity, issues: 0, time: "5 h ago" },
  { id: "PR #4809", title: "Add rate limiting to public API", repo: "api-gateway", author: "priya.s", status: "Needs changes", severity: "High" as Severity, issues: 3, time: "Yesterday" },
];

export const VULNERABILITIES = [
  { id: "CWE-89", title: "SQL injection via unsanitised query parameter", file: "src/db/users.ts:142", severity: "Critical" as Severity, category: "OWASP A03 Injection" },
  { id: "CWE-798", title: "Hard-coded API credential in configuration", file: "config/prod.env", severity: "Critical" as Severity, category: "Secrets" },
  { id: "CWE-79", title: "Reflected XSS in search results rendering", file: "src/ui/search.tsx:88", severity: "High" as Severity, category: "OWASP A03 Injection" },
  { id: "CWE-307", title: "Missing rate limit on login endpoint", file: "src/auth/login.ts:41", severity: "Medium" as Severity, category: "Misconfiguration" },
  { id: "CWE-400", title: "Unbounded pagination can exhaust memory", file: "src/api/list.ts:23", severity: "Low" as Severity, category: "Performance" },
];

export const SEVERITY_DISTRIBUTION = [
  { name: "Critical", value: 14 },
  { name: "High", value: 32 },
  { name: "Medium", value: 58 },
  { name: "Low", value: 41 },
];

export const TESTIMONIALS = [
  { quote: "CodeSentinel caught a SQL injection in our first week that three human reviewers had missed. It now reviews every PR before a human ever looks at it.", name: "Maya Chen", role: "VP Engineering, Northwind Labs", initials: "MC" },
  { quote: "Review time dropped from two days to under four hours. The suggested fixes are genuinely mergeable — our engineers accept about 8 in 10.", name: "Daniel Okafor", role: "Staff Engineer, Helios Health", initials: "DO" },
  { quote: "The compliance reports alone saved us weeks before our SOC 2 audit. Every finding maps to OWASP and CWE, with evidence attached.", name: "Sara Lindqvist", role: "Head of Security, Fjord Bank", initials: "SL" },
  { quote: "It understands our codebase, not just the diff. Context-aware reviews mean far fewer false positives than the linters we replaced.", name: "Alex Rivera", role: "Engineering Manager, Parcel & Co", initials: "AR" },
];

export const PRICING_PLANS = [
  { name: "Free", monthly: 0, annual: 0, blurb: "For side projects and open source.", cta: "Start free", features: ["Up to 3 repositories", "PR reviews for public repos", "OWASP Top 10 detection", "Community support"] },
  { name: "Team", monthly: 29, annual: 24, blurb: "For growing product teams.", cta: "Start 14-day trial", popular: true, features: ["Unlimited private repositories", "Auto-fix suggestions", "Secrets & dependency scanning", "Slack & Jira integrations", "Team dashboards & reports"] },
  { name: "Business", monthly: 79, annual: 65, blurb: "For companies that need compliance.", cta: "Start 14-day trial", features: ["Everything in Team", "SOC 2 & GDPR compliance reports", "Custom rules & policies", "SSO / SAML", "Priority support"] },
  { name: "Enterprise", monthly: null, annual: null, blurb: "For regulated, self-hosted teams.", cta: "Talk to sales", features: ["Everything in Business", "On-prem / VPC deployment", "Dedicated support engineer", "Custom AI model tuning", "99.99% uptime SLA"] },
];

export const BLOG_POSTS = [
  { slug: "sql-injection-2026", title: "Why SQL injection still tops the charts — and how AI review stops it", excerpt: "Injection flaws persist because they hide in ordinary-looking code. We break down the patterns our agents flag most, with real diff examples.", date: "2026-10-20", readTime: "8 min read", category: "Security" },
  { slug: "secrets-in-prs", title: "Secrets in pull requests: a practical playbook for engineering teams", excerpt: "From hard-coded keys to leaked tokens in tests — how to detect, rotate, and prevent secrets from ever reaching main.", date: "2026-10-14", readTime: "6 min read", category: "Engineering" },
  { slug: "false-positives", title: "Cutting false positives: context-aware review vs. rule-based linting", excerpt: "Rules see lines. Agents see the system. Here is how full-repo context changes what a review can — and cannot — flag.", date: "2026-10-07", readTime: "9 min read", category: "AI" },
  { slug: "soc2-evidence", title: "Turning code review into SOC 2 evidence, automatically", excerpt: "Audit evidence is usually a scramble. Structured findings, mapped to controls, change that entirely.", date: "2026-09-30", readTime: "5 min read", category: "Compliance" },
  { slug: "performance-reviews", title: "The performance bugs that only appear at scale", excerpt: "N+1 queries, unbounded loops, and chatty APIs — the review comments that save your next incident.", date: "2026-09-22", readTime: "7 min read", category: "Performance" },
  { slug: "ai-review-workflow", title: "Designing a healthy AI review workflow (without losing human judgement)", excerpt: "Auto-fix everything? Review everything twice? A pragmatic workflow that keeps humans in charge of the hard calls.", date: "2026-09-15", readTime: "6 min read", category: "Workflow" },
];

export const LANGUAGES = [
  { name: "Python", support: "Full", frameworks: "Django, FastAPI, Flask" },
  { name: "JavaScript / TypeScript", support: "Full", frameworks: "React, Next.js, Node, Express" },
  { name: "Go", support: "Full", frameworks: "Gin, Echo, gRPC" },
  { name: "Java", support: "Full", frameworks: "Spring Boot, Quarkus" },
  { name: "Rust", support: "Full", frameworks: "Axum, Actix, Tokio" },
  { name: "C#", support: "Full", frameworks: ".NET, ASP.NET Core" },
  { name: "PHP", support: "Full", frameworks: "Laravel, Symfony" },
  { name: "Ruby", support: "Full", frameworks: "Rails, Sinatra" },
  { name: "Kotlin", support: "Beta", frameworks: "Ktor, Spring" },
  { name: "Swift", support: "Beta", frameworks: "Vapor, iOS apps" },
];
