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
      <div className="bg-[#f9f6f2] py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">
          <HomeNewsletter />
          <HomeSocials />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
