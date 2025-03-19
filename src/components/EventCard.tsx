import React from "react";
import Image from "next/image";

export default function EventCard({ event }: any) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48 w-full">
        <Image
          src="/images/coming-soon.jpg"
          alt={event.title || "Event Image"}
          layout="fill"
          objectFit="fit"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary">
          {event.category}
        </span>
        <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <span>{event.date}</span>
          <span className="mx-2">•</span>
          <span>{event.location}</span>
        </div>
        <p className="text-sm mt-2 line-clamp-2">
          Disfruta de una noche mágica con los mejores artistas locales en el
          corazón de la ciudad.
        </p>
      </div>
    </div>
  );
}
