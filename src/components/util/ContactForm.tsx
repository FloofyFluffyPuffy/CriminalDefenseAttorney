import React from 'react'

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col gap-5 text-white">
      {/* Name Row */}
      <div className="flex flex-col">
        <label className="mb-1.5 text-sm font-bold">
          Name <span className="text-xs font-normal italic text-[#cf3535]">(Required)</span>
        </label>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col">
            <input
              type="text"
              className="w-full rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="mt-1 text-xs text-slate-300">First</span>
          </div>
          <div className="flex flex-1 flex-col">
            <input
              type="text"
              className="w-full rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="mt-1 text-xs text-slate-300">Last</span>
          </div>
        </div>
      </div>

      {/* Phone & Email Row */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col">
          <label className="mb-1.5 text-sm font-bold">Phone</label>
          <input
            type="tel"
            placeholder="(999) 999-9999"
            className="w-full rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label className="mb-1.5 text-sm font-bold">
            Email <span className="text-xs font-normal italic text-[#cf3535]">(Required)</span>
          </label>
          <input
            type="email"
            className="w-full rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Message Row */}
      <div className="flex flex-col">
        <label className="mb-1.5 text-sm font-bold">
          What your situation? <span className="text-xs font-normal italic text-[#cf3535]">(Required)</span>
        </label>
        <textarea
          rows={5}
          className="w-full resize-y rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-[#D6232E] px-6 py-2.5 font-bold text-white transition-colors hover:bg-[#b91c26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm