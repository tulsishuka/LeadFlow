import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive
        ? "text-[#4338ca] font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-[#0F0069]"
          >
            LeadFlow Pro
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/" className={navLinkClass}>
              Features
            </NavLink>

            <NavLink to="/" className={navLinkClass}>
              Pricing
            </NavLink>

            <NavLink to="/ContactSales" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/LoginForm"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log In
            </Link>

            <Link
              to="/Register"
              className="bg-[#0F0069] hover:bg-[#3730a3] text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-all"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-gray-200 bg-white shadow-lg p-5">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Features
              </NavLink>

              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </NavLink>

              <NavLink
                to="/ContactSales"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>

              <hr className="my-2" />

              <Link
                to="/LoginForm"
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-slate-900"
              >
                Log In
              </Link>

              <Link
                to="/Register"
                onClick={() => setIsOpen(false)}
                className="bg-[#0F0069] hover:bg-[#3730a3] text-white text-center py-3 rounded-xl font-semibold transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;