import { inject, injectable } from 'tsyringe';

import AppError from '../../../errors/AppError';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';

@injectable()
class RemoveTerritoryService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const territory = await this.territoryRepository.findById(id);

    if (!territory) {
      throw new AppError('This territory was not found.');
    }

    await this.territoryRepository.remove(id);
  }
}
export default RemoveTerritoryService;
