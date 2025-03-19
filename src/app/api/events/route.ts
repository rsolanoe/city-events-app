import { mockEvents } from "@/mocks/events.mock";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 150)); // Simula un delay de 300ms
  return Response.json({ mockEvents });
}