import { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import TrashGrid from "../components/notes/TrashGrid";

import { useNotes } from "../context/NotesContext";

function TrashPage() {
  const { trashedNotes, fetchTrashedNotes, loading, error } = useNotes();

  useEffect(() => {
    fetchTrashedNotes();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="text-lg font-medium text-slate-400">Loading trash...</p>
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
      {/* Hero */}
      <section className="mb-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-red-400">
                Trash
              </p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                Deleted Notes 🗑️
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Notes moved to trash can be restored or permanently deleted.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
              <p className="text-sm text-slate-500">Notes in Trash</p>

              <h2 className="mt-2 text-4xl font-bold text-red-400">
                {trashedNotes.length}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Trash Grid */}
      <TrashGrid notes={trashedNotes} />
    </MainLayout>
  );
}

export default TrashPage;
