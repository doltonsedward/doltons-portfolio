import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doltons Edward – Full Stack Developer | React, Node.js, React Native",
  description:
    "Portfolio of Doltons Edward, an experienced Full Stack Developer specializing in React.js, Node.js, and React Native. Explore web and mobile projects, tech stacks, and engineering achievements. Open for remote work and freelance opportunities.",
  keywords: [
    "Doltons Edward",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "Web Developer Indonesia",
    "Remote Software Engineer",
    "Frontend Backend Developer",
    "Portfolio Developer Indonesia",
    "Hire Developer Remote",
  ],
  authors: [{ name: "Doltons Edward", url: "https://dollong.vercel.app" }],
  creator: "Doltons Edward",
  metadataBase: new URL("https://dollong.vercel.app"),
  openGraph: {
    title:
      "Doltons Edward Nicholas – Fullstack Web & App Dev | Tech Mentor for Gen Z ",
    description:
      "Explore the portfolio of Doltons Edward Nicholas – Fullstack Web & App Developer. Specializing in React, Node.js, and React Native. Building Apps & Helping New Devs Ship Fast.",
    url: "https://dollong.vercel.app",
    siteName: "Doltons Edward Nicholas Portfolio",
    images: [
      {
        url: "https://dollong.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Doltons Edward Nicholas – Fullstack Web & App Dev | Tech Mentor for Gen Z ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Doltons Edward Nicholas – Fullstack Web & App Dev | Tech Mentor for Gen Z ",
    description:
      "See Doltons Edward Nicholas's web & app development work in React, Node.js, and React Native. Building Apps & Helping New Devs Ship Fast.",
    images: ["https://dollong.vercel.app/api/og"],
    creator: "@dollongid",
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
