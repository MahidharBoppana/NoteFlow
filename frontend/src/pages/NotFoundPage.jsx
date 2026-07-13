import { Link } from "react-router-dom";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import HomeIcon from "@mui/icons-material/Home";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/10">
          <ErrorOutlineIcon sx={{ fontSize: 54 }} className="text-blue-500" />
        </div>

        {/* 404 */}
        <h1 className="mb-3 text-7xl font-extrabold text-white">404</h1>

        <h2 className="mb-4 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mx-auto mb-10 max-w-lg leading-7 text-slate-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back to your workspace.
        </p>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/dashboard"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-2xl
              bg-blue-600
              px-6
              py-3

              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-blue-700
            "
          >
            <HomeIcon fontSize="small" />
            Go to Dashboard
          </Link>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center

              rounded-2xl
              border
              border-slate-700

              px-6
              py-3

              font-semibold
              text-slate-300

              transition-all
              duration-300

              hover:border-blue-500
              hover:text-white
            "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
