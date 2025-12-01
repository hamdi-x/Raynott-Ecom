import React from 'react'

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">Contact support</h1>
      <p className="text-sm text-slate-300 mb-6">
        Have a question about international shipping, your order, or partnership opportunities?
        Reach out and our global support team will get back to you.
      </p>
      <form className="space-y-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
        <div>
          <label className="block text-xs text-slate-300 mb-1">Full name</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Country / region</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              placeholder="India, Germany, UAE..."
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-slate-300 mb-1">How can we help?</label>
          <textarea
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-blue-500 min-h-[120px]"
            placeholder="Describe your question or issue."
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white"
        >
          Send message
        </button>
        <p className="text-[11px] text-slate-400 mt-2">
          Demo only: this form does not send real emails.
        </p>
      </form>
    </section>
  )
}
