import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Azrul | Portfolio",
  description: "Frontend and mobile developer portfolio by Azrul Mustaqqim.",
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
