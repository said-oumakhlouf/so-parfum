"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <p className="font-serif">
          &copy; {new Date().getFullYear()} Sélya. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">
            Mentions légales
          </Link>
          <Link href="#" className="hover:underline">
            CGV
          </Link>
          <Link href="#" className="hover:underline">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
