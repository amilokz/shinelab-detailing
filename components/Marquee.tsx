import { Sparkle } from "lucide-react";

const ITEMS = [
  "CERAMIC COATING",
  "PAINT CORRECTION",
  "INTERIOR DETAILING",
  "MACHINE POLISHING",
  "HEADLIGHT RESTORATION",
  "ENGINE BAY DETAIL",
  "FOAM WASH",
  "LEATHER CARE",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-neon/20 bg-panel py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg tracking-wider text-slate-300">
              {item}
            </span>
            <Sparkle className="h-4 w-4 fill-neon text-neon" />
          </span>
        ))}
      </div>
    </div>
  );
}
