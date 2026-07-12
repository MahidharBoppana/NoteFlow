import { Box, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function AuthLayout({ title, children }) {
  return (
    <section className="landing-section min-h-screen px-6 py-12">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Section */}

        <div className="hidden lg:block">
          <div className="mb-6 flex items-center gap-3">
            <EditNoteIcon color="primary" sx={{ fontSize: 40 }} />

            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              NoteFlow
            </h1>
          </div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Capture Ideas.
            <br />
            Stay Organized.
            <br />
            <span className="text-blue-600">Boost Productivity.</span>
          </h2>

          <p className="mb-10 max-w-lg text-lg leading-8 text-gray-600 dark:text-gray-300">
            A modern note-taking application that helps you organize your
            thoughts, manage tasks and stay productive every day.
          </p>

          <div className="space-y-5">
            {[
              "Rich Note Editor",
              "Instant Search",
              "Pin Important Notes",
              "Trash & Restore",
              "Secure Authentication",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircleIcon color="success" />

                <span className="text-lg text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md dark:border-gray-800 dark:bg-gray-900 md:p-10">
          <Typography
            variant="h4"
            fontWeight={700}
            className="!mb-2 !text-gray-900 dark:!text-white"
          >
            {title}
          </Typography>

          <Typography className="!mb-8 !text-gray-600 dark:!text-gray-300">
            Welcome back! Please enter your details.
          </Typography>

          {children}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
