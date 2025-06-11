export default function ContentWrapper({ children }) {
  return (
    <section className="min-h-screen mx-auto xl:w-[1440px] p-5 md:p-10 xl:p-20">
      {children}
    </section>
  );
}
