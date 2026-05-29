import { useState, useEffect } from "react";

import { Paper, TextField, Button, Typography, MenuItem } from "@mui/material";

import { Editor } from "@tinymce/tinymce-react";

import { useNotes } from "../../context/NotesContext";

import { useUI } from "../../context/UIContext";

function NotesEditor() {
  const {
    addNote,
    selectedNote,
    updateNote,
    setSelectedNote,
    setOpenEditorModal,
  } = useNotes();

  const { showToast } = useUI();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);

      setContent(selectedNote.content);

      setCategory(selectedNote.category);
    }
  }, [selectedNote]);

  const handleCreateNote = () => {
    if (!title.trim() || !content.trim()) {
      showToast("Title and content required", "error");

      return;
    }

    if (selectedNote) {
      updateNote(
        selectedNote.id,

        {
          title,
          content,
          category,
        },
      );

      showToast("Note updated successfully", "success");

      setSelectedNote(null);
    } else {
      addNote({
        title,
        content,
        category,
      });

      showToast("Note created successfully", "success");

      console.log(category);
    }

    setOpenEditorModal(false);

    setTitle("");
    setContent("");
    setCategory("Personal");
  };

  return (
    <Paper
      elevation={0}
      className="
        p-6
        rounded-2xl
        border
        border-gray-200
        mb-8
        flex
        flex-col
        gap-3
      "
    >
      <Typography variant="h5" component="span" fontWeight="bold" gutterBottom>
        {selectedNote ? "Update Note" : "Create Note"}
      </Typography>

      <TextField
        fullWidth
        label="Note Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="mb-6"
      />

      <div
        className="
    flex
    gap-3
    flex-wrap
  "
      >
        {["Personal", "Work", "Study", "Ideas"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`
        px-4
        py-2
        rounded-full
        border
        transition-all

        ${
          category === item
            ? `
              bg-blue-600
              text-white
              border-blue-600
            `
            : `
              bg-white
              text-gray-700
              border-gray-300
            `
        }
      `}
          >
            {item}
          </button>
        ))}
      </div>

      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={content}
        onEditorChange={(value) => setContent(value)}
        init={{
          height: 350,

          menubar: false,

          plugins: ["lists", "link", "table", "code", "wordcount"],

          toolbar:
            "undo redo | " +
            "bold italic underline | " +
            "alignleft aligncenter alignright | " +
            "bullist numlist | " +
            "link table code",
        }}
      />

      <Button variant="contained" onClick={handleCreateNote} className="mt-5">
        {selectedNote ? "Update Note" : "Create Note"}
      </Button>
    </Paper>
  );
}

export default NotesEditor;
