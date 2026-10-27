export interface OlfactiveNotes {
  tete?: string[];
  coeur?: string[];
  fond?: string[];
}

export interface Parfum {
  id: number;
  name: string;
  brand?: string;
  description: string;
  price: string;
  image: string;
  quantity?: number;
  stock: number; // Added stock property to track available stock
  /** Pyramide olfactive, affichée sur la page produit si renseignée. */
  notes?: OlfactiveNotes;
}
