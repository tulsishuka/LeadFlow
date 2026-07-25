
const Navbar = () => {
  return (
    <header className="w-full bg-[#f8f9ff] border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-[#4338ca] tracking-tight">
            LeadFlow Pro
          </a>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#product" className="hover:text-slate-900 transition-colors">
            Product
          </a>
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#login" className="text-slate-600 hover:text-slate-900 transition-colors">
            Log In
          </a>
          <a
            href="#get-started"
            className="bg-[#4338ca] hover:bg-[#3730a3] text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            Get Started
          </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;