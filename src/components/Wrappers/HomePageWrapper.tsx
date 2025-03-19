"use client";

import React, { useEffect } from "react";
import { ActiveFilters } from "../ActionFilters";
import EventList from "../event/EventList";
import { useEventStore } from "@/stores/event/useEventStore";
import { Props } from "@/types/ui/home";

/**
 * HomePageWrapper component initializes the event data and displays a list of filtered events.
 *
 * This component uses the useEventStore hook to manage the event state. It sets the initial
 * event data on mount and renders event-related components such as ActiveFilters and EventList.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.initialData - Initial data for events, categories, and locations.
 * @param {Array} props.initialData.events - An array of event objects.
 * @param {Array} props.initialData.categories - An array of category strings.
 * @param {Array} props.initialData.locations - An array of location strings.
 */

export default function HomePageWrapper({ initialData }: Props) {
  const { setEvents, filteredEvents } = useEventStore();

  useEffect(() => {
    setEvents(initialData);
  }, [initialData, setEvents]);

  return (
    <div className="px-8 py-6 max-w-7xl mx-auto">
      <p className="mb-4">Events found {filteredEvents.length}</p>
      <ActiveFilters />
      <EventList filteredEvents={filteredEvents} />
    </div>
  );
}
