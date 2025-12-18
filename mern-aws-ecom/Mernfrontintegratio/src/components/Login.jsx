import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", email);
      setIsLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f5bff] via-[#5678ff] to-[#6f8bff] flex items-center justify-center px-4 py-14">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
        {/* Left: Form */}
        <div className="px-8 sm:px-10 py-12 space-y-10">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500 text-sm sm:text-base">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">Email Address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8-4H8m12-2H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5c7bff] focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.667 0 2-.4 2-2s-.833-2-2-2-2 .4-2 2 .833 2 2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21v-2a7 7 0 0114 0v2" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-20 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5c7bff] focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5c7bff] font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#5c7bff] focus:ring-[#5c7bff]"
                />
                Remember me
              </label>
              <a href="#" className="text-[#5c7bff] font-semibold hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full py-3.5 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5c7bff] to-[#7e8dff] shadow-md hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex-1 h-px bg-gray-200"></span>
            Or continue with
            <span className="flex-1 h-px bg-gray-200"></span>
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 w-40 justify-center hover:bg-gray-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70497C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" />
                <path fill="#4285F4" d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" />
                <path fill="#FBBC05" d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.2749 6.60986C0.4649 8.22986 0 10.0599 0 11.9999C0 13.9399 0.4649 15.7699 1.2749 17.3899L5.26498 14.2949Z" />
                <path fill="#34A853" d="M12.0003 24C15.2403 24 17.9653 22.935 19.9453 21.095L16.0803 18.095C15.0053 18.82 13.6203 19.25 12.0003 19.25C8.87028 19.25 6.21525 17.14 5.26528 14.295L1.27527 17.39C3.25527 21.31 7.31028 24 12.0003 24Z" />
              </svg>
              <span className="font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 w-40 justify-center hover:bg-gray-50">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-medium text-gray-700">Facebook</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-[#5c7bff] font-semibold hover:underline">Sign up</Link>
          </p>
        </div>

        {/* Right: Shopping illustration */}
        <div className="hidden md:block bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center space-y-2 px-6">
            <p className="text-lg font-semibold drop-shadow">Finally, your premium marketplace</p>
            <div className="flex items-center justify-center gap-3 text-sm opacity-90">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 00-8 0v4H5l1 11h12l1-11h-3V7z"/></svg>Secure</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 7h6M4 21h16l-1-11H5l-1 11z"/></svg>Fast</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}