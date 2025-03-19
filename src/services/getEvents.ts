import { notFound } from "next/navigation";

/**
 * Fetches events data from the API and returns a structured object.
 * 
 * @returns An object containing:
 * - events: an array of event objects.
 * - categories: an array of unique category strings extracted from the events.
 * - locations: an array of unique location strings extracted from the events.
 * 
 * @throws {Error} If there is an issue fetching the events data from the API.
 */

export async function getEvents(): Promise<{
  events: any[];
  categories: string[];
  locations: string[];
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener eventos");
  }

  const { mockEvents: events } = await res.json();

  const categories: string[] = Array.from(new Set(events.map((event: any) => event.category)));
  const locations: string[] = Array.from(new Set(events.map((event: any) => event.location)));

  return { events, categories, locations };
}


/**
 * Get an event by its id
 * @param id event id
 * @returns An object with a single property, event, which contains the event data
 * @throws {404} If the event is not found
 */
export async function getEventById(id: string): Promise<{
  event: any;
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }  
  
  const event = await res.json();

  return { event };
}