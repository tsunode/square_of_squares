import { Router } from 'express';
import TerritoriesController from '../controllers/TerritoriesController';
import TotalAreaController from '../controllers/TotalAreaController';

const territoriesRouter = Router();
const territoriesController = new TerritoriesController();
const totalAreaController = new TotalAreaController();

territoriesRouter.post('/', territoriesController.create);
territoriesRouter.get('/', territoriesController.index);
territoriesRouter.get('/total-area', totalAreaController.show);
territoriesRouter.get('/:id', territoriesController.show);
territoriesRouter.delete('/:id', territoriesController.remove);

export default territoriesRouter;
