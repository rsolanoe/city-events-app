"use client";

import {
  FaSearch,
  FaBars,
  FaTimes,
  FaList,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import CustomSelect from "./CustomSelect";
import { useEventStore } from "@/stores/useEventStore";
import CustomInput from "./CustomInput";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
  price: string;
}

interface Props {
  initialData: { events: Event[]; categories: string[]; locations: string[] };
}

export default function Header({ initialData }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setFilterOptions, filterOptions } = useEventStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1 text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2 L22 8.5 L22 15.5 L12 22 L2 15.5 L2 8.5 L12 2" />
                <path d="M12 22 L12 15" />
                <path d="M22 8.5 L12 15 L2 8.5" />
                <path d="M2 15.5 L12 8.5 L22 15.5" />
                <path d="M12 2 L12 8.5" />
              </svg>
            </div>
            <span className="text-xl font-bold">CityEvents</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <CustomSelect
            options={initialData.categories}
            value={filterOptions.categories[0] || ""}
            placeholder="Todas las categorías"
            onChange={(value) =>
              setFilterOptions({ categories: value ? [value] : [] })
            }
            icon={<FaList className="text-gray-500" />}
          />

          <CustomSelect
            options={initialData.locations}
            value={filterOptions.locations[0] || ""}
            placeholder="Todas las ubicaciones"
            onChange={(value) =>
              setFilterOptions({ locations: value ? [value] : [] })
            }
            icon={<FaMapMarkerAlt className="text-gray-500" />}
          />
          <div>
            <input
              type="date"
              value={filterOptions.dates.from || ""}
              onChange={(e) =>
                setFilterOptions({
                  dates: { ...filterOptions.dates, from: e.target.value },
                })
              }
            />
            <input
              type="date"
              value={filterOptions.dates.to || ""}
              onChange={(e) =>
                setFilterOptions({
                  dates: { ...filterOptions.dates, to: e.target.value },
                })
              }
            />
          </div>
          <div className="relative">
            <CustomInput
              type="search"
              placeholder="Buscar por título..."
              value={filterOptions.title}
              onChange={(value) => setFilterOptions({ title: value })}
              icon={<FaSearch className="text-gray-500" />}
            />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <CustomSelect
              options={initialData.categories}
              value={filterOptions.categories[0] || ""}
              placeholder="Todas las categorías"
              onChange={(value) =>
                setFilterOptions({ categories: value ? [value] : [] })
              }
              icon={<FaList className="text-gray-500" />}
            />

            <CustomSelect
              options={initialData.locations}
              value={filterOptions.locations[0] || ""}
              placeholder="Todas las ubicaciones"
              onChange={(value) =>
                setFilterOptions({ locations: value ? [value] : [] })
              }
              icon={<FaMapMarkerAlt className="text-gray-500" />}
            />

            <div className="relative mt-2">
              <CustomInput
                type="search"
                placeholder="Buscar por título..."
                value={filterOptions.title}
                onChange={(value) => setFilterOptions({ title: value })}
                icon={<FaSearch className="text-gray-500" />}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
