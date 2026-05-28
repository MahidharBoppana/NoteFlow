import { useState } from "react";

import Typography from "@mui/material/Typography";

import MainLayout from "../components/layout/MainLayout";

import NotesGrid from "../components/notes/NotesGrid";

import NotesModal from "../components/notes/NotesModal";

import FloatingCreateButton from "../components/notes/FloatingCreateButton";
import { useNotes } from "../context/NotesContext.jsx";

import NotesSearch from "../components/notes/NotesSearch.jsx";

import useDebounce from "../hooks/useDebounce.js";

function DashboardPage() {
  const { openEditorModal, setOpenEditorModal } = useNotes();

  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 500);

  return (
    <MainLayout>
      <div className="flex mb-8 justify-between items-center">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Notes
        </Typography>

        <NotesSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <NotesGrid searchQuery={debouncedSearch} />

      <FloatingCreateButton onClick={() => setOpenEditorModal(true)} />

      <NotesModal
        open={openEditorModal}
        onClose={() => setOpenEditorModal(false)}
      />
    </MainLayout>
  );
}

export default DashboardPage;
