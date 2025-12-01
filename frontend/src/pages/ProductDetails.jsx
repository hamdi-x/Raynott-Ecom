import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'
import { useCart } from '../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`)
        setProduct(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <p className="max-w-6xl mx-auto px-4 py-10 text-slate-200">Loading...</p>
  if (!product)
    return <p className="max-w-6xl mx-auto px-4 py-10 text-slate-200">Product not found.</p>

  const handleAdd = () => {
    addToCart(product, quantity)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 h-72 md:h-96">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-2">{product.category}</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">{product.name}</h1>
          <p className="text-sm text-slate-300 mb-4">{product.description}</p>
          <p className="text-sm text-slate-400 mb-4">
            Global rating <span className="font-semibold text-slate-100">{product.rating}★</span>
          </p>
          <p className="text-xl font-semibold text-white mb-2">
            {product.currency} {product.price.toFixed(2)}
          </p>
          <p className="text-xs text-slate-400 mb-4">
            Duties &amp; taxes shown at checkout. Typical delivery in 5–9 business days.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <label className="text-xs text-slate-300">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-16 px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-100"
            />
          </div>

          <button
            onClick={handleAdd}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white shadow-lg shadow-blue-500/30"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
