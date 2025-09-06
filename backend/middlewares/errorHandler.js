export const errorHandler = (err, req, res, next) => {
  console.log(
    "************************************** i am error handler - START **************************************"
  );

  console.log(err);

  console.log(
    "************************************** i am error handler - END **************************************"
  );

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: err.message || "Internal server error",
    statusCode,
  });

  next();
};
