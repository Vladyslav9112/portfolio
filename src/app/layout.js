import "./styles/globals.css";
import "./styles/animation.css";
import "./styles/font.css";
import ClientLayout from "./ClientLoyout";

export const metadata = {
  title: "PORTFOLIO: Vlad Kryklyvets",
  description:
    "Vlad Kryklyvets - Full Stack Developer from Ukraine. Portfolio with projects, skills, and contact info.",
  keywords: [
    "Vlad Kryklyvets",
    "Full Stack Developer",
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
  icons: { icon: "/icons/favicon.ico" },
  openGraph: {
    title: "PORTFOLIO: Vlad Kryklyvets",
    description: "Vlad Kryklyvets - Full Stack Developer from Ukraine.",
    url: "https://portfolio-omega-gilt-20.vercel.app",
    siteName: "Vlad Kryklyvets Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/3NbpH7Jm/Screenshot-2.jpg",
        width: 1200,
        height: 627,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTFOLIO: Vlad Kryklyvets",
    description: "Vlad Kryklyvets - Full Stack Developer from Ukraine.",
    images: ["https://i.postimg.cc/3NbpH7Jm/Screenshot-2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen overflow-x-hidden"
        style={{ background: "#0B0F1A", color: "#e2e8f0" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
