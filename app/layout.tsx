import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-tools-hub-ebon-kappa.vercel.app"),

  title: {
    default: "AI Tools Hub – Discover the Best AI Tools",
    template: "%s | AI Tools Hub",
  },

  description:
    "Discover the best AI tools for writing, coding, image generation, video, design, productivity, and more. Explore AI tools in one simple directory.",

  keywords: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "free AI tools",
    "AI writing tools",
    "AI coding tools",
    "AI image tools",
    "AI video tools",
    "AI productivity tools",
  ],

  authors: [{ name: "AI Tools Hub" }],

  openGraph: {
    title: "AI Tools Hub – Discover the Best AI Tools",
    description:
      "Explore the best AI tools for writing, coding, images, video, design, and productivity.",
    url: "https://ai-tools-hub-ebon-kappa.vercel.app",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub – Best AI Tools Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub – Discover the Best AI Tools",
    description:
      "Explore the best AI tools for writing, coding, images, video, design, and productivity.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}