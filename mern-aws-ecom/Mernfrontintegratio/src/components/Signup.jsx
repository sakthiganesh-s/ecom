import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("user", email || name || "User");
      setIsLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-sm grid md:grid-cols-2 overflow-hidden">
        <div className="px-6 sm:px-10 py-10">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-sm text-gray-600">Sign up to start your shopping journey</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-800">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ab2d6] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-800">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ab2d6] focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-800">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ab2d6] focus:border-transparent"
                placeholder="Enter a password"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-800">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ab2d6] focus:border-transparent"
                placeholder="Re-enter password"
              />
            </div>

            <p className="text-xs text-gray-600">
              By signing up, you accept our <span className="text-[#1f78b4] font-semibold">Terms</span> and our <span className="text-[#1f78b4] font-semibold">Privacy Notice</span>.
            </p>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full py-3 text-white font-semibold rounded-md bg-[#7bb8d8] hover:bg-[#6aa9cb] transition shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-700">
            Already have an account? <Link to="/login" className="text-[#1f78b4] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>

        <div className="hidden md:block relative min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1542293787938-4d272614d5d8?auto=format&fit=crop&w=1200&q=80"
            alt="Shopping bags"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/35" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center space-y-2 px-6">
            <p className="text-lg font-semibold drop-shadow">Join ShopSphere</p>
            <p className="text-sm opacity-90">Secure checkout • Fast delivery • Fresh deals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
