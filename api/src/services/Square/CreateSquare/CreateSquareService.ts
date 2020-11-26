import { inject, injectable } from 'tsyringe';

import SquaresPainted from '@entities/SquaresPainted';
import ISquareRepository from '@repositories/ISquareRepository';
import ITerritoryRepository from '@repositories/ITerritoryRepository';
import AppError from '@errors/AppError';
import IErrorRepository from '@repositories/IErrorRepository';

interface IPoint {
  x: number;
  y: number;
}

interface IRequest {
  start: IPoint;
  end: IPoint;
}

interface IResponse extends Omit<SquaresPainted, 'getCreateAtFormated'> {
  painted: boolean;
}

@injectable()
class CreateSquareService {
  constructor(
    @inject('SquareRepository')
    private squareRepository: ISquareRepository,

    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,

    @inject('ErrorRepository')
    private errorRepository: IErrorRepository,
  ) {}

  public async execute({ end, start }: IRequest): Promise<IResponse> {
    const area = (end.x - start.x) * (end.y - start.y);
    const isSquare = Number.isInteger(Math.sqrt(area));

    if (!isSquare) {
      const content = 'The parameters do not correspond to a square';

      await this.errorRepository.create({
        content,
        route: '/squares/not-square',
      });

      throw new AppError(content);
    }

    const territoryFound = await this.territoryRepository.findByPointContains({
      start,
      end,
    });

    if (!territoryFound) {
      const content = 'This square does not belong to any territory';

      await this.errorRepository.create({
        content,
        route: '/squares/not-found',
      });

      throw new AppError(content);
    }

    const square = await this.squareRepository.findByPoint({
      start,
      end,
    });

    if (square) {
      const content = 'This square already create and painted';

      await this.errorRepository.create({
        content,
        route: '/squares/not-created',
      });

      throw new AppError(content);
    }

    const squarePainted = await this.squareRepository.create({
      territory_id: territoryFound.id,
      start,
      end,
      area,
    });

    return { ...squarePainted, painted: true };
  }
}
export default CreateSquareService;
