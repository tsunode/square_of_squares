import ICreateTerritoryDTO from 'services/CreateTerritory/ICreateTerritoryDTO';
import IFindByOverlayDTO from 'services/CreateTerritory/IFindByOverlayDTO';
import { getRepository, Repository } from 'typeorm';
import Territory from '../../entities/Territory';
import ITerritoryRepository from '../ITerritoryRepository';

class TerritoryRepository implements ITerritoryRepository {
  private ormRepository: Repository<Territory>;

  constructor() {
    this.ormRepository = getRepository(Territory);
  }

  public async create({
    name,
    start,
    end,
  }: ICreateTerritoryDTO): Promise<Territory> {
    const territory = this.ormRepository.create({ name, start, end });

    await this.ormRepository.save(territory);

    return territory;
  }

  public async findByOverlay({
    start,
    end,
  }: IFindByOverlayDTO): Promise<Territory | undefined> {
    const pointStart = `point(${start.x},${start.y})`;
    const pointEnd = `point(${end.x}, ${end.y})`;

    const territory = await this.ormRepository.findOne({
      where: `box(${pointStart}, ${pointEnd}) && box(Territory.start, Territory.end)`,
    });

    return territory;
  }

  public async findAll(): Promise<Territory[] | undefined> {
    const territories = await this.ormRepository.find();

    return territories;
  }
}
export default TerritoryRepository;
