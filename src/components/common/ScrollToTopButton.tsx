"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 cursor-pointer right-6 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:bg-gray-700`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
}
