export const EventCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      {/* Imagen */}
      <div className="h-40 w-full rounded-md bg-gray-200 animate-pulse"></div>

      {/* Categoría */}
      <div className="mt-4 h-5 w-20 rounded-md bg-gray-200 animate-pulse"></div>

      {/* Título */}
      <div className="mt-2 h-6 w-3/4 rounded-md bg-gray-200 animate-pulse"></div>

      {/* Fecha y Ubicación */}
      <div className="mt-2 h-4 w-1/2 rounded-md bg-gray-200 animate-pulse"></div>

      {/* Descripción */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded-md bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-5/6 rounded-md bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-3/4 rounded-md bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};
