import { Router } from 'express';
import SquaresController from '../controllers/SquaresController';

const squaresRouter = Router();
const squaresController = new SquaresController();

squaresRouter.post('/', squaresController.create);
squaresRouter.get('/', squaresController.index);
squaresRouter.get('/:startX/:startY/:endX/:endY', squaresController.show);

export default squaresRouter;
