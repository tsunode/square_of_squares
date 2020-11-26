import { NextFunction, Request, Response } from 'express';
import AppError from '../AppError';

export default async function reportError(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
): Promise<Response> {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      data: { message: error.message },
      error: true,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    data: { message: 'Internal server error' },
    error: true,
  });
}
