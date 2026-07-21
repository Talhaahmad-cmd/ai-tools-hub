"use client";

import { useEffect, useState } from "react";

type Props = {
  toolId: number;
};

export default function FavoriteButton({ toolId }: Props) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = () => {
    let updated: number[];

    if (favorites.includes(toolId)) {
      updated = favorites.filter((id) => id !== toolId);
    } else {
      updated = [...favorites, toolId];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleFavorite}
      className="text-3xl transition hover:scale-110"
    >
      {favorites.includes(toolId) ? "❤️" : "🤍"}
    </button>
  );
}