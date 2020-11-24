import { inject, injectable } from 'tsyringe';
import Territory from 'entities/Territory';
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
  ) {}

  public async execute({ name, end, start }: IRequest): Promise<Territory> {
    const territoryFound = await this.territoryRepository.findByPointOverlay({
      start,
      end,
    });

    if (territoryFound) {
      throw new AppError('This new territory overlays another territory');
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
