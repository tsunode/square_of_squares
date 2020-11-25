import { getRepository, Repository } from 'typeorm';

import Territory from '@entities/Territory';
import IFindTerritoryByPointDTO from '@services/Territory/CreateTerritory/IFindTerritoryByPointDTO';
import ICreateTerritoryDTO from '@services/Territory/CreateTerritory/ICreateTerritoryDTO';
import IFindTerritoryByIdDTO from '@services/Territory/ShowTerritory/IFindTerritoryByIdDTO';
import ITerritoryRepository, { IFindAll } from '../ITerritoryRepository';

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
  }: IFindTerritoryByPointDTO): Promise<Territory | undefined> {
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
  }: IFindTerritoryByPointDTO): Promise<Territory | undefined> {
    const pointStart = `point(${start.x},${start.y})`;
    const pointEnd = `point(${end.x}, ${end.y})`;

    const territory = await this.ormRepository.findOne({
      where: `box(${pointStart}, ${pointEnd}) <@ box(Territory.start, Territory.end)`,
    });

    return territory;
  }

  public async findById({
    id,
    withpainted,
  }: IFindTerritoryByIdDTO): Promise<Territory | undefined> {
    let territory;

    if (withpainted) {
      territory = await this.ormRepository.findOne(id, {
        relations: ['squares_painted'],
      });
    } else {
      territory = await this.ormRepository.findOne(id);
    }

    return territory;
  }

  public async findAll(order: string): Promise<IFindAll[] | undefined> {
    let territories;

    switch (order) {
      case 'mpa': // most painted area
        territories = await this.ormRepository
          .createQueryBuilder('territory')
          .select('territory.*')
          .addSelect('COUNT(squares_painted.territory_id)', 'painted_area')
          .addSelect('SUM(squares_painted.area)', 'painted_area_value')
          .leftJoin('territory.squares_painted', 'squares_painted')
          .groupBy('territory.id')
          .orderBy('painted_area_value', 'DESC')
          .getRawMany<IFindAll>();

        break;
      case 'mppa': // most proportional painted area
        territories = await this.ormRepository
          .createQueryBuilder('territory')
          .select('territory.*')
          .addSelect('COUNT(squares_painted.territory_id)', 'painted_area')
          .addSelect(
            'territory.area / SUM(squares_painted.area)',
            'painted_area_value',
          )
          .leftJoin('territory.squares_painted', 'squares_painted')
          .groupBy('territory.id')
          .orderBy('painted_area_value', 'DESC')
          .getRawMany<IFindAll>();

        break;
      default:
        territories = await this.ormRepository
          .createQueryBuilder('territory')
          .select('territory.*')
          .addSelect('COUNT(squares_painted.territory_id)', 'painted_area')
          .leftJoin('territory.squares_painted', 'squares_painted')
          .groupBy('territory.id')
          .getRawMany<IFindAll>();

        break;
    }

    return territories;
  }
}
export default TerritoryRepository;
