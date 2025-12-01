import React from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CartPage() {
  const { items, removeFromCart, clearCart, totalItems, totalPrice } = useCart()
  const { user, token } = useAuth()
  const navigate = useNavigate()

  const handleCheckout = async () => {
    if (!user || !token) {
      navigate('/login')
      return
    }
    try {
      await API.post('/checkout', { total: totalPrice })
      alert('Checkout simulated successfully! (Demo mode)')
      clearCart()
    } catch (err) {
      console.error(err)
      alert('Checkout failed in demo. Check console.')
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 md:py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">Your cart</h1>
      {items.length === 0 ? (
        <p className="text-sm text-slate-300">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800"
              >
                <div className="h-20 w-20 rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                  <p className="text-xs text-slate-400 mb-1">{item.category}</p>
                  <p className="text-xs text-slate-300">
                    {item.currency} {item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-slate-400 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm">
            <h2 className="font-semibold text-slate-100 mb-3">Order summary</h2>
            <p className="flex justify-between text-slate-300 mb-1">
              <span>Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="flex justify-between text-slate-300 mb-1">
              <span>Subtotal (approx)</span>
              <span>USD {totalPrice.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-slate-400 text-xs mb-4">
              <span>Est. shipping &amp; duties</span>
              <span>Shown at checkout</span>
            </p>
            <button
              onClick={handleCheckout}
              className="w-full px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white mb-2"
            >
              Proceed to checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full px-4 py-2.5 rounded-full border border-slate-700 text-xs text-slate-200 hover:bg-slate-900"
            >
              Clear cart
            </button>
            {!user && (
              <p className="text-[11px] text-slate-400 mt-3">
                You&apos;ll be asked to log in before completing checkout.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
