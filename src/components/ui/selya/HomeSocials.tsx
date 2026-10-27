"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function HomeSocials() {
  return (
    <section>
      <div className="mx-auto max-w-xl space-y-6 text-center md:text-left">
        <h2 className="font-serif text-3xl font-light md:text-4xl">
          Suivez-nous
        </h2>
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="https://instagram.com/selya"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-12 items-center justify-center border border-border text-foreground transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </Link>
          <Link
            href="https://facebook.com/selya"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-12 items-center justify-center border border-border text-foreground transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Facebook className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
