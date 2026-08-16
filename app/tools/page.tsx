import type { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "Best AI Tools Directory",
  description:
    "Explore the best AI tools for writing, coding, images, video, design, and productivity. Find powerful AI tools in one easy-to-use directory.",
  keywords: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "free AI tools",
    "AI writing tools",
    "AI coding tools",
    "AI image tools",
    "AI video tools",
    "AI design tools",
    "AI productivity tools",
  ],
  openGraph: {
    title: "Best AI Tools Directory | AI Tools Hub",
    description:
      "Explore the best AI tools for writing, coding, images, video, design, and productivity.",
    url: "https://ai-tools-hub-ebon-kappa.vercel.app/tools",
    siteName: "AI Tools Hub",
    type: "website",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}