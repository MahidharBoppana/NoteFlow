import Typography from "@mui/material/Typography";

function EmptyNotes() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <Typography variant="h5" color="text.secondary">
        No notes availble
      </Typography>
    </div>
  );
}

export default EmptyNotes;
