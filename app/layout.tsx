import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ShineLab — Car Detailing Studio | Lahore",
  description:
    "Premium car detailing studio in Lahore: express wash, signature detailing and 9H ceramic coating. Book your slot on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-ink font-body text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
