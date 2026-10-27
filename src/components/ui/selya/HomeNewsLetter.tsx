"use client";

import { Input } from "../input";
import { SelyaButton } from "./SelyaButton";

export function HomeNewsletter() {
  return (
    <section>
      <div className="mx-auto max-w-xl text-center md:text-left">
        <h2 className="mb-4 font-serif text-3xl font-light md:text-4xl">
          Rejoignez l&apos;univers Sélya
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          Recevez en avant-première nos nouveautés, conseils parfums et offres
          privilèges.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse e-mail
          </label>
          <Input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Votre adresse e-mail"
            className="h-12 w-full rounded-none border-border bg-card px-4"
          />
          <SelyaButton type="submit" className="h-12 shrink-0">
            M&apos;abonner
          </SelyaButton>
        </form>
      </div>
    </section>
  );
}
