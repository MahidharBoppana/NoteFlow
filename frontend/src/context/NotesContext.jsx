import { createContext, useContext, useState, useEffect } from "react";

import { getNotes } from "../api/note.api";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [selectedNote, setSelectedNote] = useState(null);

  const [openEditorModal, setOpenEditorModal] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);

    try {
      const result = await getNotes();

      setNotes(result.data);

      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        error,

        fetchNotes,
        setNotes,

        selectedNote,
        setSelectedNote,

        openEditorModal,
        setOpenEditorModal,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;

export const useNotes = () => useContext(NotesContext);
