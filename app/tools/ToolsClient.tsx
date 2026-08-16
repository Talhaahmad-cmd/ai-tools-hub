"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import tools from "../data/tools";
import FavoriteButton from "../components/FavoriteButton";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Writing",
    "Coding",
    "Images",
    "Video",
    "Design",
    "Productivity",
  ];

  const filteredTools = tools.filter((tool) => {
    const matchSearch = tool.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || tool.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Explore AI Tools
      </h1>

      <p className="text-gray-500 dark:text-slate-400 text-center mt-4">
        Find the perfect AI tool for your work.
      </p>

      {/* Search */}
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-6 py-4 rounded-xl text-black outline-none"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-xl transition ${
              category === item
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center">
        <p className="text-gray-400">
          {filteredTools.length} tool
          {filteredTools.length !== 1 ? "s" : ""} found
        </p>

        {search && (
          <button
            onClick={() => setSearch("")}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {filteredTools.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <h2 className="text-3xl font-bold">
              No tools found 😕
            </h2>

            <p className="text-slate-400 mt-3">
              Try a different search or category.
            </p>
          </div>
        ) : (
          filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <Link
                href={`/tools/${tool.slug}`}
                className="block bg-white/10 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="text-6xl group-hover:scale-110 transition duration-300">
                    {tool.logo}
                  </div>

                  <FavoriteButton toolId={tool.id} />
                </div>

                <h2 className="text-2xl font-bold mt-4 group-hover:text-cyan-400 transition">
                  {tool.name}
                </h2>

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
            </motion.div>
          ))        )}
      </div>
    </main>
  );
}