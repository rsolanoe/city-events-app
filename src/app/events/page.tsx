import React from "react";

import { getEvents } from "@/services/getEvents";
import EventList from "@/components/EventList";
import Header from "@/components/Header";

export default async function HomePage() {
  const initialData = await getEvents();

  return (
    <>
      <Header initialData={initialData} />
      <EventList initialData={initialData} />
    </>
  );
}
