import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-[11px] bg-slate-950/70 text-slate-100 border border-slate-700">
          {product.category}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-50 text-sm line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 mb-2">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              {product.currency} {product.price.toFixed(2)}
            </p>
            <p className="text-[11px] text-slate-400">Rating {product.rating}★</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-600/90 text-white group-hover:bg-blue-500">
            View details
          </span>
        </div>
      </div>
    </Link>
  )
}
