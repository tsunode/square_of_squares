import { Router } from 'express';
import TerritoriesController from '../controllers/TerritoriesController';

const territoriesRouter = Router();
const territoriesController = new TerritoriesController();

territoriesRouter.post('/', territoriesController.create);
territoriesRouter.get('/', territoriesController.index);
territoriesRouter.get('/:id', territoriesController.show);
territoriesRouter.delete('/:id', territoriesController.remove);

export default territoriesRouter;
