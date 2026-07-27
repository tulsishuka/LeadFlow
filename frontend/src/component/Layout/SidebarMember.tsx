
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const SidebarMember = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
      isActive
        ? "bg-white text-[#0F0069] shadow-md"
        : "text-indigo-100 hover:bg-white/10 hover:text-white"
    }`;

  const links = [
    {
      name: "Dashboard",
      path: "/member/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-[#0F0069] p-2.5 text-white shadow-lg lg:hidden"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen
          w-72
          bg-[#0F0069]
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
          <div className="mb-10">
            <Link to="/">
            <h1 className="text-2xl font-bold text-white">
              LeadFlow Pro
            </h1></Link>

            <p className="mt-1 text-xs text-indigo-200">
              Member Workspace
            </p>
          </div>

          <nav className="flex-1 space-y-2">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 border-t border-white/10 pt-6">
            <NavLink
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setOpen(false);
              }}
              className={navLinkClass}
            >
              <LogOut size={20} />
              <span>Log Out</span>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarMember;