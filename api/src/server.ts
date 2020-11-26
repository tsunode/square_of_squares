import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

import reportError from '@errors/middleware/reportError';
import routes from './routes';
import './config/database';
import './config/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use(reportError);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
