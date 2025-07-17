"use client";

import { ChangeEvent } from "react";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export default function QuantitySelector({
  value,
  onChange,
  max = 10,
}: QuantitySelectorProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="border px-2 py-1 rounded text-sm"
    >
      {[...Array(max)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
}
