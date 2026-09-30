import { ArrowRight, BadgeCheck, Check, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { PACKAGES } from "@/lib/site";

export default function Packages() {
  return (
    <section id="packages" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
            PACKAGES
          </p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            PICK YOUR <span className="text-neon text-glow">SHINE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Upfront pricing. No hidden charges. Every package finished with our
            signature gloss inspection under studio lights.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 120}>
              <div
                className={`card-sheen relative flex h-full flex-col rounded-3xl border p-8 transition-transform hover:-translate-y-1.5 ${
                  pkg.popular
                    ? "border-neon bg-gradient-to-b from-carbon to-panel shadow-[0_0_50px_rgba(34,211,238,0.18)]"
                    : "border-white/10 bg-panel"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-neon px-4 py-1.5 text-[11px] font-bold tracking-widest text-ink whitespace-nowrap">
                    <BadgeCheck className="h-3.5 w-3.5" /> MOST POPULAR
                  </span>
                )}
                <h3 className="font-display text-3xl text-white">{pkg.name}</h3>
                <p className="mt-1 text-sm text-steel">{pkg.tagline}</p>
                <p className="mt-5 font-display text-5xl text-neon">{pkg.price}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs tracking-wider text-steel">
                  <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:scale-[1.03] ${
                    pkg.popular
                      ? "bg-neon text-ink shadow-[0_0_28px_rgba(34,211,238,0.4)]"
                      : "border border-white/20 text-white hover:border-neon hover:text-neon"
                  }`}
                >
                  BOOK {pkg.name.toUpperCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
