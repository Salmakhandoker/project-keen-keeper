
import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/timeline", label: "Timeline", icon: Clock },
    { to: "/stats", label: "Stats", icon: BarChart3 },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <span className="font-semibold text-2xl">KeenKeeper</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all ${isActive ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* <div className="hidden md:block">
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-2xl font-medium hover:bg-emerald-700 flex items-center gap-2">
            + Add Friend
          </button>
        </div> */}

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-4 text-lg">
              <Icon size={24} /> {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;