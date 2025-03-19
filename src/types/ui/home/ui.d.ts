import { Event } from "@/types/store/event";

export interface Props {
  initialData: { events: Event[]; categories: string[]; locations: string[] };
}