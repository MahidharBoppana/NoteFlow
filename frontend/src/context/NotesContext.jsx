import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: 1,

      title: "Welcome Note",

      content: "This is your first note.",

      createdAt: new Date().toISOString(),
    },
  ]);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),

      ...note,
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedData) => {
    setNotes((prevNotes) => {
      prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...updatedData,
          };
        }

        return note;
      });
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;

export const useNotes = () => useContext(NotesContext);
