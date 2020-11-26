import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import TerritoriesController from '../controllers/TerritoriesController';
import TotalAreaController from '../controllers/TotalAreaController';
import ErrorsController from '../controllers/ErrorsController';

const territoriesRouter = Router();
const territoriesController = new TerritoriesController();
const totalAreaController = new TotalAreaController();
const errorsController = new ErrorsController();

territoriesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
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
  territoriesController.create,
);

territoriesRouter.get('/', territoriesController.index);
territoriesRouter.get('/total-area', totalAreaController.show);
territoriesRouter.get('/territory-overlay', errorsController.index);
territoriesRouter.get('/not-found', errorsController.index);
territoriesRouter.get('/:id', territoriesController.show);
territoriesRouter.delete('/:id', territoriesController.remove);

export default territoriesRouter;
