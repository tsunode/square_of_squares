import { inject, injectable } from 'tsyringe';

import Territory from 'entities/Territory';
import ITerritoryRepository from '../../../repositories/ITerritoryRepository';

@injectable()
class ListTerritoriesService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute(order: string): Promise<Territory[] | undefined> {
    const territories = await this.territoryRepository.findAll(order);

    return territories;
  }
}
export default ListTerritoriesService;
