"use client";

export function HomeAbout() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <img
          src="/images/elixir-secret.png"
          alt="Notre univers"
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4">Notre univers</h2>
          <p className="text-muted-foreground">
            Chez Sélya, chaque parfum est une invitation à l’élégance, à la
            douceur et à l’émotion. Nos créations sont pensées pour sublimer la
            féminité sous toutes ses formes.
          </p>
        </div>
      </div>
    </section>
  );
}
