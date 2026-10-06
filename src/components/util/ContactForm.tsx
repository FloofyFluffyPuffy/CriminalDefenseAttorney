"use client"

import React from 'react'

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex w-full flex-col gap-4 text-white sm:mt-6 sm:gap-5">
      <div className="flex flex-col">
        <label className="mb-1.5 text-xs font-bold uppercase tracking-wide">
          Name <span className="font-normal italic normal-case text-[#ef6970]">(required)</span>
        </label>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First name"
              className="h-11 w-full rounded-sm border border-white/60 bg-white px-3.5 text-sm text-[#171717] placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#D6232E]"
            />
            <span className="mt-1 text-[11px] text-white/60">First</span>
          </div>
          <div className="flex flex-1 flex-col">
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last name"
              className="h-11 w-full rounded-sm border border-white/60 bg-white px-3.5 text-sm text-[#171717] placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#D6232E]"
            />
            <span className="mt-1 text-[11px] text-white/60">Last</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col">
          <label htmlFor="footer-phone" className="mb-1.5 text-xs font-bold uppercase tracking-wide">Phone</label>
          <input
            id="footer-phone"
            type="tel"
            placeholder="(999) 999-9999"
            className="h-11 w-full rounded-sm border border-white/60 bg-white px-3.5 text-sm text-[#171717] placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#D6232E]"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="footer-email" className="mb-1.5 text-xs font-bold uppercase tracking-wide">
            Email <span className="font-normal italic normal-case text-[#ef6970]">(required)</span>
          </label>
          <input
            id="footer-email"
            type="email"
            placeholder="your.email@example.com"
            className="h-11 w-full rounded-sm border border-white/60 bg-white px-3.5 text-sm text-[#171717] placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#D6232E]"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="footer-message" className="mb-1.5 text-xs font-bold uppercase tracking-wide">
          How can we help? <span className="font-normal italic normal-case text-[#ef6970]">(required)</span>
        </label>
        <textarea
          id="footer-message"
          rows={4}
          placeholder="Briefly describe your case, dates involved, and any upcoming hearings..."
          className="min-h-28 w-full resize-y rounded-sm border border-white/60 bg-[#f1f1f2] p-3.5 text-sm text-[#171717] placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#D6232E]"
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="transform scale-90 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#D6232E] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#D6232E]/20 transition-all hover:scale-100 hover:bg-[#b91c26] focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Fight for my rights
          <span aria-hidden="true" className="text-xl leading-none">→</span>
        </button>
        <p className="text-[11px] text-white/55">100% Confidential · Fast 15-Minute Response Time</p>
      </div>
    </form>
  )
}

export default ContactForm