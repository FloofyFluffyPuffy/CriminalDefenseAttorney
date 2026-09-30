export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-[#001541] lg:px-10">
      <div className="rounded-2xl border border-[#001541]/10 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6232E]">Contact</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Schedule Your Free Consultation</h1>
        <p className="mt-6 text-lg leading-8 text-[#001541]/80">
          If you are facing criminal charges, don&apos;t wait to get legal help. Reach out today to speak
          with The Jones Firm, PLLC about your case.
        </p>

        <div className="mt-8 space-y-4 text-lg">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+14055250100" className="text-[#D6232E] hover:underline">
              (405) 525-0100
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ron@thejonesfirm.com" className="text-[#D6232E] hover:underline">
              ron@thejonesfirm.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
