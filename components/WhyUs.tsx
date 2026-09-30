import { Award, Home, Leaf, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const BADGES = [
  {
    icon: Award,
    title: "Certified Detailers",
    desc: "IDA-trained technicians, paint-gauge on every correction job.",
  },
  {
    icon: ShieldCheck,
    title: "Paint-Safe Methods",
    desc: "Two-bucket wash, grit guards, plush microfiber — zero swirls.",
  },
  {
    icon: Leaf,
    title: "Eco-Safe Products",
    desc: "pH-neutral, biodegradable chemicals. Safe for kids & pets.",
  },
  {
    icon: Home,
    title: "Studio + Doorstep",
    desc: "Visit our DHA studio or we bring the shine to your driveway.",
  },
];

const STATS = [
  { value: "2,400+", label: "CARS DETAILED" },
  { value: "6 yrs", label: "OF SHINE" },
  { value: "100%", label: "GLOSS CHECKED" },
  { value: "3-yr", label: "CERAMIC WARRANTY" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
            WHY SHINELAB
          </p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            OBSESSED WITH <span className="text-neon text-glow">GLOSS</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-ink">
              <div className="px-6 py-10 text-center">
                <p className="font-display text-4xl text-neon md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.25em] text-steel">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-white/10 bg-panel p-6 transition hover:border-neon/50">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neon shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                  <b.icon className="h-6 w-6 text-ink" />
                </span>
                <h3 className="font-display text-xl tracking-wide text-white">
                  {b.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
