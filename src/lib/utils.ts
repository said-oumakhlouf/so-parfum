import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Convertit "85,00€" (ou un nombre) en nombre exploitable pour les calculs. */
export function parsePrice(price: string | number): number {
  if (typeof price === "number") return price;
  const n = parseFloat(price.replace(/[^\d,.-]/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

/** Formate un montant en euros, à la française : 85,00 €. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
