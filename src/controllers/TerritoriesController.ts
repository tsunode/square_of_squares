import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTerritoryService from '../services/CreateTerritory/CreateTerritoryService';
import ListTerritoriesService from '../services/ListTerritories/ListTerritoriesService';
import RemoveTerritoryService from '../services/RemoveTerritory/RemoveTerritoryService';
import ShowTerritoryService from '../services/ShowTerritory/ShowTerritoryService';

class TerritoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, start, end } = request.body;

    const createTerritory = container.resolve(CreateTerritoryService);

    const territory = await createTerritory.execute({ name, start, end });

    return response.json({ data: territory, error: false });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTerritories = container.resolve(ListTerritoriesService);

    const territories = await listTerritories.execute();

    return response.json({
      count: territories?.length || 0,
      data: territories,
    });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showTerritory = container.resolve(ShowTerritoryService);

    const territory = await showTerritory.execute(id);

    return response.json({ data: territory, error: false });
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeTerritory = container.resolve(RemoveTerritoryService);

    await removeTerritory.execute(id);

    return response.json({ error: false });
  }
}
export default TerritoriesController;
