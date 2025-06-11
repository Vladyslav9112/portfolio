export default function ContentWrapper({ children }) {
  return (
    <section className="mx-auto xl:w-[1440px] px-5 md:px-10 xl:px-20">
      {children}
    </section>
  );
}
