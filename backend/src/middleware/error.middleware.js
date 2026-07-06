const errorMiddleware = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof Error)) {
    error = new Error(String(error));
  }

  console.error(error); // Helpful while developing

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    errors: error.errors || [],
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};

export default errorMiddleware;
