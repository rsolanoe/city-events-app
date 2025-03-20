"use client";

import {
  FaSearch,
  FaList,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
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
        placeholder="All categories"
        onChange={(value) =>
          setFilterOptions({ categories: value ? [value] : [] })
        }
        icon={<FaList className="text-gray-500" />}
      />

      <CustomSelect
        options={initialData.locations}
        value={filterOptions.locations[0] || ""}
        placeholder="All locations"
        onChange={(value) =>
          setFilterOptions({ locations: value ? [value] : [] })
        }
        icon={<FaMapMarkerAlt className="text-gray-500" />}
      />

      {/* DatePicker estilizado */}
      <div className="relative flex items-center">
        <FaCalendarAlt className="absolute left-3 text-gray-500" />
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
          placeholderText="Select a date range"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <CustomInput
        type="search"
        placeholder="Search by title..."
        value={filterOptions.title}
        onChange={(value) => setFilterOptions({ title: value })}
        icon={<FaSearch className="text-gray-500" />}
      />
    </nav>
  );
}
