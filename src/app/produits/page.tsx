import { SelyaProductCard } from "@/components/ui/selya/SelyaProductCard";
import parfums from "@/data/parfums.json";

export const metadata = {
  title: "Produit - Sélya Parfums",
};

export default function ProduitsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl tracking-widest font-semibold text-center mb-10">
        Nos Parfums
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {parfums.map((parfum) => (
          <SelyaProductCard key={parfum.id} parfum={parfum} />
        ))}
      </div>
    </main>
  );
}
