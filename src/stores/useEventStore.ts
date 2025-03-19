import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  filterByTitle,
  filterByCategory,
  filterByLocation,
  filterByDateRange,
} from "../utils/filter.helpers";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

interface FilterOptions {
  categories: string[];
  locations: string[];
  dates: { from?: string; to?: string };
  title: string;
}

interface EventStore {
  events: Event[];
  filteredEvents: Event[];
  categories: string[];
  locations: string[];
  filterOptions: FilterOptions;
  setEvents: (data: {
    events: Event[];
    categories: string[];
    locations: string[];
  }) => void;
  setFilterOptions: (filters: Partial<FilterOptions>) => void;
  removeFilterOption: (
    type: "category" | "location" | "date",
    value?: string
  ) => void;
  applyFilters: () => void;
}

export const useEventStore = create<EventStore>()(
  devtools(
    (set, get) => ({
      events: [],
      filteredEvents: [],
      categories: [],
      locations: [],

      /**
       * Filter options used to filter the events.
       *
       * @property categories - An array of category strings to filter events by their category.
       * @property locations - An array of location strings to filter events by their location.
       * @property dates - An object containing optional `from` and `to` date strings to filter events by date range.
       * @property title - A string to filter events by their title.
       */
      filterOptions: {
        categories: [],
        locations: [],
        dates: {},
        title: "",
      },

      /**
       * Updates the events data and filter options in the event store.
       * The categories and locations arrays are used to populate the filter dropdowns.
       * The filteredEvents array is set to the same value as the events array,
       * so that the component will display all events initially.
       * @param data - The data containing the events and filter options.
       */
      setEvents: (data) => {
        set(
          {
            events: data.events,
            categories: data.categories,
            locations: data.locations,
            filteredEvents: data.events, // Inicialmente sin filtros
          },
          false,
          "setEvents"
        );
      },

      /**
       * Updates the filter options in the event store and applies the updated filters.
       *
       * Merges the provided filters with the existing filter options, ensuring that
       * only the specified filters are updated. After updating the filter options,
       * it automatically triggers the application of filters through the `applyFilters` method.
       *
       * @param filters - Partial filter options to be merged with the current filter options.
       */

      setFilterOptions: (filters) => {
        set(
          (state) => ({
            filterOptions: {
              ...state.filterOptions,
              ...filters,
            },
          }),
          false,
          "setFilterOptions"
        );
        get().applyFilters();
      },

      /**
       * Applies all filters to the events array and updates the filteredEvents array.
       *
       * It uses the `every` method to ensure that all filters are applied to each event.
       * If any filter returns false, the event is not included in the filteredEvents array.
       *
       * The filters are:
       * - filterByTitle: filters by title
       * - filterByCategory: filters by categories
       * - filterByLocation: filters by locations
       * - filterByDateRange: filters by date range
       */

      /**
       * Elimina un filtro específico según su tipo.
       * - `category`: Elimina una categoría específica.
       * - `location`: Elimina una ubicación específica.
       * - `date`: Resetea el `from` y/o `to` en el rango de fechas.
       *
       * Luego de eliminar el filtro, vuelve a aplicar los filtros restantes.
       */
      removeFilterOption: (type, value) => {
        set(
          (state) => {
            const updatedFilterOptions = { ...state.filterOptions };

            if (type === "category") {
              updatedFilterOptions.categories =
                updatedFilterOptions.categories.filter(
                  (category) => category !== value
                );
            } else if (type === "location") {
              updatedFilterOptions.locations =
                updatedFilterOptions.locations.filter(
                  (location) => location !== value
                );
            } else if (type === "date") {
              updatedFilterOptions.dates = {
                ...updatedFilterOptions.dates,
                ...(value === "from" ? { from: undefined } : {}),
                ...(value === "to" ? { to: undefined } : {}),
              };
            }

            return { filterOptions: updatedFilterOptions };
          },
          false,
          "removeFilterOption"
        );

        get().applyFilters();
      },
      applyFilters: () => {
        const { events, filterOptions } = get();

        const filters = [
          filterByTitle(filterOptions.title),
          filterByCategory(filterOptions.categories),
          filterByLocation(filterOptions.locations),
          filterByDateRange(filterOptions.dates),
        ];

        const filtered = events.filter((event) =>
          filters.every((filter) => filter(event))
        );

        set({ filteredEvents: filtered }, false, "applyFilters");
      },
    }),
    { name: "EventStore" }
  )
);
