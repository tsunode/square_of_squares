import IErrorRepository from '@repositories/IErrorRepository';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../errors/AppError';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';

@injectable()
class RemoveTerritoryService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,

    @inject('ErrorRepository')
    private errorRepository: IErrorRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const territory = await this.territoryRepository.findById({ id });

    if (!territory) {
      const content = 'This territory was not found.';

      await this.errorRepository.create({
        content,
        route: '/territories/not-found',
      });

      throw new AppError(content);
    }

    await this.territoryRepository.remove(id);
  }
}
export default RemoveTerritoryService;
