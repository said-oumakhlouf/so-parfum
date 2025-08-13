export interface Parfum {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  quantity?: number;
  stock: number; // Added stock property to track available stock
}
