
const LoginForm = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0f172a]">
      {/* Left Hero Section (Dark Panel) */}
      <div className="lg:w-1/2 bg-[#1e293b] p-8 lg:p-16 flex flex-col justify-between text-white relative overflow-hidden">
        {/* Top Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-wider">LEADFLOW PRO</span>
        </div>

        {/* Hero Heading & Graphic */}
        <div className="my-12 max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Transform your sales pipeline with <span className="text-indigo-400">precision intelligence.</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            The modern standard for high-growth enterprise lead management. Built for velocity, designed for clarity.
          </p>

          {/* Graphic/Mockup Preview Card */}
          <div className="mt-8 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-slate-700/50 h-20 rounded-lg relative overflow-hidden p-2">
                <div className="w-8 h-2 bg-slate-600 rounded mb-4"></div>
                <div className="w-full h-8 bg-indigo-600/80 rounded"></div>
              </div>
              <div className="bg-slate-700/50 h-20 rounded-lg relative overflow-hidden p-2">
                <div className="w-8 h-2 bg-slate-600 rounded mb-4"></div>
                <div className="w-full h-8 bg-emerald-600/80 rounded"></div>
              </div>
              <div className="bg-slate-700/50 h-20 rounded-lg relative overflow-hidden p-2">
                <div className="w-8 h-2 bg-slate-600 rounded mb-4"></div>
                <div className="w-full h-8 bg-amber-600/80 rounded"></div>
              </div>
            </div>
            <div className="flex items-end justify-between h-16 bg-slate-700/30 rounded-lg p-2 gap-2">
              <div className="w-full bg-indigo-600/60 h-8 rounded-t"></div>
              <div className="w-full bg-indigo-600/80 h-10 rounded-t"></div>
              <div className="w-full bg-indigo-600 h-14 rounded-t"></div>
              <div className="w-full bg-indigo-600/40 h-6 rounded-t"></div>
              <div className="w-full bg-indigo-600 h-12 rounded-t"></div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="flex items-center space-x-12 border-t border-slate-700/60 pt-6">
          <div>
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Active Leads</p>
            <p className="text-xl font-extrabold text-white mt-1">12,840+</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Growth Rate</p>
            <p className="text-xl font-extrabold text-emerald-400 mt-1">+24.8%</p>
          </div>
        </div>
      </div>

      {/* Right Login Form Section */}
      <div className="lg:w-1/2 bg-[#f8f9ff] p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
        <div className="max-w-md w-full mx-auto my-auto py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
              Enter your credentials to access your workspace.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* Email Field */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold text-slate-700">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center pt-1">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-xs text-slate-600 font-medium cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#4338ca] hover:bg-[#3730a3] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
            >
              <span>Sign in to account</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-[#f8f9ff] px-3 text-slate-400 font-semibold tracking-wider">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>

            <button className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* Registration Link */}
          <p className="mt-8 text-center text-xs text-slate-500 font-medium">
            Don't have an account yet?{' '}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Get started for free
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-center space-x-4 text-[10px] text-slate-400 pt-4">
          <span>© 2024 LeadFlow Pro Inc.</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Help</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;