import { inject, injectable } from 'tsyringe';

import SquaresPainted from '@entities/SquaresPainted';
import ISquareRepository from '@repositories/ISquareRepository';
import ITerritoryRepository from '@repositories/ITerritoryRepository';
import AppError from '@errors/AppError';

interface IPoint {
  x: number;
  y: number;
}

interface IRequest {
  start: IPoint;
  end: IPoint;
}

interface IResponse extends SquaresPainted {
  painted: boolean;
}

@injectable()
class CreateSquareService {
  constructor(
    @inject('SquareRepository')
    private squareRepository: ISquareRepository,
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute({ end, start }: IRequest): Promise<IResponse> {
    const area = (end.x - start.x) * (end.y - start.y);
    const isSquare = Number.isInteger(Math.sqrt(area));

    if (!isSquare) {
      throw new AppError('The parameters do not correspond to a square');
    }

    const territoryFound = await this.territoryRepository.findByPointContains({
      start,
      end,
    });

    if (!territoryFound) {
      throw new AppError('This square does not belong to any territory');
    }

    const square = await this.squareRepository.findByPoint({
      start,
      end,
    });

    if (square) {
      throw new AppError('This square already create and painted');
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
