import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../utils/api";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "New Arrivals",
      subtitle: "Shop the Latest Collection",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
      cta: "Shop Now",
      bg: "bg-slate-900"
    },
    {
      title: "Special Offers",
      subtitle: "Up to 50% Off on Selected Items",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=400&fit=crop",
      cta: "View Deals",
      bg: "bg-orange-600"
    },
    {
      title: "Free Shipping",
      subtitle: "On Orders Above ₹999",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&h=400&fit=crop",
      cta: "Learn More",
      bg: "bg-emerald-700"
    }
  ];

  useEffect(() => {
    // Fetch featured products
    fetch(`${API}/api/getproduct`)
      .then(res => res.json())
      .then(data => setFeaturedProducts(data.slice(0, 8)))
      .catch(err => console.error("Error fetching products:", err));

    // Auto-rotate banner
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px] px-6 lg:px-12 py-16">
            <div className="text-white z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Welcome to<br />
                <span className="text-orange-500">ShopSphere</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover quality products at the best prices. Fast shipping, secure payments, and easy returns.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/products"
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Shop Now
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                >
                  View Categories
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" 
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Category Quick Links */}
      <section className="py-20 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop&q=80" },
              { name: "Fashion", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop&q=80" },
              { name: "Home", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop&q=80" },
              { name: "Sports", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop&q=80" },
              { name: "Books", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=200&fit=crop&q=80" },
              { name: "Beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&q=80" },
              { name: "Toys", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=200&h=200&fit=crop&q=80" },
              { name: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&q=80" }
            ].map((cat, i) => (
              <Link
                key={i}
                to="/products"
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-1">Handpicked items just for you</p>
            </div>
            <Link
              to="/products"
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1"
            >
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{Math.floor(product.price * 1.3)}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">(4.5)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { 
                icon: <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>, 
                title: "Free Shipping", 
                desc: "On orders above ₹999" 
              },
              { 
                icon: <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>, 
                title: "Secure Payment", 
                desc: "100% secure transactions" 
              },
              { 
                icon: <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>, 
                title: "Easy Returns", 
                desc: "7-day return policy" 
              },
              { 
                icon: <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>, 
                title: "24/7 Support", 
                desc: "Dedicated customer service" 
              }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-lg">
                <div>{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
