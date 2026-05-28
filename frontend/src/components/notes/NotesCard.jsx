import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { useNotes } from "../../context/NotesContext";

import NoteViewerModal from "./NoteViewerModal";

import EditIcon from "@mui/icons-material/Edit";

function NotesCard({ note }) {
  const { deleteNote, setSelectedNote, setOpenEditorModal } = useNotes();

  const [openViewer, setOpenViewer] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        className="
        w-[535px]
          h-[320px]
          rounded-2xl
          border
          border-gray-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          flex
          flex-col
          justify-between
        "
      >
        <CardContent
          className="
            flex
            flex-col
            h-full
          "
        >
          <Box
            className="
              flex
              justify-between
              items-start
            "
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              className="
                line-clamp-1
              "
            >
              {note.title}
            </Typography>

            <div>
              <IconButton
                onClick={() => {
                  setSelectedNote(note);
                  setOpenEditorModal(true);
                }}
                sx={{
                  color: "#2563eb",
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={() => deleteNote(note.id)}
                sx={{
                  color: "#ef4444",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Box>

          <Typography
            variant="body2"
            className="
            break-words
    mt-4
    text-gray-600
    leading-6
    overflow-hidden
    flex-1
  "
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
            }}
          >
            {note.content.replace(/<[^>]*>/g, "")}
          </Typography>

          <div className="mt-4">
            <Typography
              variant="caption"
              className="
                text-gray-400
                block
                mb-3
              "
            >
              {new Date(note.createdAt).toLocaleDateString()}
            </Typography>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenViewer(true)}
            >
              View Note
            </Button>
          </div>
        </CardContent>
      </Card>

      <NoteViewerModal
        open={openViewer}
        onClose={() => setOpenViewer(false)}
        note={note}
      />
    </>
  );
}

export default NotesCard;
