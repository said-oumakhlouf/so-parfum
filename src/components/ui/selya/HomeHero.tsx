import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[560px] h-[calc(100svh-3.5rem)] max-h-[900px] items-center justify-center overflow-hidden md:h-[calc(100svh-5rem)]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="mb-6 text-xs font-medium tracking-[0.4em] uppercase text-white/85">
          Parfumerie d&apos;exception
        </p>
        <h1 className="font-serif text-6xl font-light tracking-[0.2em] uppercase md:text-8xl">
          Sélya
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg font-light text-white/90 md:text-xl">
          L&apos;essence de votre élégance
        </p>
        <Link
          href="/produits"
          className="mt-10 inline-flex min-h-12 items-center justify-center bg-white px-10 py-3 text-xs font-medium tracking-[0.25em] uppercase text-primary transition-colors duration-200 hover:bg-gold hover:text-gold-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Découvrir la collection
        </Link>
      </div>
    </section>
  );
}
