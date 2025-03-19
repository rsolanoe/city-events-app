import { mockEvents } from "@/mocks/events.mock";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 600));
  return Response.json(mockEvents);
}