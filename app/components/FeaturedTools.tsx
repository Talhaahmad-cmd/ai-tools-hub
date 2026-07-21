"use client";

import Link from "next/link";
import tools from "../data/tools";

export default function FeaturedTools() {
  const featuredTools = tools.slice(0, 3);

  return (
<section className="bg-background py-20 px-6">      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-foreground text-center">
          ⭐ Featured AI Tools
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Our top AI tool recommendations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="bg-gray-100 dark:bg-slate-900 rounded-2xl p-8 border border-gray-300 dark:border-slate-700 hover:border-cyan-500 transition"
            >
              <div className="text-6xl mb-4">
                {tool.logo}
              </div>

             <h3 className="text-2xl font-bold text-foreground">
                {tool.name}
              </h3>

             <p className="text-gray-600 dark:text-slate-400 mt-3">
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