"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function HomeSocials() {
  return (
    <section className="py-12 self-start bg-[#f9f6f2]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-serif font-bold">Suivez Nous</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://instagram.com/selya"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-[#D8A7B1] hover:text-primary transition" />
          </Link>
          <Link
            href="https://facebook.com/selya"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-[#D8A7B1] hover:text-primary transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
