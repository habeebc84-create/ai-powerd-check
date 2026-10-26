export const SITE_NAME = "CodeSentinel AI";
export const SITE_TAGLINE = "AI-powered code review & vulnerability detection";
export const SITE_DESCRIPTION =
  "CodeSentinel AI reviews every pull request with AI agents that catch security vulnerabilities, bugs, and performance issues — and suggest fixes your team can merge with confidence.";
export const SITE_URL = "https://codes";
export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];
export const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Security", href: "/#security" },
    { label: "Integrations", href: "/#integrations" },
  ],
  Company: [
    { label: "Start free trial", href: "/signup" },
    { label: "Book a demo", href: "/pricing" },
    { label: "Sign in", href: "/login" },
  ],
};
