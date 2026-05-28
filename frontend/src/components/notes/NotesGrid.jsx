import { Grid } from "@mui/material";

import { useNotes } from "../../context/NotesContext";

import NotesCard from "./NotesCard";
import EmptyNotes from "./EmptyNotes";

function NotesGrid({ searchQuery }) {
  const { notes } = useNotes();


  const filteredNotes = notes.filter((note) => {
    const searchText = (searchQuery || "").toLowerCase();

    const titleMatch = note.title.toLowerCase().includes(searchText);

    const contentMatch = note.content
      .replace(/<[^>]*>/g, "")
      .toLowerCase()
      .includes(searchText);

    return titleMatch || contentMatch;
  });

  if (filteredNotes.length === 0) {
    return <EmptyNotes />;
  }
  
  return (
    <Grid container spacing={3}>
      {filteredNotes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <NotesCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NotesGrid;
