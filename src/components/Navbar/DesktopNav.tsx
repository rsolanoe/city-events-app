"use client";

import { FaSearch, FaList, FaMapMarkerAlt } from "react-icons/fa";
import { useEventStore } from "@/stores/event/useEventStore";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from "../common/CustomSelect";
import CustomInput from "../common/CustomInput";

interface Props {
  initialData: { categories: string[]; locations: string[] };
}

export default function DesktopNav({ initialData }: Props) {
  const { setFilterOptions, filterOptions } = useEventStore();

  return (
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

      <DatePicker
        selected={
          filterOptions.dates.from ? new Date(filterOptions.dates.from) : null
        }
        onChange={(dates) => {
          const [start, end] = dates as [Date | null, Date | null];
          setFilterOptions({
            dates: {
              from: start ? start.toISOString() : undefined,
              to: end ? end.toISOString() : undefined,
            },
          });
        }}
        startDate={
          filterOptions.dates.from ? new Date(filterOptions.dates.from) : null
        }
        endDate={
          filterOptions.dates.to ? new Date(filterOptions.dates.to) : null
        }
        selectsRange
        placeholderText="Selecciona un rango de fechas"
        className="w-full"
      />

      <CustomInput
        type="search"
        placeholder="Buscar por título..."
        value={filterOptions.title}
        onChange={(value) => setFilterOptions({ title: value })}
        icon={<FaSearch className="text-gray-500" />}
      />
    </nav>
  );
}
