import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import ShineBand from "@/components/ShineBand";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import AreasFaq from "@/components/AreasFaq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="bg-ink font-body text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Packages />
        <Services />
        <ShineBand />
        <WhyUs />
        <Reviews />
        <Booking />
        <AreasFaq />
      </main>
      <Footer />
    </div>
  );
}
