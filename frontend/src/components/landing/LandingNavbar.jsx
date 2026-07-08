import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";

function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-600"
        >
          <EditNoteIcon fontSize="large" />

          <span>NoteFlow</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button component={Link} to="/login" variant="text" color="primary">
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

export default LandingNavbar;
