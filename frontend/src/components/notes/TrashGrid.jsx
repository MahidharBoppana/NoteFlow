import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import { useNotes } from "../../context/NotesContext";

import TrashCard from "./TrashCard";

function TrashGrid() {
  const { notes } = useNotes();

  const trashedNotes = notes.filter((note) => note.isTrashed);

  if (trashedNotes.length === 0) {
    return (
      <Typography
        variant="body1"
        className="flex justify-center items-center h-64 text-gray-500"
      >
        Trash is empty
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {trashedNotes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <TrashCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TrashGrid;
