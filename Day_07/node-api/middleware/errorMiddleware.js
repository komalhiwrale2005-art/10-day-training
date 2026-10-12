
const errorMiddleware = (err, req, res, next) => {
  console.error(err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.status
      ? err.message
      : "Internal server error",
  });
};

module.exports = errorMiddleware;
