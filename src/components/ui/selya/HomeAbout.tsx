import Image from "next/image";

export function HomeAbout() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src="/images/elixir-secret.png"
            alt="Flacon du parfum Élixir Secret"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.35em] uppercase text-gold">
            Notre histoire
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light md:text-5xl">
            Notre univers
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Chez Sélya, chaque parfum est une invitation à l&apos;élégance, à
            la douceur et à l&apos;émotion. Nos créations sont pensées pour
            sublimer la féminité sous toutes ses formes.
          </p>
        </div>
      </div>
    </section>
  );
}
