"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { AREAS } from "@/lib/site";

const FAQS = [
  {
    q: "How long does a full detailing take?",
    a: "Express Shine takes about an hour. Signature Detailing needs around 5 hours, and Ceramic Armor is a 2-day process — day one for paint correction, day two for coating and curing.",
  },
  {
    q: "Is ceramic coating really worth it?",
    a: "If you want gloss that lasts years instead of weeks — yes. Our 9H coating comes with a 3-year warranty, makes washing far easier, and protects against UV, bird droppings and light scratches.",
  },
  {
    q: "Do you offer doorstep service?",
    a: "Yes! We serve DHA, Bahria Town, Gulberg, Model Town, Johar Town and nearby areas. We bring water, power and the full studio setup to your driveway.",
  },
  {
    q: "Will machine polishing damage my paint?",
    a: "Not with us. We measure paint depth before every correction, use the least aggressive method first, and our detailers are IDA-trained. Your clear coat stays safe.",
  },
  {
    q: "How do I maintain the shine after ceramic coating?",
    a: "Simple: wash with pH-neutral shampoo (we'll show you how), avoid automatic brush washes, and come back for your free 30-day maintenance wash. We'll hand you a care card.",
  },
  {
    q: "Do I need to pay in advance?",
    a: "No advance needed. You pay after our gloss inspection — if you're not happy with the shine, we fix it on the spot, free.",
  },
];

export default function AreasFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div id="areas">
              <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
                SERVICE AREAS
              </p>
              <h2 className="font-display text-4xl text-white md:text-6xl">
                WE COME <span className="text-neon text-glow">TO YOU</span>
              </h2>
              <p className="mt-4 max-w-md text-slate-400">
                Studio visits in DHA Phase 5 — or doorstep detailing across
                Lahore. Same gloss, zero travel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-carbon px-4 py-2 text-sm text-slate-300 transition hover:border-neon hover:text-neon"
                  >
                    <MapPin className="h-3.5 w-3.5 text-neon" />
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-neon/25 bg-neon/5 p-6">
                <p className="font-display text-2xl text-white">DHA STUDIO</p>
                <p className="mt-2 text-sm text-slate-400">
                  Plot 42-C, Main Boulevard, DHA Phase 5, Lahore
                  <br />
                  Mon–Sat · 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div id="faq">
              <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
                FAQ
              </p>
              <h2 className="font-display text-4xl text-white md:text-6xl">
                GOOD <span className="text-neon text-glow">QUESTIONS</span>
              </h2>
              <div className="mt-8 flex flex-col gap-3">
                {FAQS.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={f.q}
                      className={`overflow-hidden rounded-2xl border transition ${
                        isOpen ? "border-neon/40 bg-carbon" : "border-white/10 bg-carbon/60"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-bold text-white md:text-base">
                          {f.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-neon transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
