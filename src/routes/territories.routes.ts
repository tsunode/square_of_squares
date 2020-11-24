import { Router } from 'express';
import TerritoriesController from '../controllers/TerritoriesController';

const territoriesRouter = Router();
const territoriesController = new TerritoriesController();

territoriesRouter.post('/', territoriesController.create);

export default territoriesRouter;
