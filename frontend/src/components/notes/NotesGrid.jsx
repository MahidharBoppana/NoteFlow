import NotesCard from "./NotesCard";
import EmptyNotes from "./EmptyNotes";

function NotesGrid({ notes, searchQuery }) {
  const filteredNotes = notes.filter((note) => {
    if (note.isTrashed) return false;

    const search = (searchQuery || "").toLowerCase();

    const titleMatch = note.title.toLowerCase().includes(search);

    const contentMatch = note.content
      .replace(/<[^>]*>/g, "")
      .toLowerCase()
      .includes(search);

    return titleMatch || contentMatch;
  });

  const sortedNotes = [...filteredNotes].sort(
    (a, b) => Number(b.isPinned) - Number(a.isPinned),
  );

  if (sortedNotes.length === 0) {
    return <EmptyNotes />;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        xl:grid-cols-3

        2xl:grid-cols-4
      "
    >
      {sortedNotes.map((note) => (
        <NotesCard key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NotesGrid;
