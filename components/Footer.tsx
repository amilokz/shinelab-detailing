import { Clock, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon">
                <Sparkles className="h-5 w-5 text-ink" />
              </span>
              <span className="font-display text-2xl tracking-wide text-white">
                SHINE<span className="text-neon">LAB</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Lahore&apos;s premium car detailing studio. From express washes
              to 9H ceramic armor — we make cars look better than the day they
              left the showroom.
            </p>
            <a
              href={waLink("Hi ShineLab! I have a question about detailing.")}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold text-ink shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              CHAT ON WHATSAPP
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-steel">
              EXPLORE
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                ["Packages", "#packages"],
                ["Services", "#services"],
                ["Reviews", "#reviews"],
                ["Book a Slot", "#booking"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href + label}>
                  <a href={href} className="text-slate-400 transition hover:text-neon">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-steel">
              VISIT US
            </p>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                Plot 42-C, Main Boulevard,
                <br />
                DHA Phase 5, Lahore
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                Mon–Sat · 10:00 AM – 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-steel md:flex-row">
          <p>© 2026 ShineLab Detailing Studio. All rights reserved.</p>
          <p>
            Crafted with obsession in <span className="text-neon">Lahore</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
