import { CustomError } from "../types/index.js";

export const errorHandler = (
  statusCode: number,
  message: string
): CustomError => {
  const error: CustomError = new Error(message);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
