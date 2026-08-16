import type { Metadata } from "next";
import ToolsClient from "./ToolsClient";

const siteUrl = "https://ai-tools-hub-ebon-kappa.vercel.app";

export const metadata: Metadata = {
  title: "Best AI Tools Directory | AI Tools Hub",

  description:
    "Discover the best AI tools for writing, coding, image generation, video, design, productivity, and more. Explore and compare powerful AI tools in one directory.",

  keywords: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "free AI tools",
    "AI writing tools",
    "AI coding tools",
    "AI image generation tools",
    "AI video tools",
    "AI design tools",
    "AI productivity tools",
    "AI tools for students",
    "AI tools for developers",
  ],

  alternates: {
    canonical: `${siteUrl}/tools`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Best AI Tools Directory | AI Tools Hub",
    description:
      "Discover and explore the best AI tools for writing, coding, images, video, design, productivity, and more.",
    url: `${siteUrl}/tools`,
    siteName: "AI Tools Hub",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Best AI Tools Directory | AI Tools Hub",
    description:
      "Discover and explore the best AI tools for writing, coding, images, video, design, productivity, and more.",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}