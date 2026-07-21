"use client";

import Link from "next/link";
import tools from "../data/tools";

export default function TrendingTools() {
  const trending = [...tools]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          🔥 Trending AI Tools
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Discover the highest-rated AI tools.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {trending.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <div className="text-5xl">{tool.logo}</div>

              <h3 className="text-2xl font-bold text-white mt-4">
                {tool.name}
              </h3>

              <p className="text-slate-400 mt-3">
                {tool.description}
              </p>

              <div className="flex justify-between mt-6">
                <span className="text-cyan-400">
                  {tool.category}
                </span>

                <span className="text-yellow-400">
                  ⭐ {tool.rating}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}