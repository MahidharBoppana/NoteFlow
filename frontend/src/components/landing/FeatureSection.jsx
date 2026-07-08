import {
  Search,
  PushPin,
  Delete,
  Security,
  EditNote,
  AutoAwesome,
} from "@mui/icons-material";

const features = [
  {
    icon: <EditNote fontSize="large" color="primary" />,
    title: "Rich Note Editor",
    description:
      "Write and organize your ideas with a clean, distraction-free editor designed for productivity.",
  },
  {
    icon: <Search fontSize="large" color="primary" />,
    title: "Instant Search",
    description:
      "Quickly find notes by title, content, or category with powerful real-time search.",
  },
  {
    icon: <PushPin fontSize="large" color="primary" />,
    title: "Pin Important Notes",
    description:
      "Keep your most important notes at the top so they're always within reach.",
  },
  {
    icon: <Delete fontSize="large" color="primary" />,
    title: "Trash & Restore",
    description:
      "Recover accidentally deleted notes anytime before permanently removing them.",
  },
  {
    icon: <Security fontSize="large" color="primary" />,
    title: "Secure Authentication",
    description:
      "Your account is protected with JWT authentication and secure user sessions.",
  },
  {
    icon: <AutoAwesome fontSize="large" color="primary" />,
    title: "Beautiful Experience",
    description:
      "Enjoy a clean, modern interface that helps you stay focused and productive every day.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            NoteFlow provides all the essential tools to help you capture,
            organize, and manage your notes with ease.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
