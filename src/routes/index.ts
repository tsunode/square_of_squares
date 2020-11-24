import { Router } from 'express';
import territoriesRouter from './territories.routes';

const routes = Router();

routes.use('/territories', territoriesRouter);

export default routes;
