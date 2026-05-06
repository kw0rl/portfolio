import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";

export const metadata: Metadata = {
  metadataBase: new URL('https://azrulism.my'),
  title: "Azrul | Frontend Developer Portfolio",
  description: "Portfolio of Azrul Mustaqqim, a fresh graduate and Frontend Developer passionate about creating responsive websites and app interfaces with a focus on clean structure and modern frontend craft.",
  keywords: ["Frontend Developer", "Web Developer", "React", "Next.js", "Portfolio", "Azrul Mustaqqim", "Malaysia", "UI/UX"],
  authors: [{ name: "Azrul Mustaqqim" }],
  creator: "Azrul Mustaqqim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azrulism.my",
    title: "Azrul | Frontend Developer Portfolio",
    description: "Portfolio of Azrul Mustaqqim, a fresh graduate and Frontend Developer passionate about creating responsive websites and app interfaces.",
    siteName: "Azrul's Portfolio",
    images: [
      {
        url: "/og-image.jpeg", // Replace with your actual image in the public folder
        width: 1200,
        height: 630,
        alt: "Azrul Mustaqqim - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azrul | Frontend Developer Portfolio",
    description: "Portfolio of Azrul Mustaqqim, a fresh graduate and Frontend Developer passionate about creating responsive websites and app interfaces.",
    images: ["/og-image.jpeg"], // Replace with your actual image in the public folder
    creator: "@azrul", // Update with your actual twitter handle if you have one
  },
  alternates: {
    canonical: "https://azrulism.my",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
