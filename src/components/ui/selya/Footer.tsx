"use client";

import Link from "next/link";

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "CGV", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-sm md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl tracking-[0.3em] uppercase">
            Sélya
          </p>
          <p className="mt-2 text-xs text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Sélya. Tous droits réservés.
          </p>
        </div>
        <nav aria-label="Informations légales">
          <ul className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-xs text-primary-foreground/80 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
