import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TotalAreaTerritoryService from '../services/Territory/TotalAreaTerritory/TotalAreaTerritoryService';

class TotalAreaController {
  public async show(request: Request, response: Response): Promise<Response> {
    const totalAreaTerritory = container.resolve(TotalAreaTerritoryService);

    const totalArea = await totalAreaTerritory.execute();

    return response.json({ data: totalArea, error: false });
  }
}
export default TotalAreaController;
