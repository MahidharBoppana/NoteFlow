import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function NoteViewerModal({
  open,
  onClose,
  note,
}) {

  if (!note) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}

      fullWidth
      maxWidth="md"
      className="mt-10"
    >
      <DialogTitle
        className="
          flex
          justify-between
          items-center
        "
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          {note.title}
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>

        <Typography
          variant="caption"
          className="
            text-gray-500
            block
            mb-4
          "
        >
          {new Date(
            note.createdAt
          ).toLocaleDateString()}
        </Typography>

        <div
          className="
            prose
            max-w-none
          "

          dangerouslySetInnerHTML={{
            __html: note.content,
          }}
        />

      </DialogContent>
    </Dialog>
  );
}

export default NoteViewerModal;