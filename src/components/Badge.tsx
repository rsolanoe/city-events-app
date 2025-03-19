interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-md border border-gray-300 bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors ${className}`}
    >
      {text}
    </span>
  );
};
