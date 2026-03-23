export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 mt-8 border-t"
      style={{ borderColor: "rgba(108,99,255,0.12)" }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        style={{ color: "rgba(226,232,240,0.3)" }}
      >
        <p>© {year} Vlad Kryklyvets. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="gradient-text font-semibold">Next.js</span> &{" "}
          <span className="gradient-text font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
