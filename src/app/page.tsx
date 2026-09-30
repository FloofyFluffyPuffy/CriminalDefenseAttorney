import HomeHero from "@/components/Home/HomeHero";
import HomeAbout from "@/components/Home/HomeAbout";
import HomePractices from "@/components/Home/HomePractices";
export default function Home() {
  return (
      <main>
        <HomeHero/>
        <HomeAbout/>
        <HomePractices/>
        <section id="contact" className="bg-[#001541] px-6 py-16 text-white lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6232E]">Contact</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Speak With a Defense Lawyer Today</h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              If you&apos;re facing criminal charges, time is critical. Call now for a free consultation and get the legal guidance you need.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+14055250100" className="inline-flex items-center bg-[#D6232E] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#001541]">
                (405) 525-0100
              </a>
              <a href="mailto:ron@thejonesfirm.com" className="inline-flex items-center border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-[#D6232E] hover:text-[#D6232E]">
                ron@thejonesfirm.com
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}
