export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-[#001541] lg:px-10">
      <div className="rounded-2xl border border-[#001541]/10 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6232E]">About</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">The Brilliant Brawler</h1>
        <p className="mt-6 text-lg leading-8 text-[#001541]/80">
          Ron Jones is a dedicated criminal defense attorney serving clients across Oklahoma.
          He brings a relentless, strategic approach to every case and is committed to protecting
          the rights of people facing serious criminal charges.
        </p>
        <p className="mt-6 text-lg leading-8 text-[#001541]/80">
          Whether you are dealing with DUI, drug offenses, violent crimes, federal charges, or other
          criminal matters, The Jones Firm, PLLC focuses on clear communication, strong advocacy,
          and tireless case preparation.
        </p>
      </div>
    </main>
  );
}
