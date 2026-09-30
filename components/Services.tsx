import Image from "next/image";
import { Armchair, Cog, Droplets, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const TILES = [
  {
    icon: Sparkles,
    title: "Machine Polishing",
    desc: "1 & 2-step paint correction that erases swirls and oxidation.",
  },
  {
    icon: Droplets,
    title: "Express Foam Wash",
    desc: "pH-neutral foam bath — zero swirl marks, all gloss.",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    desc: "Yellowed, hazy headlights polished back to crystal clear.",
  },
  {
    icon: Cog,
    title: "Engine Bay Detail",
    desc: "Degreased, steam-cleaned and dressed engine bay.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
            SERVICES
          </p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            EVERY INCH, <span className="text-neon text-glow">PERFECTED</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 md:h-96">
              <Image
                src="/interior-detailing.webp"
                alt="Interior deep detailing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon">
                  <Armchair className="h-5 w-5 text-ink" />
                </span>
                <h3 className="font-display text-3xl text-white">
                  INTERIOR DEEP DETAILING
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-300">
                  Steam extraction, shampooed carpets, conditioned leather —
                  your cabin smells and feels factory-fresh.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative h-80 overflow-hidden rounded-3xl border border-neon/30 md:h-96">
              <Image
                src="/ceramic-coating.webp"
                alt="9H ceramic coating water beading"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon">
                  <ShieldCheck className="h-5 w-5 text-ink" />
                </span>
                <h3 className="font-display text-3xl text-white">
                  9H CERAMIC COATING
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-300">
                  Years of hydrophobic gloss with a 3-year warranty. Water
                  beads, dirt slides off, shine stays.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-white/10 bg-carbon p-6 transition hover:border-neon/50">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon/15">
                  <t.icon className="h-5 w-5 text-neon" />
                </span>
                <h3 className="font-display text-xl tracking-wide text-white">
                  {t.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
