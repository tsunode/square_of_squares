import { Router } from 'express';
import ErrorsController from '@controllers/ErrorsController';
import territoriesRouter from './territories.routes';
import squaresRouter from './squares.routes';

const errorsController = new ErrorsController();

const routes = Router();

routes.use('/territories', territoriesRouter);
routes.use('/squares', squaresRouter);
routes.use('/errors', errorsController.index);

export default routes;
