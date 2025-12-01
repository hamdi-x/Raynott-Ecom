import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-[11px] text-blue-200 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
            Now shipping to 120+ countries
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Shop global brands,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              pay in your currency.
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
            Raynott e-com connects you to curated tech, lifestyle and travel essentials from
            around the world, with transparent pricing and reliable international delivery.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              to="/shop"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white shadow-lg shadow-blue-500/30"
            >
              Start shopping
            </Link>
            <Link
              to="/about"
              className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium text-slate-100 hover:bg-slate-900"
            >
              How Raynott works
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-[11px] text-slate-400">
            <div>
              <p className="font-semibold text-slate-200 text-sm">3–7 day delivery</p>
              <p>Express lanes to major cities.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">Multi-currency</p>
              <p>Supports USD, EUR, INR and more.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">Buyer protection</p>
              <p>Secure payments &amp; easy returns.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10" />
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-blue-500/20">
            <div className="rounded-2xl overflow-hidden h-48 md:h-60 mb-4">
              <img
                src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg"
                alt="Global shopping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1">Best seller</p>
                <p>Noise-cancelling headphones</p>
                <p className="text-[11px] text-slate-400 mt-1">Ships from Germany</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1">Trending in Asia</p>
                <p>Smart fitness watch</p>
                <p className="text-[11px] text-slate-400 mt-1">Free import duties</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 col-span-2 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 mb-1">Live orders</p>
                  <p>2,184 shoppers active now</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500/70 border border-slate-900" />
                  <div className="h-6 w-6 rounded-full bg-orange-500/70 border border-slate-900" />
                  <div className="h-6 w-6 rounded-full bg-emerald-500/70 border border-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
