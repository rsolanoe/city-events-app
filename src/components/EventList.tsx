"use client";

import { Event } from "@/stores/useEventStore";
import EventCard from "./EventCard";
import { EventCardSkeleton } from "./EventListSkeleton";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export default function EventList({
  filteredEvents,
}: {
  filteredEvents: Event[];
}) {
  const { visibleItems, sentinelRef } = useInfiniteScroll(filteredEvents, 12);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.length > 0
          ? visibleItems.map((event) => (
              <a href={`/events/${event.id}`} key={event.id}>
                <EventCard event={event} />
              </a>
            ))
          : Array.from({ length: 12 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
      </div>

      {/* Sentinel para cargar más eventos */}
      <div ref={sentinelRef} className="h-10 w-full bg-transparent"></div>
    </div>
  );
}
