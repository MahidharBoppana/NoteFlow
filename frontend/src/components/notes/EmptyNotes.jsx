import EditNoteIcon from "@mui/icons-material/EditNote";

function EmptyNotes() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10">
          <EditNoteIcon sx={{ fontSize: 40 }} className="text-blue-500" />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-white">No Notes Yet</h2>

        <p className="mb-8 leading-7 text-slate-400">
          You haven't created any notes yet. Click the{" "}
          <span className="font-semibold text-blue-400">+ Create Note</span>{" "}
          button to start capturing your ideas.
        </p>

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-5">
          <p className="text-sm text-slate-500">
            🚀 Organize your thoughts, tasks, ideas and projects in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyNotes;
