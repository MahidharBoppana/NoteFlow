import CloseIcon from "@mui/icons-material/Close";
import NotesEditor from "./NotesEditor";
import { useEffect } from "react";

function NoteModal({ open, onClose }) {
  if (!open) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            flex
            max-h-[90vh]
            w-full
            max-w-4xl
            flex-col

            overflow-hidden

            rounded-3xl
            border
            border-slate-800

            bg-slate-900

            shadow-2xl
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
            <div>
              <h2 className="text-2xl font-bold text-white">Note Editor</h2>

              <p className="mt-1 text-sm text-slate-400">
                Create or update your note.
              </p>
            </div>

            <button
              onClick={onClose}
              className="
                rounded-xl
                p-2

                text-slate-400

                transition

                hover:bg-slate-800
                hover:text-white
              "
            >
              <CloseIcon />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6">
            <NotesEditor />
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteModal;
