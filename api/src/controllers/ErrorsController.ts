import ListErrorsService from '@errors/services/ListErrorsService';
import { classToClass } from 'class-transformer';

import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ErrorsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { take, page } = request.query;
    const { originalUrl, route } = request;

    const listSquare = container.resolve(ListErrorsService);

    const errors = await listSquare.execute({
      take: Number(take) || 5,
      page: Number(page) || 1,
      route: route ? originalUrl : '',
    });

    return response.json({
      data: classToClass(errors),
      error: false,
    });
  }
}
export default ErrorsController;
