"use client";

import { ReactNode } from "react";

interface CustomInputProps {
  type?: "text" | "email" | "password" | "search"; // Tipos de input permitidos
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
}

export default function CustomInput({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: CustomInputProps) {
  return (
    <div className="relative w-full sm:w-fit">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}

      <input
        type={type}
        className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
