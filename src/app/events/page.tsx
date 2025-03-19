import React from "react";

import { getEvents } from "@/services/getEvents";
import HomePageWrapper from "@/components/Wrappers/HomePageWrapper";
import NavBar from "@/components/Navbar/NavBar";

export default async function HomePage() {
  const initialData = await getEvents();

  return (
    <>
      <NavBar initialData={initialData} />
      <HomePageWrapper initialData={initialData} />
    </>
  );
}
