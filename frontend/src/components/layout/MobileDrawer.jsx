import { Dashboard, Delete, Person, Close } from "@mui/icons-material";
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

function MobileDrawer({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <div>
            <h2 className="text-2xl font-bold text-white">NoteFlow</h2>

            <p className="mt-1 text-sm text-slate-400">Organize everything</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <Close />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-5 pt-6">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
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
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Stay Organized 🚀
            </h3>

            <p className="text-sm leading-6 text-blue-100">
              Capture ideas, organize your work and boost your productivity.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default MobileDrawer;
