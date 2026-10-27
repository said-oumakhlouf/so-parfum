"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  disabled?: boolean;
  /** Nom du produit, utilisé pour les libellés accessibles. */
  label?: string;
}

export default function QuantitySelector({
  value,
  onChange,
  max = 10,
  disabled = false,
  label = "produit",
}: QuantitySelectorProps) {
  return (
    <div
      className="flex w-full items-center justify-between border border-border"
      role="group"
      aria-label={`Quantité pour ${label}`}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-11 rounded-none"
        aria-label="Diminuer la quantité"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={disabled || value <= 1}
      >
        <Minus aria-hidden="true" />
      </Button>
      <span className="text-sm font-medium tabular-nums" aria-live="polite">
        {value}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-11 rounded-none"
        aria-label="Augmenter la quantité"
        onClick={() => onChange(value + 1)}
        disabled={disabled || value >= max}
      >
        <Plus aria-hidden="true" />
      </Button>
    </div>
  );
}
