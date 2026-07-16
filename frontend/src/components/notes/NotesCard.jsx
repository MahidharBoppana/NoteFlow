import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PushPinIcon from "@mui/icons-material/PushPin";

import { useNotes } from "../../context/NotesContext";

import NoteViewerModal from "./NoteViewerModal";

function NotesCard({ note }) {
  const { deleteNote, togglePinNote, setSelectedNote, setOpenEditorModal } =
    useNotes();

  const [openViewer, setOpenViewer] = useState(false);

  return (
    <>
      <div
        className="
          flex h-full flex-col
          rounded-3xl
          border border-slate-800
          bg-slate-900
          p-6

          shadow-lg

          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-blue-500/50
          hover:shadow-blue-500/10
          hover:shadow-2xl
        "
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-white">
              {note.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => togglePinNote(note._id)}
              className={`rounded-xl p-2 transition ${
                note.isPinned
                  ? "text-amber-400"
                  : "text-slate-500 hover:bg-slate-800 hover:text-white"
              } cursor-pointer`}
            >
              <PushPinIcon fontSize="small" />
            </button>

            <button
              onClick={() => {
                setSelectedNote(note);
                setOpenEditorModal(true);
              }}
              className="rounded-xl p-2 text-blue-400 transition hover:bg-slate-800 cursor-pointer"
            >
              <EditIcon fontSize="small" />
            </button>

            <button
              onClick={() => deleteNote(note._id)}
              className="rounded-xl p-2 text-red-400 transition hover:bg-slate-800 cursor-pointer"
            >
              <DeleteIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p
            className="text-sm leading-7 text-slate-400"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {note.content.replace(/<[^>]*>/g, "")}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 space-y-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-600/15 px-3 py-1 text-xs font-medium text-blue-400">
              {note.category || "General"}
            </span>

            {note.isPinned && (
              <span className="text-xs font-medium text-amber-400 ">
                📌 Pinned
              </span>
            )}
          </div>

          <button
            onClick={() => setOpenViewer(true)}
            className="
              w-full
              rounded-2xl
              bg-blue-600
              py-3

              font-medium
              text-white

              transition

              hover:bg-blue-700
              cursor-pointer
            "
          >
            View Note
          </button>
        </div>
      </div>

      <NoteViewerModal
        open={openViewer}
        onClose={() => setOpenViewer(false)}
        note={note}
      />
    </>
  );
}

export default NotesCard;
