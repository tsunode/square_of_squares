import { inject, injectable } from 'tsyringe';

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

interface IResponse {
  start: IPoint;
  end: IPoint;
  painted: boolean;
}

@injectable()
class ShowSquareService {
  constructor(
    @inject('SquareRepository')
    private squareRepository: ISquareRepository,
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute({ end, start }: IRequest): Promise<IResponse> {
    const territoryFound = await this.territoryRepository.findByPointContains({
      start,
      end,
    });

    if (!territoryFound) {
      throw new AppError('This square does not belong to any territory');
    }

    const squarePainted = await this.squareRepository.findByPoint({
      start,
      end,
    });

    const response = {
      start,
      end,
      painted: !!squarePainted,
    };

    return response;
  }
}

export default ShowSquareService;
