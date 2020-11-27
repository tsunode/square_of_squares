import { inject, injectable } from 'tsyringe';

import ISquareRepository from '@repositories/ISquareRepository';
import ITerritoryRepository from '@repositories/ITerritoryRepository';

interface IResponse {
  painted_area: number;
  total_area: number;
}

@injectable()
class TotalAreaTerritoryService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,

    @inject('SquareRepository')
    private squareRepository: ISquareRepository,
  ) {}

  public async execute(): Promise<IResponse> {
    const { total_area } = await this.territoryRepository.getAreaTotal();

    const {
      total_area: painted_area,
    } = await this.squareRepository.getAreaTotalPainted();

    return {
      total_area,
      painted_area,
    };
  }
}
export default TotalAreaTerritoryService;
