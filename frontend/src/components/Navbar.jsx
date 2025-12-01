import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navLinkClass = ({ isActive }) =>
    'px-3 py-1 rounded-full text-sm md:text-base transition ' +
    (isActive ? 'bg-slate-900 text-white' : 'text-slate-200 hover:bg-slate-800')

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-black text-lg tracking-tight shadow-lg">
            R
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white text-lg">Raynott e-com</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wide">
              Global marketplace
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <NavLink
            to="/cart"
            className="relative flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-slate-100 text-sm hover:bg-slate-800 transition"
          >
            <span className="hidden sm:inline">Cart</span>
            <span className="material-icons text-base sm:text-lg">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-orange-500 text-[11px] flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </NavLink>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-slate-300">
                Hi, <span className="font-semibold">{user.name.split(' ')[0]}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full text-xs md:text-sm border border-slate-700 hover:bg-slate-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-3 py-1 rounded-full text-xs md:text-sm border border-slate-700 hover:bg-slate-900"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-3 py-1 rounded-full text-xs md:text-sm bg-blue-600 hover:bg-blue-500 text-white"
              >
                Sign up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
