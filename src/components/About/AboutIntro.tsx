"use client";

import React from 'react'
import { useContextData } from "@/app/context/Provider";

const AboutIntro = () => {
  const { scrollingDown } = useContextData();

  return (
    <section className="AboutIntro relative overflow-clip py-8 checkBg">
      <div className="background-grid absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="left-background-glow absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#D6232E]/10 blur-[110px]" />
      <div className="right-background-glow absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#001442]/50 blur-[120px]" />

      <div className="about-content-container relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="intro-label-row mb-6 flex items-center gap-3">
          <span className="intro-monogram flex h-7 w-7 items-center justify-center rounded-full bg-[#D6232E] text-sm font-bold text-white">
            R
          </span>
          <span className="intro-location-label text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
            Counsel Chronicle • Oklahoma City
          </span>
        </div>

        <div className="about-intro-layout flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className={`attorney-profile-sidebar lg:sticky ${scrollingDown ? "lg:top-4" : "lg:top-28"} lg:self-start lg:w-[360px] xl:w-[390px] transition-[top] duration-300`}>
            <div className="attorney-profile-card overflow-hidden rounded-[1.5rem] border border-[#D6232E]/40 bg-[#001442] text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="attorney-portrait-frame relative h-[12.5rem] w-full overflow-hidden bg-[#111827]">
                <img
                  className="attorney-portrait h-full w-full object-cover object-top"
                  src="assets/walkingStair.png"
                  alt="Ron Jones"
                />
                {/* <div className="portrait-gradient-overlay absolute inset-0 bg-gradient-to-t from-[#001442] via-[#001442]/15 to-transparent" /> */}
                <div className="portrait-caption absolute inset-x-0 bottom-0 p-4">
                  <p className="attorney-role-label mb-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#D6232E]">
                    Criminal Defense Attorney
                  </p>
                  <h2 className="attorney-name text-[1.35rem] font-black uppercase leading-none tracking-tight text-white">
                    Ron Jones
                  </h2>
                </div>
              </div>

              <div className="attorney-credentials space-y-3 bg-[#001442] p-4 text-[10px] text-white/85">
                <div className="bar-membership-row flex items-center gap-2 text-[9px] text-white/75">
                  <span className="membership-indicator text-[#D6232E]">●</span>
                  <span className="bar-membership-details">Oklahoma Bar Association • Admitted 2018</span>
                </div>

                <div className="credentials-sections space-y-3 pt-1">
                  <div className="education-section border-b border-white/10 pb-2">
                    <p className="section-label mb-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                      Education &amp; Academics
                    </p>
                    <div className="education-entries space-y-2 leading-5">
                      <div className="education-entry flex items-start justify-between gap-3">
                        <span className="institution-name font-semibold text-white">University of Arkansas – Fayetteville</span>
                        <span className="graduation-year whitespace-nowrap text-[#D6232E]">2012</span>
                      </div>
                      <p className="education-detail text-white/70">Undergraduate studies</p>
                      <div className="education-entry flex items-start justify-between gap-3">
                        <span className="institution-name font-semibold text-white">University of Chicago Law School</span>
                        <span className="graduation-year whitespace-nowrap text-[#D6232E]">2015</span>
                      </div>
                      <p className="education-detail text-white/70">J.D. • Top 5 law school in America</p>
                    </div>
                  </div>

                  <div className="career-section pt-1">
                    <p className="section-label mb-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                      Experiences
                    </p>
                    <div className="career-history-grid grid grid-cols-2 gap-x-3 gap-y-2 leading-4">
                      <div className="career-entry min-w-0 border-b border-white/10 pb-1.5">
                        <span className="employer-name block font-semibold text-white">The Jones Firm, PLLC</span>
                        <span className="employment-dates text-[#D6232E]">2021-Present</span>
                      </div>
                      <div className="career-entry min-w-0 border-b border-white/10 pb-1.5">
                        <span className="employer-name block font-semibold text-white">Still She Rises – Tulsa</span>
                        <span className="employment-dates text-[#D6232E]">2018-2021</span>
                      </div>
                      <div className="career-entry min-w-0 border-b border-white/10 pb-1.5">
                        <span className="employer-name block font-semibold text-white">Cannon &amp; Associates</span>
                        <span className="employment-location text-[#D6232E]">Oklahoma</span>
                      </div>
                      <div className="career-entry min-w-0 border-b border-white/10 pb-1.5">
                        <span className="employer-name block font-semibold text-white">Durkin &amp; Roberts</span>
                        <span className="employment-location text-[#D6232E]">Chicago</span>
                      </div>
                      <div className="career-entry min-w-0">
                        <span className="employer-name block font-semibold text-white">Lawndale Christian Legal Center</span>
                        <span className="employment-location text-[#D6232E]">Chicago</span>
                      </div>
                      <div className="career-entry min-w-0">
                        <span className="employer-name block font-semibold text-white">Holistic Defense Practice</span>
                        <span className="employment-location text-[#D6232E]">Chicago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="biography-content min-w-0 flex-1">
            <div className="biography-heading mb-5 flex flex-col">
              <span className="biography-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D6232E]">
                Ron&apos;s Story
              </span>
              <h1 className="biography-title text-[2rem] font-bold leading-tight text-white md:text-[2.5rem]">
                Oklahoma #1 Criminal Defense Lawyer
              </h1>
              <div className="title-accent-rule mt-2 h-1 w-[80%] rounded-full bg-[#D6232E]" />
              <p className="intro-quotation mt-4 text-[1.05rem] italic text-[#D6232E] leading-relaxed text-white/90 md:text-[1.2rem]">
                Ron Jones is living his dream to help clients continue living theirs.
              </p>
            </div>

            <div className="biography-sections space-y-5">
              <article className="biography-card relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="biography-card-kicker mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="biography-card-number text-[#D6232E]">01</span>
                  <span className="kicker-separator">/</span>
                  <span className="biography-card-label">The Spark in Hugo, Oklahoma</span>
                </div>
                <h2 className="biography-card-title mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  A Five-Year-Old&apos;s Unwavering Resolve
                </h2>
                <p className="biography-paragraph text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron has wanted to be a criminal defense trial lawyer since he was 5 years old. He was sitting around the television in his hometown of Hugo, OK where Ron’s single mother, two older brothers, and cousins were in awe of Johnnie Cochran during the OJ trial. That day Ron decided to become a trial lawyer. Around that same time, Ron’s teacher recognized that he was a special student and created a special packet for him. It built his academic confidence and he’s never looked back.
                </p>
              </article>

              <article className="biography-card relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="biography-card-kicker mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="biography-card-number text-[#D6232E]">02</span>
                  <span className="kicker-separator">/</span>
                  <span className="biography-card-label">Academic Rigor &amp; The Westside Crucible</span>
                </div>
                <h2 className="biography-card-title mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Choosing the Trenches Over Prestige
                </h2>
                <p className="biography-paragraph text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Despite his humble beginnings in Hugo, OK, Ron excelled academically and worked his way into The University of Chicago Law School, a top 5 law school in America. While at UChicago Ron worked in the criminal defense clinic, trial program, and participated in community service projects. Most graduates of prestigious law schools go on to fancy law firms, judicial clerkships, or to become professors–not Ron.
                </p>
                <p className="biography-paragraph mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  He moved into low-income housing on Chicago’s Westside to defend youth accused of serious crimes. Ron honed his skills working on everything from misdemeanor possession to murders. The nonprofit provided holistic criminal defense that included education, mentoring, and employment training in addition to criminal defense. Ron’s 1st-year salary at that nonprofit was $24K, the poverty line in Chicago was $35K–it’ll always be about people for Ron.
                </p>
              </article>


              <article className="biography-card relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="biography-card-kicker mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="biography-card-number text-[#D6232E]">03</span>
                  <span className="kicker-separator">/</span>
                  <span className="biography-card-label">Federal Practice to Oklahoma Homeland</span>
                </div>
                <h2 className="biography-card-title mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Bringing Federal Caliber Back Home
                </h2>
                <p className="biography-paragraph text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron left that nonprofit to work on other serious criminal matters for a private firm. Those matters included state and federal crimes from gun possession to terrorism. But Oklahoma will always have Ron’s heart, so he brought the trial and legal skills he learned in Chicago back to the Sooner State.
                </p>
                <p className="biography-paragraph mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  He moved back to Oklahoma in 2018 to work for Still She Rises, another holistic nonprofit that represents mothers in the criminal justice system. While at Still She Rises Ron handled a variety of criminal matters, but he’ll never forget his 1st trial back in Oklahoma. The jury returned a not-guilty verdict in less than 10 minutes.
                </p>
              </article>

              <article className="biography-card relative rounded-[1.2rem] border border-white/10 bg-[#001442]/60 p-4 md:p-5">
                <div className="biography-card-kicker mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
                  <span className="biography-card-number text-[#D6232E]">04</span>
                  <span className="kicker-separator">/</span>
                  <span className="biography-card-label">The Brilliant Brawler &amp; Private Practice</span>
                </div>
                <h2 className="biography-card-title mb-2 text-[1.15rem] font-bold text-white md:text-[1.35rem]">
                  Unyielding Defense in Oklahoma City
                </h2>
                <p className="biography-paragraph text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron has been in private practice in Oklahoma City since 2021. He’s handled several different state and federal charges for his clients. He continues to obtain dismissals, not-guilty verdicts, hung juries, and favorable plea bargains for clients in courts around this state.
                </p>
                <p className="biography-paragraph mt-3 text-sm leading-7 text-white/80 md:text-[0.98rem]">
                  Ron knows how fortunate he is to come from poverty in Hugo, OK to live his dream every day, and he pays it forward by working tirelessly to get the best results for his clients.
                </p>
              </article>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro