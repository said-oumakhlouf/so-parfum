"use client";

import { SelyaProductCard } from "./SelyaProductCard";
import { Parfum } from "@/types";
import parfums from "@/data/parfums.json";

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-8">
          Nos parfums emblématiques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {parfums.slice(0, 3).map((parfum: Parfum) => (
            <SelyaProductCard
              key={parfum.id}
              parfum={{ ...parfum, quantity: parfum.quantity ?? 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
