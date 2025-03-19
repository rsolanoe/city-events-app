"use client";
import { IoClose } from "react-icons/io5";

interface TagProps {
  text: string;
  onRemove?: () => void;
  className?: string;
}

export const Pill = ({ text, onRemove, className = "" }: TagProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700 ${className}`}
    >
      <span>{text}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="text-blue-500 hover:text-blue-700 focus:outline-none cursor-pointer"
          aria-label={`Remove ${text}`}
        >
          <IoClose size={16} />
        </button>
      )}
    </div>
  );
};
