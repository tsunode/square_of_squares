import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import ErrorsController from '@controllers/ErrorsController';
import SquaresController from '../controllers/SquaresController';

const squaresRouter = Router();
const squaresController = new SquaresController();
const errorsController = new ErrorsController();

squaresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      start: {
        x: Joi.number().required(),
        y: Joi.number().required(),
      },
      end: {
        x: Joi.number().required(),
        y: Joi.number().required(),
      },
    },
  }),
  squaresController.create,
);
squaresRouter.get('/', squaresController.index);
squaresRouter.get('/not-found', errorsController.index);
squaresRouter.get('/:startX/:startY/:endX/:endY', squaresController.show);

export default squaresRouter;
