"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Event, useEventStore } from "@/stores/useEventStore";

import EventCard from "./EventCard";
import { Pill } from "./Pill";

interface Props {
  initialData: { events: Event[]; categories: string[]; locations: string[] };
}

export default function EventList({ initialData }: Props) {
  const { filteredEvents, setEvents, filterOptions, removeFilterOption } =
    useEventStore();

  useEffect(() => {
    setEvents(initialData);
  }, [initialData, setEvents]);

  console.log({ filterOptions });

  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">
      {filteredEvents.length === 0 ? (
        <p>No hay eventos disponibles.</p>
      ) : (
        <>
          <span>Events found {filteredEvents.length}</span>

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

            {filterOptions.dates.from && (
              <Pill
                text={`Desde ${filterOptions.dates.from} `}
                onRemove={() => removeFilterOption("date", "from")}
              />
            )}

            {filterOptions.dates.to && (
              <Pill
                text={`Hasta ${filterOptions.dates.to}`}
                onRemove={() => removeFilterOption("date", "to")}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <EventCard key={index + event.id} event={event} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
