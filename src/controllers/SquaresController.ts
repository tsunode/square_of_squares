import ShowSquareService from '@services/Square/ShowSquare/ShowSquareService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSquareService from '../services/Square/CreateSquare/CreateSquareService';

class SquaresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { start, end } = request.body;

    const createSquare = container.resolve(CreateSquareService);

    const square = await createSquare.execute({ start, end });

    return response.json({ data: square, error: false });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { startX, startY, endX, endY } = request.params;

    const showSquare = container.resolve(ShowSquareService);

    const square = await showSquare.execute({
      start: { x: Number(startX), y: Number(startY) },
      end: { x: Number(endX), y: Number(endY) },
    });

    return response.json({
      data: square,
      error: false,
    });
  }
}
export default SquaresController;
