import { useState } from "react";

import { Paper, TextField, Button, Typography } from "@mui/material";

import { Editor } from "@tinymce/tinymce-react";

import { useNotes } from "../../context/NotesContext";

import { useUI } from "../../context/UIContext";

function NotesEditor() {
  const { addNote } = useNotes();

  const { showToast } = useUI();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const handleCreateNote = () => {
    if (!title.trim() || !content.trim()) {
      showToast("Title and content required", "error");

      return;
    }

    addNote({
      title,
      content,
    });

    showToast("Note created successfully", "success");

    setTitle("");
    setContent("");
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
      "
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Create Note
      </Typography>

      <TextField
        fullWidth
        label="Note Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="mb-6"
      />

      <Editor
        apiKey="e5ser7od1hd5l0e4dqk05ppipnpprbm1oyowuzekc03dgynv"
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
        Create Note
      </Button>
    </Paper>
  );
}

export default NotesEditor;
