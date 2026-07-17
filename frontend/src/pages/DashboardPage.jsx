import { useState, useEffect } from "react";

import MainLayout from "../components/layout/MainLayout";
import NotesGrid from "../components/notes/NotesGrid";
import NotesModal from "../components/notes/NotesModal";
import FloatingCreateButton from "../components/notes/FloatingCreateButton";
import NotesSearch from "../components/notes/NotesSearch";

import { useNotes } from "../context/NotesContext";
import { useAuth } from "../context/AuthContext";

import useDebounce from "../hooks/useDebounce";

function DashboardPage() {
  const {
    notes,
    loading,
    error,
    openEditorModal,
    setOpenEditorModal,
    setSelectedNote,
    searchNotes,
    fetchNotes,
  } = useNotes();

  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      searchNotes(debouncedSearch);
    } else {
      fetchNotes();
    }
  }, [debouncedSearch]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-lg font-medium text-slate-400">
            Loading your notes...
          </div>
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

  const activeNotes = notes.filter((note) => !note.isTrashed);

  const pinnedNotes = activeNotes.filter((note) => note.isPinned);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="mb-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Welcome Back
              </p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                {user?.name || "User"} 👋
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Capture ideas, organize projects and stay productive with
                NoteFlow.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:w-[340px]">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-500">Notes</p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {activeNotes.length}
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-500">Pinned</p>

                <h2 className="mt-2 text-3xl font-bold text-blue-400">
                  {pinnedNotes.length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">My Notes</h2>

          <p className="mt-1 text-slate-400">
            Quickly search and manage your notes.
          </p>
        </div>

        <NotesSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </section>

      {/* Notes */}
      <NotesGrid notes={notes} />

      {/* Floating Button */}
      <FloatingCreateButton
        onClick={() => {
          setSelectedNote(null);
          setOpenEditorModal(true);
        }}
      />

      {/* Modal */}
      <NotesModal
        open={openEditorModal}
        onClose={() => {
          setSelectedNote(null);
          setOpenEditorModal(false);
        }}
      />
    </MainLayout>
  );
}

export default DashboardPage;
