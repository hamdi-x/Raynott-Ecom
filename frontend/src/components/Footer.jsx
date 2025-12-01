import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-slate-300">
        <div>
          <h4 className="font-semibold text-white mb-2">Raynott e-com</h4>
          <p className="text-slate-400 text-xs">
            Cross-border shopping made simple. One account, global brands, local currency.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">Company</h5>
          <ul className="space-y-1 text-xs">
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <span>Careers (coming soon)</span>
            </li>
            <li>
              <span>Press</span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">Support</h5>
          <ul className="space-y-1 text-xs">
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>Help center</li>
            <li>Shipping &amp; returns</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">Global</h5>
          <p className="text-xs text-slate-400 mb-1">Serving 120+ countries</p>
          <p className="text-xs text-slate-400">Payments in USD, EUR, INR and more.</p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Raynott e-com. All rights reserved.</p>
          <p className="flex gap-3">
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
