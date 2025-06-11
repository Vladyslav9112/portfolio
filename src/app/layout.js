import "./styles/globals.css";
import "./styles/animation.css";
import "./styles/font.css";
import ClientLayout from "./ClientLoyout"; // 👈 Імпорт клієнтської оболонки

export const metadata = {
  title: "PORTFOLIO: Vlad Kryklyvets",
  description:
    "Personal portfolio showcasing projects, skills, and experience.",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative min-h-screen overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
