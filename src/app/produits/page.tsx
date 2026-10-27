import { SelyaProductCard } from "@/components/ui/selya/SelyaProductCard";
import parfums from "@/data/parfums.json";

export const metadata = {
  title: "Produit - Sélya Parfums",
};

export default function ProduitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <header className="mb-14 text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.35em] uppercase text-gold">
          La collection
        </p>
        <h1 className="font-serif text-5xl font-light md:text-6xl">
          Nos parfums
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          {parfums.length} créations pensées pour sublimer chaque instant.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {parfums.map((parfum) => (
          <SelyaProductCard key={parfum.id} parfum={parfum} />
        ))}
      </div>
    </main>
  );
}
