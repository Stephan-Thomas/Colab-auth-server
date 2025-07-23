export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
// export default AppError;
// class ConflictError;
export class ConflictError extends AppError {
  constructor(message, statusCode = 409) {
    super(message, statusCode);
  }
}
export class NotFoundError extends AppError {
  constructor(message, statusCode = 404) {
    super(message, statusCode);
  }
}
export class BadRequestError extends AppError {
  constructor(message, statusCode = 400) {
    super(message, statusCode);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message, statusCode = 401) {
    super(message, statusCode);
  }
}
export class IncorrectCredentials extends AppError {
  constructor(message, statusCode = 401) {
    super(message, statusCode);
  }
}

const errorHandler = (err, req, res, next) => {
  const message = err?.message || "Internal Server Error";
  const statusCode = err?.statusCode || 500;
  console.error("an error occured at", req.url);
  res.status(statusCode).json({
    status: "false",
    message,
  });
};
export default errorHandler;
