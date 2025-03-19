"use client";

import { FaBars, FaTimes, FaCity } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Event } from "@/stores/useEventStore";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface Props {
  initialData: { events: Event[]; categories: string[]; locations: string[] };
}

export default function NavBar({ initialData }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1 text-primary-foreground">
            <FaCity className="text-gray-900 text-4xl font-bold" />
          </div>
          <span className="text-xl font-bold">CityEvents</span>
        </Link>

        {/* Navegación en escritorio */}
        <DesktopNav initialData={initialData} />

        {/* Botón del menú móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && <MobileNav initialData={initialData} />}
    </header>
  );
}
