import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import './config/database';
import './config/container';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
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
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
