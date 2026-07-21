"use client";

import { motion } from "framer-motion";
import tools from "../data/tools";

type FeaturesProps = {
  search: string;
};

export default function Features({ search }: FeaturesProps) {

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-slate-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Explore AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {filteredTools.map((tool, index) => (

            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}

              whileHover={{
                scale: 1.05,
              }}

              className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
            >

              <h3 className="text-xl text-white font-bold mb-3">
                {tool.name}
              </h3>

              <p className="text-slate-300">
                {tool.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}