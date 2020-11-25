import IFindTerritoryByPointDTO from '@services/Territory/CreateTerritory/IFindTerritoryByPointDTO';
import IFindTerritoryByIdDTO from '@services/Territory/ShowTerritory/IFindTerritoryByIdDTO';

import Territory from '../entities/Territory';
import ICreateTerritoryDTO from '../services/Territory/CreateTerritory/ICreateTerritoryDTO';

export interface IFindAll extends Territory {
  painted_area: number;
}

export default interface ITerritoryRepository {
  findByPointOverlay(
    data: IFindTerritoryByPointDTO,
  ): Promise<Territory | undefined>;
  findByPointContains(
    data: IFindTerritoryByPointDTO,
  ): Promise<Territory | undefined>;
  findById(data: IFindTerritoryByIdDTO): Promise<Territory | undefined>;
  findAll(order: string): Promise<IFindAll[] | undefined>;
  create(data: ICreateTerritoryDTO): Promise<Territory>;
  remove(id: string): Promise<void>;
}
