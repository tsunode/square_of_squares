import { getRepository, Repository } from 'typeorm';

import SquaresPainted from 'entities/SquaresPainted';
import ICreateSquareDTO from '@services/Square/CreateSquare/ICreateSquareDTO';
import IFindSquadByPointDTO from '@services/Square/ShowSquare/IFindSquadByPointDTO';
import IFindAllSquadsPaintedDTO from '@services/Square/ListSquares/IFindAllSquadsPaintedDTO';
import IGetTotalAreaDTO from '@services/Territory/TotalAreaTerritory/IGetTotalAreaDTO';
import ISquareRepository from '../ISquareRepository';

class SquareRepository implements ISquareRepository {
  private ormRepository: Repository<SquaresPainted>;

  constructor() {
    this.ormRepository = getRepository(SquaresPainted);
  }

  public async create({
    territory_id,
    start,
    end,
    area,
  }: ICreateSquareDTO): Promise<SquaresPainted> {
    const squarePainted = this.ormRepository.create({
      territory_id,
      start,
      end,
      area,
    });

    await this.ormRepository.save(squarePainted);

    return squarePainted;
  }

  public async findAll({
    page,
    take,
    order,
  }: IFindAllSquadsPaintedDTO): Promise<SquaresPainted[] | undefined> {
    const squaresPainted = this.ormRepository.find({
      take,
      skip: take * (page - 1),
      order: {
        created_at: order,
      },
    });

    return squaresPainted;
  }

  public async findByPoint({
    start,
    end,
  }: IFindSquadByPointDTO): Promise<SquaresPainted | undefined> {
    const pointStart = `point(${start.x},${start.y})`;
    const pointEnd = `point(${end.x}, ${end.y})`;
    const squarePainted = this.ormRepository.findOne({
      where: `box(${pointStart}, ${pointEnd}) @> box(SquaresPainted.start, SquaresPainted.end)`,
    });

    return squarePainted;
  }

  public async countByTerritory(id: string): Promise<number> {
    const count = this.ormRepository.count({ territory_id: id });

    return count;
  }

  public async getAreaTotalPainted(): Promise<IGetTotalAreaDTO> {
    const areaTotalPainted = await this.ormRepository
      .createQueryBuilder('squares_painted')
      .select('sum(area)', 'total_area')
      .getRawOne<IGetTotalAreaDTO>();

    return areaTotalPainted;
  }
}
export default SquareRepository;
