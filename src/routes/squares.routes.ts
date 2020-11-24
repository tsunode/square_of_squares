import { Router } from 'express';
import SquaresController from '../controllers/SquaresController';

const squaresRouter = Router();
const squaresController = new SquaresController();

squaresRouter.post('/', squaresController.create);
// squaresRouter.get('/', squaresController.index);

export default squaresRouter;
