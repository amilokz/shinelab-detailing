export const WA_NUMBER = "923001234567";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export interface Pkg {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export const PACKAGES: Pkg[] = [
  {
    id: "express",
    name: "Express Shine",
    tagline: "The weekly reset for daily drivers",
    price: "Rs 2,499",
    duration: "~60 mins",
    features: [
      "Foam cannon pre-wash & hand wash",
      "Wheels, tires & arches deep clean",
      "Streak-free glass inside & out",
      "Full interior vacuum",
      "Dashboard & console wipe-down",
      "Spray-wax gloss booster",
    ],
  },
  {
    id: "signature",
    name: "Signature Detailing",
    tagline: "The full transformation, inside & out",
    price: "Rs 11,999",
    duration: "~5 hours",
    popular: true,
    features: [
      "Everything in Express Shine",
      "Clay-bar paint decontamination",
      "1-step machine polish",
      "Interior deep shampoo & extraction",
      "Leather clean & condition",
      "Engine bay detail",
      "Headlight restoration",
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Armor 9H",
    tagline: "Years of gloss, locked in",
    price: "Rs 44,999",
    duration: "2 days",
    features: [
      "Everything in Signature Detailing",
      "2-step paint correction",
      "9H ceramic coating — 3-year warranty",
      "Windshield ceramic coating",
      "Wheel faces coated",
      "Free maintenance wash (30 days)",
    ],
  },
];

export const TIME_SLOTS = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

export const AREAS = [
  "DHA Phase 5",
  "Bahria Town",
  "Gulberg Greens",
  "Model Town",
  "Johar Town",
  "Wapda Town",
  "Valencia Town",
  "Cantt",
];
