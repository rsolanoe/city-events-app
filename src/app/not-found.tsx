import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[red] text-primary-foreground rounded-md font-medium hover:bg-[blue]/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
