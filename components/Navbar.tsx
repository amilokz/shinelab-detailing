"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const LINKS = [
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon shadow-[0_0_24px_rgba(34,211,238,0.5)]">
            <Sparkles className="h-5 w-5 text-ink" />
          </span>
          <span className="font-display text-2xl tracking-wide text-white">
            SHINE<span className="text-neon">LAB</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-slate-300 transition hover:text-neon"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full bg-neon px-6 py-2.5 text-sm font-bold text-ink shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-transform hover:scale-105"
          >
            BOOK SLOT
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-neon"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-neon px-6 py-3 text-center text-sm font-bold text-ink"
            >
              BOOK SLOT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
