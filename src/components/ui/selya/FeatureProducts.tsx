"use client";

import { SelyaProductCard } from "./SelyaProductCard";
import { Parfum } from "@/types";
import parfums from "@/data/parfums.json";
import Link from "next/link";

export function FeaturedProducts() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.35em] uppercase text-gold">
            La collection
          </p>
          <h2 className="font-serif text-4xl font-light md:text-5xl">
            Nos parfums emblématiques
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {parfums.slice(0, 3).map((parfum: Parfum) => (
            <SelyaProductCard
              key={parfum.id}
              parfum={{ ...parfum, quantity: parfum.quantity ?? 0 }}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/produits"
            className="inline-flex min-h-11 items-center border-b border-primary pb-1 text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Voir tous les parfums
          </Link>
        </div>
      </div>
    </section>
  );
}
