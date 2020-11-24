import Territory from '../entities/Territory';
import ICreateTerritoryDTO from '../services/Territory/CreateTerritory/ICreateTerritoryDTO';
import IFindByPointDTO from '../services/Territory/CreateTerritory/IFindByPointDTO';

export default interface ITerritoryRepository {
  findByPointOverlay(data: IFindByPointDTO): Promise<Territory | undefined>;
  findByPointContains(data: IFindByPointDTO): Promise<Territory | undefined>;
  findById(id: string): Promise<Territory | undefined>;
  findAll(): Promise<Territory[] | undefined>;
  create(data: ICreateTerritoryDTO): Promise<Territory>;
  remove(id: string): Promise<void>;
}
