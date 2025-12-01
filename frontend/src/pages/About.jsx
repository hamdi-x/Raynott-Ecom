import React from 'react'

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">About Raynott e-com</h1>
      <p className="text-sm text-slate-300 mb-4">
        Raynott e-com is an international e-commerce platform built for the next generation of
        cross-border shoppers. Our goal is simple: connect customers to the best global brands and
        products, while handling the complex parts of shipping, duties and currency conversion.
      </p>
      <p className="text-sm text-slate-300 mb-4">
        This demo project showcases a modern, responsive shopping experience with login, product
        listing and a shopping cart – powered by a lightweight Node.js backend and a React + Vite
        frontend.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <p className="font-semibold text-slate-100 mb-1">Global-first design</p>
          <p className="text-slate-400 text-xs">
            Product cards, prices and content are structured with international shoppers in mind.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <p className="font-semibold text-slate-100 mb-1">Clean UI / UX</p>
          <p className="text-slate-400 text-xs">
            Minimal dark theme, clear hierarchy and simple navigation that works on any device.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <p className="font-semibold text-slate-100 mb-1">Developer friendly</p>
          <p className="text-slate-400 text-xs">
            Easy to run locally and extend – ideal for portfolio and college submissions.
          </p>
        </div>
      </div>
    </section>
  )
}
