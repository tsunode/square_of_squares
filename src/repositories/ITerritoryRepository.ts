import Territory from 'entities/Territory';
import ICreateTerritoryDTO from 'services/CreateTerritory/ICreateTerritoryDTO';
import IFindByOverlayDTO from 'services/CreateTerritory/IFindByOverlayDTO';

export default interface ITerritoryRepository {
  findByOverlay(data: IFindByOverlayDTO): Promise<Territory | undefined>;
  findAll(): Promise<Territory[] | undefined>;
  create(data: ICreateTerritoryDTO): Promise<Territory>;
}
