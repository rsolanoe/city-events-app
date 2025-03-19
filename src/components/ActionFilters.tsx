"use client";

import { useEventStore } from "@/stores/useEventStore";
import { formatDate } from "@/utils/dates.helpers";
import { Pill } from "./Pill";

export function ActiveFilters() {
  const { filterOptions, removeFilterOption } = useEventStore();

  const handleUpdateDate = () => {
    removeFilterOption("date", "from");
    removeFilterOption("date", "to");
  };

  if (
    filterOptions.categories.length === 0 &&
    filterOptions.locations.length === 0 &&
    !filterOptions.dates.from &&
    !filterOptions.dates.to
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-4">
      {filterOptions.categories.map((category) => (
        <Pill
          key={category}
          text={category}
          onRemove={() => removeFilterOption("category", category)}
        />
      ))}

      {filterOptions.locations.map((location) => (
        <Pill
          key={location}
          text={location}
          onRemove={() => removeFilterOption("location", location)}
        />
      ))}

      {filterOptions.dates.from && filterOptions.dates.to && (
        <Pill
          text={`Desde ${formatDate(
            filterOptions.dates.from,
            "dd/MM/yyyy"
          )} - Hasta ${formatDate(filterOptions.dates.to, "dd/MM/yyyy")}`}
          onRemove={handleUpdateDate}
        />
      )}
    </div>
  );
}
