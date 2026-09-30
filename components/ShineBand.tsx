"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Cinematic band: the generated detailing video (polishing close-ups, water
 * beading) plays inside a framed cinematic strip — not as a hero background.
 */
export default function ShineBand() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[62vh] min-h-[420px]">
        {reduced ? (
          <Image
            src="/ceramic-coating.webp"
            alt="Ceramic coating gloss"
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/shine.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
              SEE IT IN MOTION
            </p>
            <h2 className="font-display max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl">
              WATER BEADS.
              <br />
              <span className="text-neon text-glow">HEADS TURN.</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              That&apos;s the ceramic effect — watch contamination roll right
              off your paint. Your car, but impossibly glossy.
            </p>
            <a
              href="#booking"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-neon px-8 py-4 text-sm font-bold text-ink shadow-[0_0_36px_rgba(34,211,238,0.45)] transition-transform hover:scale-105"
            >
              GET THE GLOSS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
