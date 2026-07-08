import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PushPinIcon from "@mui/icons-material/PushPin";
import DevicesIcon from "@mui/icons-material/Devices";

const steps = [
  {
    id: "01",
    icon: <PersonAddAlt1Icon fontSize="large" color="primary" />,
    title: "Create an Account",
    description:
      "Sign up in seconds and securely access your personal workspace.",
  },
  {
    id: "02",
    icon: <EditNoteIcon fontSize="large" color="primary" />,
    title: "Create Notes",
    description:
      "Capture ideas, meeting notes, tasks and important information with ease.",
  },
  {
    id: "03",
    icon: <PushPinIcon fontSize="large" color="primary" />,
    title: "Organize Everything",
    description:
      "Pin important notes, search instantly and restore deleted notes anytime.",
  },
  {
    id: "04",
    icon: <DevicesIcon fontSize="large" color="primary" />,
    title: "Access Anywhere",
    description:
      "Use NoteFlow seamlessly across desktop, tablet and mobile devices.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="landing-section px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            How NoteFlow Works
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Get started in just a few simple steps and organize your notes like
            never before.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Horizontal line */}

          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-blue-200 lg:block dark:bg-blue-900" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number */}

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg">
                {step.id}
              </div>

              {/* Card */}

              <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
