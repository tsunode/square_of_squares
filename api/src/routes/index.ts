import { Router } from 'express';
import territoriesRouter from './territories.routes';
import squaresRouter from './squares.routes';

const routes = Router();

routes.use('/territories', territoriesRouter);
routes.use('/squares', squaresRouter);

export default routes;
