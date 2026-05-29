import {
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useNotes } from "../../context/NotesContext";

function TrashCard({ note }) {

  const {
    restoreNote,
    permanentlyDeleteNote,
  } = useNotes();

  return (
    <Card>

      <CardContent>

        <Typography
          variant="h6"
          gutterBottom
        >
          {note.title}
        </Typography>

        <Typography
          variant="body2"
        >
          {note.category}
        </Typography>

        <div className="mt-4 flex gap-2">

          <IconButton
            onClick={() =>
              restoreNote(note.id)
            }
          >
            <RestoreIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              permanentlyDeleteNote(
                note.id
              )
            }
          >
            <DeleteForeverIcon />
          </IconButton>

        </div>

      </CardContent>

    </Card>
  );
}

export default TrashCard;