import { inject, injectable } from 'tsyringe';

import Territory from '../../entities/Territory';
import ITerritoryRepository from '../../repositories/ITerritoryRepository';

@injectable()
class ListTerritoriesService {
  constructor(
    @inject('TerritoryRepository')
    private territoryRepository: ITerritoryRepository,
  ) {}

  public async execute(): Promise<Territory[] | undefined> {
    const territories = await this.territoryRepository.findAll();

    return territories;
  }
}
export default ListTerritoriesService;
