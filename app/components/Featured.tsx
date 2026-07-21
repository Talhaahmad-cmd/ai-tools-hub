"use client";

import { motion } from "framer-motion";

export default function Featured() {
  const featured = [
    {
      name: "ChatGPT",
      icon: "🤖",
      text: "AI assistant for writing, coding and ideas.",
    },
    {
      name: "Midjourney",
      icon: "🎨",
      text: "Create amazing AI images.",
    },
    {
      name: "GitHub Copilot",
      icon: "💻",
      text: "AI coding assistant for developers.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          ⭐ Featured AI Tools
        </motion.h2>


        <div className="grid md:grid-cols-3 gap-6">

          {featured.map((tool, index) => (

            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >

              <div className="text-5xl mb-4">
                {tool.icon}
              </div>

              <h3 className="text-xl font-bold text-cyan-400">
                {tool.name}
              </h3>

              <p className="text-slate-300 mt-3">
                {tool.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}