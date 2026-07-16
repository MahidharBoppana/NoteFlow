import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import { useAuth } from "../context/AuthContext";
import { useNotes } from "../context/NotesContext";

import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import PushPinIcon from "@mui/icons-material/PushPin";
import CategoryIcon from "@mui/icons-material/Category";
import LoadingDots from "../utils/loadingDots";

function ProfilePage() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { notes, loading, error } = useNotes();

  const activeNotes = notes.filter((note) => !note.isTrashed);

  const pinnedNotes = activeNotes.filter((note) => note.isPinned);

  const totalCategories = new Set(
    activeNotes.map((note) => note.category).filter(Boolean),
  ).size;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="text-lg font-medium text-slate-400">
            Loading profile...
          </p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-red-400">
          {error}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Profile Header */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {/* Avatar */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white shadow-lg">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white">{user?.name}</h1>

              <div className="mt-3 flex items-center justify-center gap-2 text-slate-400 md:justify-start">
                <EmailIcon fontSize="small" />

                <span>{user?.email}</span>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="
                flex
                items-center
                gap-2

                rounded-2xl
                bg-red-600

                px-6
                py-3

                font-medium
                text-white

                transition

                hover:bg-red-700
                cursor-pointer
              "
            >
              {loading ? (
                <LoadingDots />
              ) : (
                <>
                  <LogoutIcon fontSize="small" />
                  Logout
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <DescriptionIcon className="mb-4 text-blue-400" />

            <p className="text-sm text-slate-500">Total Notes</p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {activeNotes.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <PushPinIcon className="mb-4 text-amber-400" />

            <p className="text-sm text-slate-500">Pinned Notes</p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {pinnedNotes.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <CategoryIcon className="mb-4 text-emerald-400" />

            <p className="text-sm text-slate-500">Categories</p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {totalCategories}
            </h2>
          </div>
        </div>

        {/* Account Information */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Account Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-slate-400">Full Name</span>

              <span className="font-medium text-white">{user?.name}</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-slate-400">Email Address</span>

              <span className="font-medium text-white">{user?.email}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Account Status</span>

              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
