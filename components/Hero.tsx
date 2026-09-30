"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronsLeftRight, Star } from "lucide-react";

/**
 * HERO CONCEPT — "The Shine Reveal":
 * The hero IS a giant interactive before/after drag slider. A dusty, dull car
 * sits under a glowing cyan beam; drag the beam to wipe away the grime and
 * reveal the mirror-gloss detailed car beneath. No plain video background —
 * the visitor performs the detailing with their own cursor.
 */
export default function Hero() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(94, Math.max(6, p)));
  }, []);

  // Intro sweep: the beam glides once on load (skipped for reduced motion).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const dur = 2400;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setPos(50 + 30 * Math.sin(2 * Math.PI * e));
      if (k < 1) rafRef.current = requestAnimationFrame(tick);
    };
    const delay = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 600);
    return () => {
      window.clearTimeout(delay);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const beforeOpacity = pos > 20 ? 1 : 0;
  const afterOpacity = pos < 80 ? 1 : 0;

  return (
    <section className="relative">
      <div
        ref={trackRef}
        role="slider"
        aria-label="Before and after detailing comparison. Drag to reveal."
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            setTouched(true);
            setPos((p) => Math.max(6, p - 5));
          }
          if (e.key === "ArrowRight") {
            setTouched(true);
            setPos((p) => Math.min(94, p + 5));
          }
        }}
        onPointerDown={(e) => {
          setDragging(true);
          setTouched(true);
          setFromClientX(e.clientX);
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (dragging) setFromClientX(e.clientX);
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        className="relative h-[94svh] min-h-[600px] w-full cursor-ew-resize touch-pan-y overflow-hidden select-none focus:outline-none"
      >
        {/* AFTER — mirror-gloss detailed car (base layer) */}
        <Image
          src="/after-car.webp"
          alt="Car after ShineLab detailing — mirror gloss"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          draggable={false}
        />

        {/* BEFORE — dusty, dull car (clipped top layer) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src="/before-car.webp"
            alt="Car before detailing — dusty and dull"
            fill
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-ink/25" />
        </div>

        {/* Cinematic gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/50" />

        {/* The beam handle */}
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 w-[3px] -translate-x-1/2 bg-neon shadow-[0_0_24px_#22d3ee,0_0_60px_rgba(34,211,238,0.5)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
            {!touched && (
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-neon" />
            )}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-neon bg-ink/90 shadow-[0_0_30px_rgba(34,211,238,0.6)] backdrop-blur">
              <ChevronsLeftRight className="h-6 w-6 text-neon" />
            </div>
            {!touched && (
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-neon px-3 py-1 text-[11px] font-bold tracking-widest text-ink whitespace-nowrap">
                DRAG ME
              </span>
            )}
          </div>
        </div>

        {/* BEFORE / AFTER floating tags */}
        <span
          className="pointer-events-none absolute top-24 left-5 rounded-full border border-white/25 bg-ink/70 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-white backdrop-blur transition-opacity duration-300 md:left-10"
          style={{ opacity: beforeOpacity }}
        >
          BEFORE
        </span>
        <span
          className="pointer-events-none absolute top-24 right-5 rounded-full border border-neon/60 bg-neon/15 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-neon backdrop-blur transition-opacity duration-300 md:right-10"
          style={{ opacity: afterOpacity }}
        >
          AFTER
        </span>

        {/* Headline */}
        <div className="pointer-events-none absolute inset-x-0 top-[15%] px-6 text-center">
          <p className="mb-4 text-[11px] font-bold tracking-[0.4em] text-neon md:text-xs">
            SHINELAB · CAR DETAILING STUDIO · LAHORE
          </p>
          <h1 className="font-display text-[16vw] leading-[0.88] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:text-[10vw]">
            DULL <span className="text-neon text-glow">TO</span>
            <br />
            SHOWROOM
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 md:text-base">
            Drag the beam across the car — that wipe is exactly what our
            detailers do. Now imagine it in real life.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="absolute inset-x-0 bottom-28 flex flex-wrap items-center justify-center gap-4 px-6"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-neon px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_36px_rgba(34,211,238,0.45)] transition-transform hover:scale-105"
          >
            BOOK YOUR SLOT
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur transition hover:border-neon hover:text-neon"
          >
            VIEW PACKAGES
          </a>
        </div>

        {/* Stats strip */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/75 backdrop-blur-md">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/10 px-4 py-4 text-center">
            <div>
              <p className="font-display text-xl text-white md:text-3xl">2,400+</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-steel md:text-xs">
                CARS TRANSFORMED
              </p>
            </div>
            <div>
              <p className="font-display flex items-center justify-center gap-1 text-xl text-white md:text-3xl">
                4.9 <Star className="h-4 w-4 fill-neon text-neon md:h-5 md:w-5" />
              </p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-steel md:text-xs">
                GOOGLE RATING
              </p>
            </div>
            <div>
              <p className="font-display text-xl text-neon md:text-3xl">3-YR</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-steel md:text-xs">
                CERAMIC WARRANTY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
