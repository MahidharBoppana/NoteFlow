import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: 1,

      title: "Welcome Note",

      content: "This is your first note.",

      isPinned: false,

      category: "Personal",
      isTrashed: false,

      createdAt: new Date().toISOString(),
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(null);

  const [openEditorModal, setOpenEditorModal] = useState(false);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),

      ...note,

      isPinned: false,
      isTrashed: false,
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isTrashed: true,
          };
        }
        return note;
      }),
    );
  };

  const restoreNote = (id) => {

  setNotes((prevNotes) =>
    prevNotes.map((note) => {

      if (note.id === id) {

        return {
          ...note,
          isTrashed: false,
        };
      }

      return note;
    })
  );
};

const permanentlyDeleteNote = (id) => {

  setNotes((prevNotes) =>
    prevNotes.filter(
      (note) => note.id !== id
    )
  );
};

  const updateNote = (id, updatedData) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...updatedData,
          };
        }

        return note;
      }),
    );
  };

  const togglePinNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,

            isPinned: !note.isPinned,
          };
        }
        return note;
      }),
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        restoreNote,
permanentlyDeleteNote,
        updateNote,
        togglePinNote,
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
