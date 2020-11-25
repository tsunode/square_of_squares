import { getRepository, Repository } from 'typeorm';

import SquaresPainted from 'entities/SquaresPainted';
import ICreateSquareDTO from '@services/Square/CreateSquare/ICreateSquareDTO';
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

  public async countByTerritory(id: string): Promise<number> {
    const count = this.ormRepository.count({ territory_id: id });

    return count;
  }
}
export default SquareRepository;
