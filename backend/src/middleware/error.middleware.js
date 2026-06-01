const errorMiddleware = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof Error)) {
    error = new Error(String(error));
  }

  const statusCode = error.statusCode || 500;

  const response = {
    success: false,
    message: error.message || "Internal Server Error",

    errors: error.errors || [],

    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  };

  return res.status(statusCode).json(response);
};

export default errorMiddleware;
