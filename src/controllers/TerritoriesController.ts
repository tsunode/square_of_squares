import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTerritoryService from '../services/CreateTerritory/CreateTerritoryService';

class TerritoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, start, end } = request.body;

    const createTerritory = container.resolve(CreateTerritoryService);

    const territory = await createTerritory.execute({ name, start, end });

    return response.json(territory);
  }
}
export default TerritoriesController;
