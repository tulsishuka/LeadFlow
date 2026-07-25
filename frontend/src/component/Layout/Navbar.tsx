import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-[#f8f9ff] border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-[#4338ca] tracking-tight"
        >
          LeadFlow Pro
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink
            to="/"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Admin
          </NavLink>

          <NavLink
            to="/Member"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Member
          </NavLink>

          <NavLink
            to="/ContactSales"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
          </NavLink>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/Register"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Register
          </Link>

          <Link
            to="/dashboard"
            className="bg-[#4338ca] hover:bg-[#3730a3] text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;