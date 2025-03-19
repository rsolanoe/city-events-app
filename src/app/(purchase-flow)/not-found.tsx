"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-3">
          Event Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The Event you are looking for with id{" "}
          <span className="font-bold">{pathname.split("/")[2]}</span> might have
          been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/events"
          className="px-6 py-3 bg-[#181717] bg-primary-foreground text-white rounded-md font-medium hover:bg-[#181717]/70 transition-colors"
        >
          Return to events list
        </Link>
      </div>
    </div>
  );
}
