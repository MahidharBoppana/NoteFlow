import { Dashboard, Delete, Person } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <Person />,
  },
  {
    label: "Trash",
    path: "/trash",
    icon: <Delete />,
  },
];

function SideBar() {
  return (
    <aside
      className="
    fixed
    left-0
    top-0
    z-50
    hidden
    h-screen
    w-72
    flex-col
    border-r
    border-slate-800
    bg-slate-950
    lg:flex
  "
    >
      {/* Navigation */}
      <div className="flex-1 px-5 pt-8">
        <p className="mb-6 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Navigation
        </p>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>

              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Card */}
      <div className="border-t border-slate-800 p-5">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600 to-indigo-600 p-5 shadow-xl">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Stay Organized 🚀
          </h3>

          <p className="text-sm leading-6 text-blue-100">
            Capture ideas, organize your work and boost your productivity with
            NoteFlow.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
