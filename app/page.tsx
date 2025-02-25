import ApexStats from "@/components/sections/apex-stats";
import BestSolution from "@/components/sections/best-solutions";
import Hero from "@/components/sections/hero";
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

// import TradingViewWidget from "@/components/ui/trading-widget-2";

export default function Home() {
  return (
    <div className="container_custom space-y-20">
      <Navbar />
      <Hero />
      <section id="featured-coins">
        <TopCoins />
      </section>
      <section id="why-apex">
        <WhyChooseUs />
      </section>
      <ApexStats />

      <section id="benefits">
        <BestSolution />
      </section>
      <CTA />
      <CryptoStats />
      <Choices />
      <div id="feedback">
        <TestimonialsSwiper />
      </div>
      <TradingViewPage />
      <Support />

      <section id="footer">
        <Footer />
      </section>

      {/* <TradingViewWidget /> */}
      {/* 
      <section id="featured-coins">
        <FeaturedCoins />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="faqs">
        <Faqs />
      </section> */}
    </div>
  );
}
