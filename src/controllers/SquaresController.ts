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

  // public async index(request: Request, response: Response): Promise<Response> {
  //   const listTerritories = container.resolve(ListTerritoriesService);

  //   const territories = await listTerritories.execute();

  //   return response.json({
  //     count: territories?.length || 0,
  //     data: territories,
  //   });
  // }
}
export default SquaresController;
