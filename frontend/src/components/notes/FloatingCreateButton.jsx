import AddIcon from "@mui/icons-material/Add";

function FloatingCreateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-2xl
        bg-blue-600
        text-white

        shadow-2xl
        shadow-blue-600/30

        transition-all
        duration-300

        hover:scale-105
        hover:bg-blue-700
        active:scale-95

        lg:bottom-10
        lg:right-10
        cursor-pointer
      "
      aria-label="Create Note"
    >
      <AddIcon fontSize="medium" />
    </button>
  );
}

export default FloatingCreateButton;
