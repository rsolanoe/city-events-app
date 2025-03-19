import { mockEvents } from "@/mocks/events.mock";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1600)); // Simula un delay de 300ms
  return Response.json({ mockEvents });
}