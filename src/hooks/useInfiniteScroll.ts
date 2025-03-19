import { useState, useRef, useCallback, useEffect, useMemo } from "react";

export function useInfiniteScroll<T>(items: T[], batchSize = 12) {
  const [count, setCount] = useState(batchSize);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // 🔹 1. Memorizar `visibleItems`
  const visibleItems = useMemo(() => items.slice(0, count), [items, count]);

  // 🔹 2. Optimizar `loadMore`
  const loadMore = useCallback(() => {
    setCount((prevCount) => prevCount + batchSize);
  }, [batchSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "20px" }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return { visibleItems, sentinelRef };
}