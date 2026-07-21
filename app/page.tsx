"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedTools from "./components/FeaturedTools";
import TrendingTools from "./components/TrendingTools";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ReviewSection from "./components/ReviewSection";
export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
      />

      <Stats />

      <FeaturedTools />

      <TrendingTools />

      <Features
        search={search}
      />
<ReviewSection />
      <Pricing />

      <Footer />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AI Tools Hub",
      url: "https://yourdomain.com",
      description:
        "Discover the best AI tools for writing, coding, design, and productivity.",
    }),
  }}
/>
    </main>
  );
}