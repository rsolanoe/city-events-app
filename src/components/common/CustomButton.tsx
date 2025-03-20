interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function CustomButton({
  text,
  onClick,
  className = "py-2 px-4 text-sm md:text-base font-medium cursor-pointer text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition",
  fullWidth = false,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {text}
    </button>
  );
}
