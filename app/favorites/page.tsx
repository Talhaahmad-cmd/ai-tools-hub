"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import tools from "../data/tools";

export default function FavoritesPage() {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(saved);
  }, []);


  const favoriteTools = tools.filter((tool) =>
    favorites.includes(Number(tool.id))
  );


  return (
  <main className="min-h-screen bg-background text-foreground px-6 py-20">

      <h1 className="text-5xl font-bold text-center">
        ⭐ Favorite AI Tools
      </h1>


      {favoriteTools.length === 0 ? (

        <p className="text-center text-slate-400 mt-12">
          No favorite tools yet.
        </p>

      ) : (

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">

          {favoriteTools.map((tool) => (

            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
             className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition"
            >

              <div className="text-6xl">
                {tool.logo}
              </div>

              <h2 className="text-2xl font-bold mt-4">
                {tool.name}
              </h2>

             <p className="text-gray-600 dark:text-slate-400 mt-3">
                {tool.description}
              </p>

            </Link>

          ))}

        </div>

      )}

    </main>
  );
}