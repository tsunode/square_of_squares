import { getRepository, Repository } from 'typeorm';

import Territory from '@entities/Territory';
import IFindByPointDTO from '@services/Territory/CreateTerritory/IFindByPointDTO';
import ICreateTerritoryDTO from '@services/Territory/CreateTerritory/ICreateTerritoryDTO';
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

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByPointOverlay({
    start,
    end,
  }: IFindByPointDTO): Promise<Territory | undefined> {
    const pointStart = `point(${start.x},${start.y})`;
    const pointEnd = `point(${end.x}, ${end.y})`;

    const territory = await this.ormRepository.findOne({
      where: `box(${pointStart}, ${pointEnd}) && box(Territory.start, Territory.end)`,
    });

    return territory;
  }

  public async findByPointContains({
    start,
    end,
  }: IFindByPointDTO): Promise<Territory | undefined> {
    const pointStart = `point(${start.x},${start.y})`;
    const pointEnd = `point(${end.x}, ${end.y})`;

    const territory = await this.ormRepository.findOne({
      where: `box(${pointStart}, ${pointEnd}) <@ box(Territory.start, Territory.end)`,
    });

    return territory;
  }

  public async findById(id: string): Promise<Territory | undefined> {
    const territory = await this.ormRepository.findOne(id);

    return territory;
  }

  public async findAll(): Promise<Territory[] | undefined> {
    const territories = await this.ormRepository.find();

    return territories;
  }
}
export default TerritoryRepository;
