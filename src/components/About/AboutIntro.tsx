import React from 'react'

const AboutIntro = () => {
  return (
    <section className="AboutIntro relative overflow-hidden py-8 checkBg">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#D6232E]/10 blur-[110px]" />
      <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#001442]/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D6232E] text-sm font-bold text-white">
            R
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
            Counsel Chronicle • Oklahoma City
          </span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="lg:sticky lg:top-28 lg:w-[360px] xl:w-[390px]">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#D6232E]/40 bg-[#001442] text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="relative h-[12.5rem] w-full overflow-hidden bg-[#111827]">
                <img
                  className="h-full w-full object-cover object-center"
                  src="assets/lookCrop.png"
                  alt="Ron Jones"
                />
              </div>

              <div className="space-y-3 bg-[#001442] p-4 text-[10px] text-white/85">
                <div className="border-b border-white/15 pb-2">
                  <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#D6232E]">
                    Founder &amp; Lead Trial Counsel
                  </p>
                  <h2 className="text-[1.35rem] font-black uppercase leading-none tracking-tight text-white">
                    Ron Jones,
                    <span className="mt-1 block text-[1rem] text-white/95">Esq.</span>
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-[9px] text-white/75">
                  <span className="text-[#D6232E]">●</span>
                  <span>Oklahoma Bar Association • Admitted 2018</span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="border-b border-white/10 pb-2">
                    <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                      Education &amp; Academics
                    </p>
                    <div className="space-y-2 leading-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-semibold text-white">University of Arkansas – Fayetteville</span>
                        <span className="whitespace-nowrap text-[#D6232E]">2012</span>
                      </div>
                      <p className="text-white/70">Undergraduate studies</p>
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-semibold text-white">University of Chicago Law School</span>
                        <span className="whitespace-nowrap text-[#D6232E]">2015</span>
                      </div>
                      <p className="text-white/70">J.D. • Top 5 law school in America</p>
                    </div>
                  </div>

                  <div className="pt-1">
                    <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                      Trial Trajectory
                    </p>
                    <div className="space-y-2 leading-5">
                      <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <span className="font-semibold text-white">The Jones Firm, PLLC</span>
                        <span className="whitespace-nowrap text-[#D6232E]">2021-Present</span>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <span className="font-semibold text-white">Still She Rises – Tulsa</span>
                        <span className="whitespace-nowrap text-[#D6232E]">2018-2021</span>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <span className="font-semibold text-white">Cannon &amp; Associates</span>
                        <span className="whitespace-nowrap text-[#D6232E]">Oklahoma</span>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <span className="font-semibold text-white">Durkin &amp; Roberts</span>
                        <span className="whitespace-nowrap text-[#D6232E]">Chicago</span>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <span className="font-semibold text-white">Lawndale Christian Legal Center</span>
                        <span className="whitespace-nowrap text-[#D6232E]">Chicago</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="font-semibold text-white">Holistic Defense Practice</span>
                        <span className="whitespace-nowrap text-[#D6232E]">Chicago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-5 flex flex-col">
              <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                Litigation Heritage &amp; Trial Philosophy
              </span>
              <h1 className="text-[2rem] font-bold leading-tight text-white md:text-[2.5rem]">
                The Advocate&apos;s Crucible
              </h1>
              <div className="mt-2 h-1 w-24 rounded-full bg-[#D6232E]" />
              <p className="mt-4 text-[1.05rem] italic leading-relaxed text-white/90 md:text-[1.2rem]">
                “Ron Jones is living his dream to help clients continue living theirs.”
              </p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { value: '10-Min', label: 'Acquittal', sub: 'Historic Verdict' },
                { value: '$24K', label: '1st-Yr Salary', sub: 'People First' },
                { value: '2021', label: 'Established', sub: 'OKC Chambers' },
                { value: 'Top 5', label: 'UChicago', sub: 'Law School J.D.' }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[#001442]/70 p-3 shadow-[0_12px_25px_rgba(0,0,0,0.18)]"
                >
                  <div className="text-[1.8rem] font-bold leading-none text-[#D6232E] md:text-[2.1rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/60">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <article className="relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="text-[#D6232E]">01</span>
                  <span>/</span>
                  <span>The Spark in Hugo, Oklahoma</span>
                </div>
                <h2 className="mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  A Five-Year-Old&apos;s Unwavering Resolve
                </h2>
                <p className="text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron has wanted to be a criminal defense trial lawyer since he was 5 years old. He was sitting around the television in his hometown of Hugo, OK where Ron&apos;s single mother, two older brothers, and cousins were in awe of Johnnie Cochran during the OJ trial.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  That day Ron decided to become a trial lawyer. Around that same time, Ron&apos;s teacher recognized that he was a special student and created a special packet for him. It built his academic confidence and he&apos;s never looked back.
                </p>
              </article>

              <article className="relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="text-[#D6232E]">02</span>
                  <span>/</span>
                  <span>Academic Rigor &amp; The Westside Crucible</span>
                </div>
                <h2 className="mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Choosing the Trenches Over Prestige
                </h2>
                <p className="text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Despite his humble beginnings in Hugo, OK, Ron excelled academically and worked his way into The University of Chicago Law School, a top 5 law school in America. While at UChicago Ron worked in the criminal defense clinic, trial program, and participated in community service projects.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Most graduates of prestigious law schools go on to fancy law firms, judicial clerkships, or to become professors—not Ron. He moved into low-income housing on Chicago&apos;s Westside to defend youth accused of serious crimes. Ron honed his skills on everything from misdemeanor possession to murders, and his 1st-year salary at that nonprofit was $24K while the poverty line in Chicago was $35K.
                </p>
              </article>

              <div className="rounded-[1.2rem] border border-[#D6232E]/35 bg-[#001442]/70 p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl text-[#D6232E]">“</span>
                  <blockquote className="text-base italic leading-7 text-white/95 md:text-lg">
                    We don&apos;t just defend a case; we defend a human being&apos;s future and freedom.
                  </blockquote>
                </div>
                <div className="mt-3 pl-7 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Ron Jones • Lead Trial Counsel
                </div>
              </div>

              <article className="relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="text-[#D6232E]">03</span>
                  <span>/</span>
                  <span>Federal Practice to Oklahoma Homeland</span>
                </div>
                <h2 className="mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Bringing Federal Caliber Back Home
                </h2>
                <p className="text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron left that nonprofit to work on other serious criminal matters for a private firm. Those matters included state and federal crimes from gun possession to terrorism. But Oklahoma will always have Ron&apos;s heart, so he brought the trial and legal skills he learned in Chicago back to the Sooner State.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  He moved back to Oklahoma in 2018 to work for Still She Rises, another holistic nonprofit that represents mothers in the criminal justice system. While at Still She Rises Ron handled a variety of criminal matters, but he&apos;ll never forget his 1st trial back in Oklahoma. The jury returned a not-guilty verdict in less than 10 minutes.
                </p>
              </article>

              <article className="relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="text-[#D6232E]">04</span>
                  <span>/</span>
                  <span>The Brilliant Brawler &amp; Private Practice</span>
                </div>
                <h2 className="mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Unyielding Defense in Oklahoma City
                </h2>
                <p className="text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron has been in private practice in Oklahoma City since 2021. He&apos;s handled several different state and federal charges for his clients. He continues to obtain dismissals, not-guilty verdicts, hung juries, and favorable plea bargains for clients in courts around this state.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron knows how fortunate he is to come from poverty in Hugo, OK to live his dream every day, and he pays it forward by working tirelessly to get the best results for his clients.
                </p>
              </article>

              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#001442]/70">
                <img
                  className="h-40 w-full object-cover object-center opacity-80 md:h-52"
                  src="assets/lookCrop.png"
                  alt="Ron Jones courtroom profile"
                />
              </div>

              <div className="flex flex-col gap-4 rounded-[1.2rem] border border-[#D6232E]/40 bg-[#001442]/80 p-4 md:flex-row md:items-center md:justify-between md:p-5">
                <div>
                  <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.26em] text-[#D6232E]">
                    Protect Your Freedom Today
                  </div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    Facing High-Stakes State or Federal Charges?
                  </h3>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="tel:4059304209"
                    className="inline-flex items-center justify-center rounded-full bg-[#D6232E] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
                  >
                    Call Now
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#D6232E] hover:text-[#D6232E]"
                  >
                    Schedule Evaluation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro