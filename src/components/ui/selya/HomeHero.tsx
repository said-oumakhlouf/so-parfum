"use client";

export function HomeHero() {
  return (
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
          <p className="text-lg italic">L’essence de votre élégance</p>{" "}
          <a
            href="/produits"
            className="inline-block border border-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition rounded-2xl"
          >
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
}
