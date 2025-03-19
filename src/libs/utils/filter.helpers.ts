import { Event } from "@/types/store/event";

export const filterByTitle = (title: string) => (event: Event) => !title || event.title.toLowerCase().includes(title.toLowerCase());


export const filterByCategory = (categories: string[]) => (event: Event) => categories.length === 0 || categories.includes(event.category);


export const filterByLocation = (locations: string[]) => (event: Event) => locations.length === 0 || locations.includes(event.location);


  /**
   * Filter events by date range.
   *
   * If `from` date is given, only events with a date greater than or equal to `from` will be included.
   * If `to` date is given, only events with a date less than or equal to `to` will be included.
   *
   * If both `from` and `to` dates are given, only events with a date greater than or equal to `from` and less than or equal to `to` will be included.
   *
   * If neither `from` nor `to` date is given, all events will be included.
   *
   * @param {Object} dates - Object with `from` and/or `to` string properties representing dates.
   * @param {string} dates.from - The earliest date (inclusive) that the event must have.
   * @param {string} dates.to - The latest date (inclusive) that the event must have.
   * @returns {function} A filter function that returns true if the event's date is within the given date range.
   */
export const filterByDateRange = (dates: { from?: string; to?: string; }) => (event: Event) => {
  if (!dates.from && !dates.to) return true;

  const eventDate = new Date(event.date);
  const fromDate = dates.from ? new Date(dates.from) : null;
  const toDate = dates.to ? new Date(dates.to) : null;

  return (
    (!fromDate || eventDate >= fromDate) && (!toDate || eventDate <= toDate)
  );
};
