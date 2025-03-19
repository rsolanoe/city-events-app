import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export function formatDate(dateString: string, dateFormat: string = "dd 'de' MMMM yyyy, hh:mm a") {
  const date = parseISO(dateString);
  return format(date, dateFormat, { locale: es }); 
}