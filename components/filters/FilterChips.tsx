"use client";

import { cn } from "@/lib/utils";

interface FilterChipsProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  label?: string;
}

export function FilterChips({
  options,
  selected,
  onChange,
  label,
}: FilterChipsProps) {
  return (
    <div className="space-y-2">
      {label && <h3 className="text-sm font-medium text-gray-700">{label}</h3>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              "hover:shadow-md",
              selected === option
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
