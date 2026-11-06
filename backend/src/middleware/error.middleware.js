const errorMiddleware = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof Error)) {
    error = new Error(String(error));
  }



  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    errors: error.errors || [],
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};

export default errorMiddleware;
