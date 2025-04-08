import ApexStats from "@/components/sections/apex-stats";
import BestSolution from "@/components/sections/best-solutions";
import Hero, { LineSvg } from "@/components/sections/hero";
import TopCoins from "@/components/sections/top-coins";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import TradingViewPage from "@/components/ui/tradingviewpage";
import CTA from "../components/sections/cta";
import Choices from "@/components/sections/choices";
import Support from "@/components/sections/support";
import CryptoStats from "@/components/sections/crypto-stats";
import TestimonialsSwiper from "@/components/sections/testimonials";
import Image from "next/image";

// import TradingViewWidget from "@/components/ui/trading-widget-2";

export default function Home() {
  return (
    <div className="container_custom space-y-20">
    <div className="relative z-20 space-y-14">
    <Navbar />
    <Hero />
      <Image src={LineSvg} alt="" className=" -z-30 absolute h-screen top-0 left-0 w-full"/>
      </div>
      <section className="relative z-20" id="featured-coins">
        <TopCoins />
      </section>
      <section className="relative z-20" id="why-apex">
        <WhyChooseUs />
      </section>
      <ApexStats />

      <section className="relative z-20" id="benefits">
        <BestSolution />
      </section>
      <CTA />
      <CryptoStats />
      <div id="feedback">
        <TestimonialsSwiper />
      </div>
      <TradingViewPage />
      <Support />

      <section className="relative z-20" id="footer">
        <Footer />
      </section>

      {/* <TradingViewWidget /> */}
      {/* 
      <section className="relative z-20" id="featured-coins">
        <FeaturedCoins />
      </section>

      <section className="relative z-20" id="benefits">
        <Benefits />
      </section>

      <section className="relative z-20" id="services">
        <Services />
      </section>

      <section className="relative z-20" id="faqs">
        <Faqs />
      </section> */}
    </div>
  );
}
