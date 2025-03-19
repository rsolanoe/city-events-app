"use client";

import { Event } from "@/stores/useEventStore";

import EventCard from "./EventCard";
import { EventCardSkeleton } from "./EventListSkeleton";

export default function EventList({
  filteredEvents,
}: {
  filteredEvents: Event[];
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0
          ? filteredEvents.map((event, index) => (
              <a href={`/events/${event.id}`} key={event.id}>
                <EventCard key={index + event.id} event={event} />
              </a>
            ))
          : Array.from({ length: 12 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
}
