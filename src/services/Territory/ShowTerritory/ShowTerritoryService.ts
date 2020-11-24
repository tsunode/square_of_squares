import { inject, injectable } from 'tsyringe';

import Territory from 'entities/Territory';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';
import AppError from '../../../errors/AppError';

@injectable()
class ListTerritoriesService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute(id: string): Promise<Territory> {
    const territory = await this.territoryRepository.findById(id);

    if (!territory) {
      throw new AppError('This territory was not found.');
    }

    return territory;
  }
}
export default ListTerritoriesService;
