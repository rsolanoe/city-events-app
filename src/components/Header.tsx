"use client";

import {
  FaSearch,
  FaBars,
  FaTimes,
  FaList,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import CustomSelect from "./CustomSelect";
import { useEventStore } from "@/stores/useEventStore";
import CustomInput from "./CustomInput";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
              <FaCity className="text-gray-900 text-4xl font-bold" />
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

          {/* Selector de rango de fechas conectado al store */}
          <DatePicker
            selected={
              filterOptions.dates.from
                ? new Date(filterOptions.dates.from)
                : null
            }
            onChange={(dates) => {
              const [start, end] = dates as [Date | null, Date | null];

              if (!start && !end) return;

              setFilterOptions({
                dates: {
                  from: start ? start.toISOString() : undefined,
                  to: end ? end.toISOString() : undefined,
                },
              });
            }}
            startDate={
              filterOptions.dates.from
                ? new Date(filterOptions.dates.from)
                : null
            }
            endDate={
              filterOptions.dates.to ? new Date(filterOptions.dates.to) : null
            }
            selectsRange
            placeholderText="Selecciona un rango de fechas"
            className="w-full"
          />

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

            <DatePicker
              selected={
                filterOptions.dates.from
                  ? new Date(filterOptions.dates.from)
                  : null
              }
              onChange={(dates) => {
                const [start, end] = dates as [Date | null, Date | null];

                if (!start && !end) return;

                setFilterOptions({
                  dates: {
                    from: start ? start.toISOString() : undefined,
                    to: end ? end.toISOString() : undefined,
                  },
                });
              }}
              startDate={
                filterOptions.dates.from
                  ? new Date(filterOptions.dates.from)
                  : null
              }
              endDate={
                filterOptions.dates.to ? new Date(filterOptions.dates.to) : null
              }
              selectsRange
              placeholderText="Selecciona un rango de fechas"
              className="w-full"
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
