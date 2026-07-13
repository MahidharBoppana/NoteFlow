import TrashCard from "./TrashCard";

function TrashGrid({ notes }) {
  const trashedNotes = notes.filter((note) => note.isTrashed);

  if (trashedNotes.length === 0) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600/10">
            <span className="text-4xl">🗑️</span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white">Trash is Empty</h2>

          <p className="leading-7 text-slate-400">
            Deleted notes will appear here. You can restore them or permanently
            delete them whenever you want.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        xl:grid-cols-3

        2xl:grid-cols-4
      "
    >
      {trashedNotes.map((note) => (
        <TrashCard key={note._id} note={note} />
      ))}
    </div>
  );
}

export default TrashGrid;
