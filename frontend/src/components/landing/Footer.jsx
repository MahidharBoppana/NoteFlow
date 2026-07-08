import { Link } from "react-router-dom";

import EditNoteIcon from "@mui/icons-material/EditNote";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer
      id="contact"
      className="landing-section border-t border-gray-200 px-6 py-16 dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="mb-5 flex items-center gap-2">
              <EditNoteIcon color="primary" fontSize="large" />

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                NoteFlow
              </h2>
            </div>

            <p className="leading-7 text-gray-600 dark:text-gray-300">
              Capture ideas, organize notes and boost your productivity with a
              clean, secure and modern note-taking experience.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white">
              Account
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="space-y-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
              >
                <GitHubIcon />
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
              >
                <LinkedInIcon />
                LinkedIn
              </a>

              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
              >
                <EmailIcon />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">NoteFlow</span>. All
            rights reserved.
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Built with ❤️ using React, Node.js, Express & MongoDB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;