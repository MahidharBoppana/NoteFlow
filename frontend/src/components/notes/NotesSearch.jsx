import TextField from "@mui/material/TextField";

function NotesSearch({ searchQuery, setSearchQuery }) {
  return (
    <TextField
      placeholder="Search notes...."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-6 w-[360px]"
    />
  );
}

export default NotesSearch;
