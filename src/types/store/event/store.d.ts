export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface FilterOptions {
  categories: string[];
  locations: string[];
  dates: { from?: string; to?: string };
  title: string;
}

export interface EventStore {
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