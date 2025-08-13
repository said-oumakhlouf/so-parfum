"use client";

import { Button } from "../button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  disabled?: boolean;
}

export default function QuantitySelector({
  value,
  onChange,
  max = 10,
  disabled = false,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={disabled || value <= 1}
      >
        -
      </Button>
      <span className="text-sm">{value}</span>
      <Button
        size="sm"
        variant="outline"
        onClick={() => onChange(value + 1)}
        disabled={disabled || value >= max}
      >
        +
      </Button>
    </div>
  );
}
