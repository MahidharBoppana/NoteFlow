import RestoreIcon from "@mui/icons-material/Restore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useNotes } from "../../context/NotesContext";

function TrashCard({ note }) {
  const { restoreNote, permanentlyDeleteNote } = useNotes();

  return (
    <div
      className="
        flex h-full flex-col
        rounded-3xl
        border border-slate-800
        bg-slate-900
        p-6

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-red-500/40
        hover:shadow-2xl
        hover:shadow-red-500/10
      "
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="truncate text-xl font-bold text-white">{note.title}</h2>

        <p className="mt-2 text-sm text-slate-500">
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p
          className="text-sm leading-7 text-slate-400"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {note.content.replace(/<[^>]*>/g, "")}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-blue-600/15 px-3 py-1 text-xs font-medium text-blue-400">
            {note.category || "General"}
          </span>

          <span className="text-xs font-medium text-red-400">🗑 In Trash</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => restoreNote(note._id)}
            className="
              flex
              items-center
              justify-center
              gap-2

              rounded-2xl
              border
              border-emerald-500/30

              bg-emerald-500/10
              py-3

              text-emerald-400

              transition-all

              hover:bg-emerald-500
              hover:text-white
            "
          >
            <RestoreIcon fontSize="small" />
            Restore
          </button>

          <button
            onClick={() => permanentlyDeleteNote(note._id)}
            className="
              flex
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-red-600
              py-3

              text-white

              transition-all

              hover:bg-red-700
            "
          >
            <DeleteForeverIcon fontSize="small" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrashCard;
