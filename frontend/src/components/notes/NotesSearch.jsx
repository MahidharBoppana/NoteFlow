import SearchIcon from "@mui/icons-material/Search";

function NotesSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full

          rounded-2xl
          border
          border-slate-800

          bg-slate-900

          py-3
          pl-12
          pr-4

          text-white
          placeholder:text-slate-500

          outline-none

          transition-all
          duration-300

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/10
        "
      />
    </div>
  );
}

export default NotesSearch;
