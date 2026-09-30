"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, Car, CheckCircle2, MessageCircle, Package } from "lucide-react";
import Reveal from "./Reveal";
import { PACKAGES, TIME_SLOTS, waLink } from "@/lib/site";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState(PACKAGES[1].id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [carModel, setCarModel] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date || !carModel.trim()) {
      setError("Please fill in your name, date and car model.");
      return;
    }
    setError("");
    const pkgName = PACKAGES.find((p) => p.id === pkg)?.name ?? pkg;
    const msg = `Hi ShineLab! I'd like to book a slot.\n\nName: ${name.trim()}\nPhone: ${phone.trim() || "-"}\nPackage: ${pkgName}\nDate: ${date}\nTime: ${time}\nCar: ${carModel.trim()}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-neon";

  return (
    <section id="booking" className="relative bg-ink py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 0%, rgba(34,211,238,0.12), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.4em] text-neon">
            BOOK A SLOT
          </p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            RESERVE YOUR <span className="text-neon text-glow">SHINE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Pick a package and a time — your booking lands straight in our
            WhatsApp. We confirm within 15 minutes.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={submit}
            className="mt-12 rounded-3xl border border-white/10 bg-panel p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold tracking-widest text-steel">
                  YOUR NAME *
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ali Hassan"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold tracking-widest text-steel">
                  PHONE
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03xx xxxxxxx"
                  inputMode="tel"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-1.5 text-xs font-bold tracking-widest text-steel">
                  <Package className="h-3.5 w-3.5" /> PACKAGE *
                </span>
                <select
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className={`${inputCls} appearance-none`}
                >
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.id} className="bg-ink">
                      {p.name} — {p.price}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-1.5 text-xs font-bold tracking-widest text-steel">
                  <Car className="h-3.5 w-3.5" /> CAR MODEL *
                </span>
                <input
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="e.g. Honda Civic 2022"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-1.5 text-xs font-bold tracking-widest text-steel">
                  <CalendarDays className="h-3.5 w-3.5" /> DATE *
                </span>
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </label>
              <div>
                <span className="mb-2 block text-xs font-bold tracking-widest text-steel">
                  TIME SLOT *
                </span>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                        time === t
                          ? "bg-neon text-ink shadow-[0_0_16px_rgba(34,211,238,0.5)]"
                          : "border border-white/15 text-slate-300 hover:border-neon hover:text-neon"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-neon px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_36px_rgba(34,211,238,0.45)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              CONFIRM ON WHATSAPP
            </button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-steel">
              <CheckCircle2 className="h-3.5 w-3.5 text-neon" />
              No advance needed — pay after the gloss inspection
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
