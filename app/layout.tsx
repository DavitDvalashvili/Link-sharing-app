import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  weight: ["400", "700", "500"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: "Link sharing app",
  description: "Invoice App created with next.js tailwind.css mongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
