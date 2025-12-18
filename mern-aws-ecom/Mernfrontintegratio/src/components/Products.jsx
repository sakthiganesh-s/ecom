import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { API } from "../utils/api"; 

export default function Products({setCart,cart}) {
  const [products,setProducts] = useState([])
  
  useEffect(() => {
    fetch(`${API}/api/getproduct`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    
    const res = await fetch(`http://localhost:5000/api/deleteProduct/${id}`, {
      method: "DELETE",
    });
    
    if (res.status === 204) {
      alert("Product deleted successfully");
      setProducts(products.filter(p => p._id !== id)); 
    } else {
      alert("Error deleting product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          <p className="text-gray-600">Browse our complete collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-12 bg-white rounded-lg shadow-sm">
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-700 text-lg font-medium mb-2">No products available</p>
              <p className="text-gray-500">Check back later for new arrivals</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-6">
            {products.map(p => (
              <div 
                key={p._id} 
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/product/${p._id}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link to={`/product/${p._id}`}>
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-orange-500 transition-colors h-12">
                      {p.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">(4.5)</span>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">₹{p.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{Math.floor(p.price * 1.3)}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(p)}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-3 rounded transition-colors flex items-center justify-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add
                    </button>
                    
                    <button 
                      onClick={() => deleteProduct(p._id)}
                      className="bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2 rounded transition-colors"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}