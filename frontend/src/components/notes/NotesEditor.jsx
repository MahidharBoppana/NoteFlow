import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "sonner";

import { useNotes } from "../../context/NotesContext";

const categories = ["Personal", "Work", "Study", "Ideas"];

function NotesEditor() {
  const {
    addNote,
    updateNote,
    selectedNote,
    setSelectedNote,
    setOpenEditorModal,
  } = useNotes();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (!selectedNote) return;

    setTitle(selectedNote.title);
    setContent(selectedNote.content);
    setCategory(selectedNote.category || "Personal");
  }, [selectedNote]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required.");
      return;
    }

    try {
      if (selectedNote) {
        await updateNote(selectedNote._id, {
          title,
          content,
          category,
        });

        toast.success("Note updated successfully.");
      } else {
        await addNote({
          title,
          content,
          category,
        });

        toast.success("Note created successfully.");
      }

      setTitle("");
      setContent("");
      setCategory("Personal");

      setSelectedNote(null);
      setOpenEditorModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div>
        <h2 className="text-2xl font-bold text-white">
          {selectedNote ? "Update Note" : "Create Note"}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Organize your thoughts with NoteFlow.
        </p>
      </div>

      <input
        type="text"
        placeholder="Enter note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-3

          text-white
          placeholder:text-slate-500

          outline-none

          transition

          focus:border-blue-500
        "
      />

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-blue-600 text-white"
                : "border border-slate-700 bg-slate-950 text-slate-400 hover:border-blue-500 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={content}
        onEditorChange={setContent}
        init={{
          height: 380,

          menubar: false,

          skin: "oxide-dark",
          content_css: "dark",

          plugins: ["lists", "link", "table", "code", "wordcount"],

          toolbar:
            "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link table code",
        }}
      />

      <button
        onClick={handleSubmit}
        className="
          w-full
          rounded-2xl
          bg-blue-600
          py-3

          font-semibold
          text-white

          transition

          hover:bg-blue-700
        "
      >
        {selectedNote ? "Update Note" : "Create Note"}
      </button>
    </div>
  );
}

export default NotesEditor;
