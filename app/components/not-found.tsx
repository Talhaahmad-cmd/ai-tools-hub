"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold text-cyan-400"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl mt-4 text-gray-300"
        >
          Page not found
        </motion.p>

        <Link
          href="/"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          Go Home
        </Link>

      </div>

    </main>
  );
}