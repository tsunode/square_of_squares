import { inject, injectable } from 'tsyringe';
import Territory from 'entities/Territory';
import IErrorRepository from '@repositories/IErrorRepository';
import AppError from '../../../errors/AppError';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';

interface IPoint {
  x: number;
  y: number;
}

interface IRequest {
  name: string;
  start: IPoint;
  end: IPoint;
}

@injectable()
class CreateTerritoryService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,

    @inject('ErrorRepository')
    private errorRepository: IErrorRepository,
  ) {}

  public async execute({ name, end, start }: IRequest): Promise<Territory> {
    const territoryFound = await this.territoryRepository.findByPointOverlay({
      start,
      end,
    });

    if (territoryFound) {
      const content = 'This new territory overlays another territory';

      await this.errorRepository.create({
        content,
        route: '/territories/territory-overlay',
      });

      throw new AppError(content);
    }

    const territory = await this.territoryRepository.create({
      name,
      start,
      end,
    });

    return territory;
  }
}
export default CreateTerritoryService;
