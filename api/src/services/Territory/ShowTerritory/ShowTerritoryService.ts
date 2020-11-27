import { inject, injectable } from 'tsyringe';

import Territory from 'entities/Territory';
import ISquareRepository from '@repositories/ISquareRepository';
import IErrorRepository from '@repositories/IErrorRepository';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';
import AppError from '../../../errors/AppError';

interface IRequest {
  id: string;
  withpainted: boolean | undefined;
}

interface IResponse extends Omit<Territory, 'areaCalculator'> {
  painted_area: number;
}

@injectable()
class ListTerritoriesService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,

    @inject('SquareRepository')
    private squareRepository: ISquareRepository,

    @inject('ErrorRepository')
    private errorRepository: IErrorRepository,
  ) {}

  public async execute({ id, withpainted }: IRequest): Promise<IResponse> {
    const territory = await this.territoryRepository.findById({
      id,
      withpainted,
    });

    if (!territory) {
      const content = 'This territory was not found.';

      await this.errorRepository.create({
        content,
        route: '/territories/not-found',
      });

      throw new AppError(content);
    }

    const painted_area = await this.squareRepository.countByTerritory(
      territory.id,
    );

    return {
      ...territory,
      painted_area,
    };
  }
}
export default ListTerritoriesService;
