import { FeaturedProducts } from "@/components/ui/selya/FeatureProducts";
import { Footer } from "@/components/ui/selya/Footer";
import { HeroSections } from "@/components/ui/selya/HeroSections";
import { HomeAbout } from "@/components/ui/selya/HomeAbout";
import { HomeHero } from "@/components/ui/selya/HomeHero";
import { HomeNewsletter } from "@/components/ui/selya/HomeNewsLetter";
import { HomeSocials } from "@/components/ui/selya/HomeSocials";
import { HomeValues } from "@/components/ui/selya/HomeValues";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero */}
      <HomeHero />
      <HeroSections />
      {/* Section mise en avant */}
      <FeaturedProducts />
      {/* (à suivre : produits, slider, etc.) */}
      <HomeAbout />
      {/* Autres sections */}
      <HomeValues />
      {/* Newsletter et réseaux sociaux */}
      <div className="bg-secondary py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 md:grid-cols-2 md:gap-16">
          <HomeNewsletter />
          <HomeSocials />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
