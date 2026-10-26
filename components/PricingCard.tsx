import { Check } from "lucide-react";
import { Button, Card } from "./ui";
import { cn } from "@/lib/utils";

export default function PricingCard({ plan, annual }: { plan: { name: string; monthly: number | null; annual: number | null; blurb: string; cta: string; popular?: boolean; features: string[] }; annual: boolean }) {
  const price = annual ? plan.annual : plan.monthly;
  return (
    <Card className={cn("flex flex-col", plan.popular && "border-cyan-500/50 shadow-glow")}>
      {plan.popular && <span className="mb-3 inline-flex w-fit rounded-full bg-cyan-500 px-2.5 py-1 text-xs font-bold text-zinc-950">Most popular</span>}
      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-zinc-400">{plan.blurb}</p>
      <p className="mt-5">
        {price === null ? <span className="text-3xl font-bold text-white">Custom</span> : <><span className="text-4xl font-bold text-white">${price}</span><span className="text-sm text-zinc-400"> / user / month</span></>}
      </p>
      <p className="mt-1 h-5 text-xs text-zinc-500">{price !== null && price > 0 ? (annual ? "Billed annually" : "Billed monthly") : "Free forever"}</p>
      <Button href="/signup" variant={plan.popular ? "primary" : "secondary"} className="mt-5 w-full">{plan.cta}</Button>
      <ul className="mt-6 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-zinc-300"><Check size={16} className="mt-0.5 shrink-0 text-cyan-400" />{f}</li>
        ))}
      </ul>
    </Card>
  );
}
