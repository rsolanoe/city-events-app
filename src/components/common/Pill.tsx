import { IoClose } from "react-icons/io5";

interface TagProps {
  text: string;
  onRemove?: () => void;
  className?: string;
}

export const Pill = ({ text, onRemove, className = "" }: TagProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-300 ${className}`}
    >
      <span>{text}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="text-gray-500 hover:text-black focus:outline-none cursor-pointer"
          aria-label={`Remove ${text}`}
        >
          <IoClose size={16} />
        </button>
      )}
    </div>
  );
};
