import { Button, Chip, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PushPinIcon from "@mui/icons-material/PushPin";
import EditNoteIcon from "@mui/icons-material/EditNote";

function HeroSection() {
  return (
    <section className="landing-section px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Chip label="🚀 Organize Smarter" color="primary" className="mb-6" />

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Capture Ideas.
            <br />
            Stay Organized.
            <br />
            <span className="text-blue-600">Boost Productivity.</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            NoteFlow helps you create, organize, search and manage your notes
            with a clean interface, powerful editor and secure authentication.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              size="large"
            >
              Get Started
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

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon color="success" fontSize="small" />
              Secure Authentication
            </div>

            <div className="flex items-center gap-2">
              <CheckCircleIcon color="success" fontSize="small" />
              Fast Search
            </div>

            <div className="flex items-center gap-2">
              <CheckCircleIcon color="success" fontSize="small" />
              Responsive Design
            </div>
          </div>
        </div>

   
        {/* Right */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EditNoteIcon color="primary" fontSize="large" />

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                NoteFlow
              </h2>
            </div>

            <Chip label="Personal" color="primary" size="small" />
          </div>

          <div className="space-y-5">
            {/* Roadmap Card */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  MERN Roadmap
                </h3>

                <PushPinIcon color="primary" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon color="success" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Learn React
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircleIcon color="success" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Build Backend
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircleIcon color="success" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Connect Frontend
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircleIcon color="success" />

                  <span className="text-gray-700 dark:text-gray-300">
                    Deploy Project
                  </span>
                </div>
              </div>
            </div>

            {/* Goal Card */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Today's Goal
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Finish the NoteFlow project, deploy it successfully and start
                applying for Full Stack Developer positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
