import React from "react";
import Image from "next/image";
import { formatDate } from "@/libs/utils/dates.helpers";
import { Badge } from "../common/Badge";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

const EventCard = React.memo(({ event }: { event: Event }) => {
  console.log("Rendering EventCard:", event.id);
  return (
    <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200/50 bg-background transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={event.image || "/images/coming-soon.jpg"}
          alt={event.title || "Event Image"}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-4">
        <Badge text={event.category} />
        <h3 className="text-lg font-semibold mt-1 text-gray-900">
          {event.title}
        </h3>
        <div className="flex items-center text-sm text-gray-700 mt-2">
          <span>{formatDate(event.date, "dd MMMM")}</span>
          <span className="mx-2">•</span>
          <span>{event.location}</span>
        </div>
        <p className="text-sm mt-2 line-clamp-2 text-gray-800">
          {event.description}
        </p>
      </div>
    </div>
  );
});

EventCard.displayName = "EventCard";

export default EventCard;
