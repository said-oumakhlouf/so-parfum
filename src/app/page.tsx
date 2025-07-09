import { SelyaButton } from "@/components/ui/selya/SelyaButton";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative h-screen">
        <img
          src="./images/hero.jpg"
          alt="Parfum"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-white text-center space-y-6 px-4">
            <h1 className="text-5xl font-serif tracking-wider ">Sélya</h1>
            <p className="text-lg">Le parfum n’est pas vu. Il est ressenti. </p>
            <a
              href="/produits"
              className="inline-block border border-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition rounded-2xl"
            >
              Découvrir
            </a>
          </div>
        </div>
      </section>

      {/* Section mise en avant */}
      <section className="max-w-5xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-light">Nos créations uniques</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Des créations subtiles qui éveillent les sens et marquent les esprits.{" "}
        </p>
        {/* (à suivre : produits, slider, etc.) */}
        <SelyaButton className="mt-8">Ajouter au panier</SelyaButton>
      </section>
    </main>
  );
}
