import { ProductPurchase } from "@/components/ui/selya/ProductPurchase";
import { SelyaProductCard } from "@/components/ui/selya/SelyaProductCard";
import parfumsData from "@/data/parfums.json";
import { formatPrice, parsePrice } from "@/lib/utils";
import { Parfum } from "@/types";
import { ChevronRight, Truck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const parfums = parfumsData as Parfum[];

type PageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return parfums.map((parfum) => ({ id: String(parfum.id) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const parfum = parfums.find((p) => String(p.id) === id);
  if (!parfum) return { title: "Parfum introuvable - Sélya Parfums" };

  return {
    title: `${parfum.name} - Sélya Parfums`,
    description: parfum.description,
    openGraph: {
      title: `${parfum.name} - Sélya Parfums`,
      description: parfum.description,
      images: [parfum.image],
    },
  };
}

const noteLabels = [
  { key: "tete", label: "Notes de tête" },
  { key: "coeur", label: "Notes de cœur" },
  { key: "fond", label: "Notes de fond" },
] as const;

export default async function ProduitPage({ params }: PageProps) {
  const { id } = await params;
  const index = parfums.findIndex((p) => String(p.id) === id);
  if (index === -1) notFound();

  const parfum = parfums[index];
  // Trois autres parfums, en repartant du début de la liste si besoin.
  const suggestions = [1, 2, 3].map(
    (offset) => parfums[(index + offset) % parfums.length]
  );
  const notes = noteLabels.filter(({ key }) => parfum.notes?.[key]?.length);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
      <nav aria-label="Fil d'Ariane" className="mb-8 md:mb-10">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link
              href="/"
              className="inline-flex min-h-8 items-center hover:text-gold"
            >
              Accueil
            </Link>
          </li>
          <ChevronRight className="size-3" aria-hidden="true" />
          <li>
            <Link
              href="/produits"
              className="inline-flex min-h-8 items-center hover:text-gold"
            >
              Nos parfums
            </Link>
          </li>
          <ChevronRight className="size-3" aria-hidden="true" />
          <li aria-current="page" className="font-medium text-foreground">
            {parfum.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden bg-secondary lg:sticky lg:top-28 lg:self-start">
          <Image
            src={parfum.image}
            alt={`Flacon du parfum ${parfum.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-medium tracking-[0.35em] uppercase text-gold">
              {parfum.brand ?? "Sélya"}
            </p>
            <h1 className="font-serif text-4xl leading-tight font-light md:text-5xl">
              {parfum.name}
            </h1>
            <p className="text-2xl font-medium text-gold">
              {formatPrice(parsePrice(parfum.price))}
            </p>
          </header>

          <p className="leading-relaxed text-muted-foreground">
            {parfum.description}
          </p>

          <ProductPurchase parfum={parfum} />

          <p className="flex items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <Truck className="size-5 shrink-0 text-gold" aria-hidden="true" />
            Livraison offerte
          </p>

          {notes.length > 0 && (
            <section aria-labelledby="notes-title" className="space-y-4">
              <h2
                id="notes-title"
                className="font-serif text-2xl font-medium"
              >
                Pyramide olfactive
              </h2>
              <dl className="divide-y divide-border border-y border-border">
                {notes.map(({ key, label }) => (
                  <div key={key} className="flex justify-between gap-6 py-3">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="text-right text-sm font-medium">
                      {parfum.notes?.[key]?.join(", ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </div>

      <section aria-labelledby="suggestions-title" className="mt-20 md:mt-28">
        <h2
          id="suggestions-title"
          className="mb-10 text-center font-serif text-3xl font-light md:text-4xl"
        >
          Vous aimerez aussi
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((suggestion) => (
            <SelyaProductCard key={suggestion.id} parfum={suggestion} />
          ))}
        </div>
      </section>
    </main>
  );
}
