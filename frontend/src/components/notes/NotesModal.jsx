import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import NotesEditor from "./NotesEditor";

function NoteModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        zIndex: 9999,
      }}

      className="mt-10"
    >
      <DialogTitle className="flex justify-between items-center">
        <Typography variant="h5" fontWeigh="bold">
          Note Editor
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <NotesEditor />
      </DialogContent>
    </Dialog>
  );
}

export default NoteModal;
