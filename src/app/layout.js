import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/animation.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
