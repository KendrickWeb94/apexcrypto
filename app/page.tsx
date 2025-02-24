import ApexStats from "@/components/sections/apex-stats";
import BestSolution from "@/components/sections/best-solutions";
import Hero from "@/components/sections/hero";
import TopCoins from "@/components/sections/top-coins";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ArrowedButton from "@/components/ui/arrowed-button";
import Button from "@/components/ui/button";
import FeaturedCoinsBg from "@/components/ui/featured-coins-bg";
import Footer from "@/components/ui/footer";
import Logo from "@/components/ui/logo";
import Navbar from "@/components/ui/navbar";
import Navlinks from "@/components/ui/navlinks";
import PrimaryText from "@/components/ui/primary-text";
import TradingWidget1 from "@/components/ui/trading-widget-1";
import TradingViewPage from "@/components/ui/tradingviewpage";
import CTA from "../components/sections/cta";
import Choices from "@/components/sections/choices";

// import TradingViewWidget from "@/components/ui/trading-widget-2";

export default function Home() {
  return (
    <div className="">
      <CTA />
      <Choices />
   <BestSolution />
      <ApexStats />
      <Navbar />
      <WhyChooseUs />
      <TopCoins />
      <Hero />
      <Button>
        Get started
      </Button>
      <Logo />
      <ArrowedButton >
        Get Started
      </ArrowedButton>
      <Navlinks />
      <PrimaryText >
        choose us
      </PrimaryText>
      <FeaturedCoinsBg>
        fry
      </FeaturedCoinsBg>
   <section id="footer">
   <Footer />
   </section>
   <TradingViewPage />
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
  )
}