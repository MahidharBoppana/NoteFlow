import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function NoteViewerModal({ open, onClose, note }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !note) return null;

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
            <div className="min-w-0">
              <h2 className="truncate text-2xl font-bold text-white">
                {note.title}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {new Date(note.createdAt).toLocaleString()}
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

          {/* Content */}
          <div className="overflow-y-auto px-6 py-6">
            <article
              className="
                prose
                prose-invert
                prose-headings:text-white
                prose-p:text-slate-300
                prose-strong:text-white
                prose-a:text-blue-400
                prose-code:text-blue-300
                prose-pre:bg-slate-950
                max-w-none
              "
              dangerouslySetInnerHTML={{
                __html: note.content,
              }}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end border-t border-slate-800 p-5">
            <button
              onClick={onClose}
              className="
                rounded-2xl
                bg-blue-600
                px-6
                py-3

                font-medium
                text-white

                transition

                hover:bg-blue-700
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteViewerModal;
