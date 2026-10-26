import type { LucideIcon } from "lucide-react";
import { Card } from "./ui";

export default function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <Card className="transition hover:border-cyan-500/40 hover:bg-zinc-900">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400"><Icon size={22} /></div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </Card>
  );
}
