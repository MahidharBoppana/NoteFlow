import { Menu, NoteAlt, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavBar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-blue-400 lg:hidden"
          >
            <Menu />
          </button>

          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
              <NoteAlt className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">NoteFlow</h1>

              <p className="hidden text-sm text-slate-400 sm:block">
                Organize everything
              </p>
            </div>
          </Link>
        </div>

        {/* Right */}
        <Link
          to="/profile"
          className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-3 py-2 transition hover:border-blue-500 hover:bg-slate-800"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
            {user?.name ? (
              user.name.charAt(0).toUpperCase()
            ) : (
              <Person fontSize="small" />
            )}
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-white">
              {user?.name || "User"}
            </p>

            <p className="text-xs text-slate-400">{user?.email}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
