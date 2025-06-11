import "./styles/globals.css";
import "./styles/animation.css";
import "./styles/font.css";
import ClientLayout from "./ClientLoyout"; // 👈 Імпорт клієнтської оболонки

export const metadata = {
  title: "PORTFOLIO: Vlad Kryklyvets",
  description:
    "Vlad Kryklyvets - Front-End Developer from Ukraine. Portfolio with projects, skills, and contact info.",
  keywords: [
    "Vlad Kryklyvets",
    "Front-End Developer",
    "portfolio",
    "React",
    "Next.js",
  ],
  authors: [
    {
      name: "Vlad Kryklyvets",
      url: "https://portfolio-omega-gilt-20.vercel.app",
    },
  ],
  creator: "Vlad Kryklyvets",
  robots: "index, follow",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative min-h-screen overflow-x-hidden ">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
