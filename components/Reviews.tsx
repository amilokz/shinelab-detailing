import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Ahmed Raza",
    car: "Honda Civic",
    text: "My 5-year-old Civic looks brand new. The swirl marks are completely gone — I keep catching myself staring at the reflection.",
    pkg: "Signature Detailing",
  },
  {
    name: "Bilal Khan",
    car: "Toyota Fortuner",
    text: "Got the ceramic coating 8 months ago. Water still beads like day one and washing takes half the time. Worth every rupee.",
    pkg: "Ceramic Armor 9H",
  },
  {
    name: "Usman Tariq",
    car: "KIA Sportage",
    text: "They came to my house in Bahria Town and detailed the car in my driveway. Interior smells amazing, kids' stains all gone.",
    pkg: "Doorstep Detail",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
            REVIEWS
          </p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            DRIVERS <span className="text-neon text-glow">LOVE US</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-carbon p-7 transition hover:border-neon/40">
                <Quote className="h-8 w-8 text-neon/60" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-neon text-neon" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-xs text-steel">
                    {r.car} · {r.pkg}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
