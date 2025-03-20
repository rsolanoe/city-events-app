import { Badge } from "@/components/common/Badge";
import { getEventById } from "@/libs/services/events";
import { formatDate } from "@/libs/utils/dates.helpers";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { event } = await getEventById(id);

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { event } = await getEventById(id);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center flex-col px-4">
      {/* Botón de regreso */}
      <div className="container pt-6 pb-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Volver a eventos
        </Link>
      </div>

      {/* Contenido principal con sombra mejorada */}
      <div className="container pb-16">
        <div className="bg-background rounded-xl overflow-hidden border border-gray-300/50 shadow-2xl transition-all hover:shadow-[0px_10px_30px_rgba(0,0,0,0.15)]">
          <div className="grid md:grid-cols-2">
            {/* Imagen a la izquierda */}
            <div className="relative h-64 md:h-full">
              <Image
                src={event.image || "/images/pdp-placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Información a la derecha */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge text={event.category} />
                <div className="flex items-center gap-1 text-muted-foreground">
                  <FaHeart className="h-4 w-4" />
                  <span className="text-sm">128 interesados</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
                {event.title}
              </h1>

              <div className="grid gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>

              <p className="text-base mb-8">{event.description}</p>

              {/* Tarjeta de precio con tamaño ajustado en mobile */}
              <div className="mt-auto bg-muted/30 rounded-xl p-4 md:p-6 border">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Precio de entrada
                </h3>
                <p className="text-2xl md:text-3xl font-bold mb-6">
                  {event.price}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FaClock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Quedan 45 entradas</span>
                  </div>
                </div>

                <button className="w-full">Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
