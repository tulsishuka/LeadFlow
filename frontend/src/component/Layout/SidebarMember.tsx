

import { NavLink } from "react-router-dom";
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
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
      isActive
        ? "bg-[#4338ca] text-white shadow-sm"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
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
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#4338ca] text-white p-2 rounded-lg"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>


      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
        />
      )}


      <aside
        className={`
        fixed lg:sticky top-0 left-0 z-40
        h-screen
        bg-[#f8f9ff]
        border-r border-slate-200/60
        p-6
        flex flex-col justify-between
        transition-transform duration-300

        w-64

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        `}
      >

        {/* Top */}
        <div className="space-y-8">

          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold text-[#4338ca]">
              LeadFlow Pro
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              Enterprise Lead Management
            </p>
          </div>


          {/* Navigation */}
          <nav className="space-y-2">

            {links.map((item)=>(
              <NavLink
                key={item.path}
                to={item.path}
                onClick={()=>setOpen(false)}
                className={navLinkClass}
              >

                {item.icon}

                <span>
                  {item.name}
                </span>

              </NavLink>
            ))}

          </nav>

        </div>


        {/* Logout */}

        <NavLink
  to="/login"
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }}
  className={navLinkClass}
>
  <LogOut size={20} />
  <span>Log Out</span>
</NavLink>


      </aside>
    </>
  );
};

export default SidebarMember;