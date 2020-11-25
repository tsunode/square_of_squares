import SquaresPainted from '@entities/SquaresPainted';
import ICreateSquareDTO from '@services/Square/CreateSquare/ICreateSquareDTO';
import IFindAllSquadsPaintedDTO from '@services/Square/ListSquares/IFindAllSquadsPaintedDTO';
import IFindSquadByPointDTO from '@services/Square/ShowSquare/IFindSquadByPointDTO';

export default interface ISquareRepository {
  findByPoint(data: IFindSquadByPointDTO): Promise<SquaresPainted | undefined>;
  findAll(
    data: IFindAllSquadsPaintedDTO,
  ): Promise<SquaresPainted[] | undefined>;
  create(data: ICreateSquareDTO): Promise<SquaresPainted>;
  countByTerritory(id: string): Promise<number>;
}
