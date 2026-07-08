import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CTASection() {
  return (
    <section className="landing-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-gray-200 bg-white px-8 py-16 text-center shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 md:px-16">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30">
            🚀 Start Your Productivity Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Ready to Organize
            <span className="text-blue-600"> Your Notes?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join NoteFlow today and keep your ideas, projects and important
            information organized in one beautiful workspace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Get Started Free
            </Button>

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              size="large"
            >
              Login
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-300">
            <div>
              {" "}
              <CheckCircleIcon color="success" fontSize="small" /> Free to Use
            </div>
            <div>🔒 Secure Authentication</div>
            <div>⚡ Fast & Responsive</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
