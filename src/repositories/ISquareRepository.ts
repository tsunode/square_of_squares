import SquaresPainted from '@entities/SquaresPainted';
import ICreateSquareDTO from '@services/Square/CreateSquare/ICreateSquareDTO';

export default interface ISquareRepository {
  // findByPointOverlay(data: IFindByPointDTO): Promise<Territory | undefined>;
  create(data: ICreateSquareDTO): Promise<SquaresPainted>;
}
