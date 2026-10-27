"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Button } from "../button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  disabled?: boolean;
  /** Nom du produit, utilisé pour les libellés accessibles. */
  label?: string;
  /** Version réduite, pour les lignes du panier. */
  compact?: boolean;
}

export default function QuantitySelector({
  value,
  onChange,
  max = 10,
  disabled = false,
  label = "produit",
  compact = false,
}: QuantitySelectorProps) {
  const buttonSize = compact ? "size-9" : "size-11";

  return (
    <div
      className={cn(
        "flex items-center border border-border",
        compact ? "w-fit" : "w-full justify-between"
      )}
      role="group"
      aria-label={`Quantité pour ${label}`}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(buttonSize, "rounded-none")}
        aria-label="Diminuer la quantité"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={disabled || value <= 1}
      >
        <Minus aria-hidden="true" />
      </Button>
      <span
        className={cn(
          "text-sm font-medium tabular-nums",
          compact && "min-w-8 text-center"
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(buttonSize, "rounded-none")}
        aria-label="Augmenter la quantité"
        onClick={() => onChange(value + 1)}
        disabled={disabled || value >= max}
      >
        <Plus aria-hidden="true" />
      </Button>
    </div>
  );
}
