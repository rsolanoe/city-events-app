import React from "react";

import { getEvents } from "@/libs/services/events";
import HomePageWrapper from "@/components/Wrappers/HomePageWrapper";
import { NavBar } from "@/components/Navbar";

export default async function HomePage() {
  const initialData = await getEvents();

  return (
    <>
      <NavBar initialData={initialData} />
      <HomePageWrapper initialData={initialData} />
    </>
  );
}
