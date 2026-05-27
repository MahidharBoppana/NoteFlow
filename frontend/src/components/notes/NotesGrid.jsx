import { Grid } from "@mui/material";

import { useNotes } from "../../context/NotesContext";

import NotesCard from "./NotesCard";
import EmptyNotes from "./EmptyNotes";

function NotesGrid() {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <EmptyNotes />;
  }

  return (
    <Grid container spacing={3}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <NotesCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NotesGrid;
