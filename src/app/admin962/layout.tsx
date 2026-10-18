import type { Metadata } from "next";
import { Geist, Cairo } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "NextWeb Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-100">
        {children}
      </body>
    </html>
  );
}
