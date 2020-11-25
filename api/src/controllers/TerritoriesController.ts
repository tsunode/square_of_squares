import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTerritoryService from '../services/Territory/CreateTerritory/CreateTerritoryService';
import ListTerritoriesService from '../services/Territory/ListTerritories/ListTerritoriesService';
import RemoveTerritoryService from '../services/Territory/RemoveTerritory/RemoveTerritoryService';
import ShowTerritoryService from '../services/Territory/ShowTerritory/ShowTerritoryService';

class TerritoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, start, end } = request.body;

    const createTerritory = container.resolve(CreateTerritoryService);

    const territory = await createTerritory.execute({ name, start, end });

    return response.json({
      data: { territory, painted_area: 0 },
      error: false,
    });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { order } = request.query;

    const listTerritories = container.resolve(ListTerritoriesService);

    const territories = await listTerritories.execute(order as string);

    return response.json({
      count: territories?.length || 0,
      data: territories,
    });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { withpainted } = request.query;

    const showTerritory = container.resolve(ShowTerritoryService);

    const territory = await showTerritory.execute({
      id,
      withpainted: withpainted === 'true',
    });

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
