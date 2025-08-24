import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configure Roboto font
const roboto = Roboto({
  weight: ["400", "700"], // Specify weights you need
  style: ["normal", "italic"], // Specify styles if needed
  subsets: ["latin"], // Specify subsets
  variable: "--font-roboto", // CSS variable for Roboto
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  weight: ["400", "700"], // Specify weights you need
  subsets: ["latin"], // Specify subsets
  variable: "--font-geist-mono", // Distinct CSS variable for Geist Mono
});

export const metadata = {
  title: "KidHub",
  description:
    "Kidhub is a website for Doon International School kids to display their work in a single webpage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
