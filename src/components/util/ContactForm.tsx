import React from 'react'

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex max-w-xl flex-col gap-5 text-white">
      {/* Name Row */}
      <div className="flex flex-col">
        <label className="mb-1.5 text-sm font-bold">
          Name <span className="text-xs font-normal italic text-[#cf3535]">(Required)</span>
        </label>
        <div className="flex gap-4">
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
      <div className="flex gap-4">
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
          How can we help? <span className="text-xs font-normal italic text-[#cf3535]">(Required)</span>
        </label>
        <textarea
          rows={8}
          className="w-full resize-y rounded-sm border border-gray-300 bg-white p-2.5 text-sm text-black outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </form>
  )
}

export default ContactForm