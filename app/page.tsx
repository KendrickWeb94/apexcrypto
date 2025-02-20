import ArrowedButton from "@/components/ui/arrowed-button";
import Button from "@/components/ui/button";
import FeaturedCoinsBg from "@/components/ui/featured-coins-bg";
import Footer from "@/components/ui/footer";
import Logo from "@/components/ui/logo";
import Navlinks from "@/components/ui/navlinks";
import PrimaryText from "@/components/ui/primary-text";

export default function Home() {
  return (
    <div className="">
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
      <Footer />
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