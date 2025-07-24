"use client";

import { Droplet, Leaf, Sparkles } from "lucide-react";

export function HomeValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-10">
          Les engagements de Sélya
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Droplet className="w-6 h-6 text-[#D8A7B1]" />
            </div>
            <h3 className="text-xl font-semibold">Respect de la peau</h3>
            <p className="text-muted-foreground">
              Nos parfums sont formulés pour convenir aux peaux sensibles, sans
              compromis sur la tenue ni sur la sensualité.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center">
              <Leaf className="w-6 h-6 text-[#D8A7B1]" />
            </div>
            <h3 className="text-xl font-semibold">Ingrédients nobles</h3>
            <p className="text-muted-foreground">
              Chaque essence est choisie pour sa qualité et son authenticité,
              avec une attention particulière portée à la naturalité.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center">
              <Sparkles className="w-6 h-6 text-[#D8A7B1]" />
            </div>
            <h3 className="text-xl font-semibold">Conçu pour les femmes</h3>
            <p className="text-muted-foreground">
              Sélya sublime la beauté féminine avec des fragrances créées pour
              inspirer, apaiser et révéler la douceur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
