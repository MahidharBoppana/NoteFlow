import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

import {
  createNote,
  getNotes,
  updateNote as updateNoteApi,
  deleteNote as deleteNoteApi,
  restoreNote as restoreNoteApi,
  getTrashedNotes,
  permanentlyDeleteNote as permanentlyDeleteNoteApi,
  togglePinNote as togglePinNoteApi,
  searchNotes as searchNotesApi,
} from "../api/note.api";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const { loading: authLoading, isAuthenticated } = useAuth();

  const [notes, setNotes] = useState([]);

  const [trashedNotes, setTrashedNotes] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [selectedNote, setSelectedNote] = useState(null);

  const [openEditorModal, setOpenEditorModal] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getNotes();

      setNotes(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrashedNotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getTrashedNotes();

      setTrashedNotes(result.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (noteData) => {
    const result = await createNote(noteData);

    setNotes((prev) => [result.data, ...prev]);
  };

  const updateNote = async (id, updatedNoteData) => {
    const result = await updateNoteApi(id, updatedNoteData);

    setNotes((prev) =>
      prev.map((note) => (note._id === result.data._id ? result.data : note)),
    );
  };

  const deleteNote = async (id) => {
    const result = await deleteNoteApi(id);

    setNotes((prev) =>
      prev.map((note) => (note._id === result.data._id ? result.data : note)),
    );
  };

  const restoreNote = async (id) => {
    const result = await restoreNoteApi(id);

    // Remove from trash
    setTrashedNotes((prev) => prev.filter((note) => note._id !== id));

    // Add back to dashboard
    setNotes((prev) => [result.data, ...prev]);
  };

  const permanentlyDeleteNote = async (id) => {
    await permanentlyDeleteNoteApi(id);

    setTrashedNotes((prev) => prev.filter((note) => note._id !== id));
  };

  const togglePinNote = async (id) => {
    const result = await togglePinNoteApi(id);

    setNotes((prev) =>
      prev.map((note) => (note._id === result.data._id ? result.data : note)),
    );
  };

  const searchNotes = async (query) => {
    if (!query.trim()) {
      fetchNotes();
      return;
    }

    const result = await searchNotesApi(query);

    setNotes(result.data);
  };

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) return;

    fetchNotes();
  }, [authLoading, isAuthenticated]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        trashedNotes,
        loading,
        error,

        fetchNotes,
        fetchTrashedNotes,
        addNote,
        updateNote,
        deleteNote,
        restoreNote,
        permanentlyDeleteNote,
        togglePinNote,
        searchNotes,
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
