"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Hero({ search, setSearch }: HeroProps) {

  return (

    <section className="relative overflow-hidden bg-background text-foreground py-28 px-6">


      {/* Glow Background */}

      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      </div>




      <div className="relative max-w-6xl mx-auto text-center">


        <motion.h1

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

        >

          Explore The Future With AI Tools

        </motion.h1>



        <p className="mt-6 text-gray-600 dark:text-slate-400 text-lg">

          Discover powerful AI tools for writing, coding,
          images, videos, design and productivity.

        </p>




        {/* Search */}

        <div className="mt-10 flex justify-center">


          <input

            type="text"

            placeholder="Search AI tools..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="w-full max-w-xl px-6 py-4 rounded-xl text-black shadow-lg outline-none"

          />


        </div>




        {/* Button */}

        <Link

          href="/tools"

          className="inline-block mt-8 px-8 py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition"

        >

          Explore AI Tools 🚀

        </Link>


      </div>


    </section>

  );
}