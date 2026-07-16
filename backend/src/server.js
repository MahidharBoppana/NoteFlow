import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import authRouter from "./routes/auth.routes.js";
import noteRouter from "./routes/note.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", noteRouter);

app.use(errorMiddleware);

export default app;
