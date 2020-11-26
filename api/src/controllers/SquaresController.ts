import ListSquareService from '@services/Square/ListSquares/ListSquareService';
import ShowSquareService from '@services/Square/ShowSquare/ShowSquareService';
import { classToClass } from 'class-transformer';
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

  public async index(request: Request, response: Response): Promise<Response> {
    const { take, page, order } = request.query;

    const listSquare = container.resolve(ListSquareService);

    const squaresPainted = await listSquare.execute({
      take: Number(take) || 5,
      page: Number(page) || 1,
      order: order === 'asc' ? 'ASC' : 'DESC',
    });

    return response.json({
      data: classToClass(squaresPainted),
      error: false,
    });
  }
}
export default SquaresController;
