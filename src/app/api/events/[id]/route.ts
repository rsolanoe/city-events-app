import { NextResponse } from "next/server";
import { mockEvents } from "@/mocks/events.mock";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await delay(600);

  const { id } = await params;
  
  const event = mockEvents.find(event => event.id === id);
  
  if (!event) {
    return NextResponse.json({ error: "Evento no encontrado" }, { status: 404 });
  }

  return NextResponse.json(event);
}