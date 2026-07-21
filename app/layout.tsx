import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "AI Tools Hub",
    template: "%s | AI Tools Hub",
  },

  description:
    "Discover the best AI tools for writing, coding, design, productivity, images, video, and more.",

  keywords: [
    "AI tools",
    "ChatGPT",
    "Claude",
    "Midjourney",
    "AI directory",
    "AI software",
    "Artificial Intelligence",
  ],

  authors: [{ name: "AI Tools Hub" }],

  openGraph: {
    title: "AI Tools Hub",
    description:
      "Discover the best AI tools in one place.",
    url: "https://yourdomain.com",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub",
    description:
      "Discover the best AI tools.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}