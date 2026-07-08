import { Box, Container, Paper, Typography } from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SecurityIcon from "@mui/icons-material/Security";
import SearchIcon from "@mui/icons-material/Search";
import DevicesIcon from "@mui/icons-material/Devices";

const stats = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 45 }} color="primary" />,
    value: "10+",
    title: "Powerful Features",
    description: "Everything you need to organize your notes efficiently.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 45 }} color="primary" />,
    value: "JWT",
    title: "Secure Authentication",
    description: "Access & Refresh Token authentication with protected routes.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 45 }} color="primary" />,
    value: "Fast",
    title: "Instant Search",
    description: "Find notes instantly using title, content or category.",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 45 }} color="primary" />,
    value: "100%",
    title: "Responsive Design",
    description: "Optimized for desktop, tablet and mobile devices.",
  },
];

function StatsSection() {
  return (
    <section className="landing-section px-6 py-24">
      <Container maxWidth="xl">
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h3"
            gutterBottom
            className="!font-bold !text-gray-900 dark:!text-white"
          >
            Built For Modern Productivity
          </Typography>

          <Typography
            variant="h6"
            className="mx-auto max-w-2xl !text-gray-600 dark:!text-gray-300"
          >
            NoteFlow provides a clean, secure and powerful workspace to capture
            ideas, organize tasks and manage your notes effortlessly.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 4,
          }}
          className="mt-10"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                  {item.icon}
                </div>
              </div>

              <h3 className="mb-2 text-4xl font-bold text-blue-600">
                {item.value}
              </h3>

              <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </Box>
      </Container>
    </section>
  );
}

export default StatsSection;
