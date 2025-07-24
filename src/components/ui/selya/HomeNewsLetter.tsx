"use client";

import { Button } from "@/components/ui/button";

export function HomeNewsletter() {
  return (
    <section className="bg-[#f9f6f2] py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Rejoignez l'univers Sélya
        </h2>
        <p className="text-muted-foreground mb-6">
          Recevez en avant-première nos nouveautés, conseils parfums et offres
          privilèges.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full max-w-sm rounded-full px-4 py-2"
          />
          <Button className="rounded-full px-6 py-2 bg-primary text-white hover:opacity-90">
            M'abonner
          </Button>
        </form>
      </div>
    </section>
  );
}
