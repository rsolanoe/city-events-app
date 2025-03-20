"use client";

import { ReactNode } from "react";

interface CustomSelectProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
}

export default function CustomSelect({
  options,
  value,
  placeholder,
  onChange,
  icon,
}: CustomSelectProps) {
  return (
    <div className="relative w-full shadow-sm md:w-fit">
      {/* Icono a la izquierda */}
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}

      <select
        className="w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
