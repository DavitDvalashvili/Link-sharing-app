import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AuthProvider from "@/utils/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <body className={instrumentSans.className}>
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
