import { inject, injectable } from 'tsyringe';
import Territory from 'entities/Territory';
import AppError from '../../errors/AppError';
import ITerritoryRepository from '../../repositories/ITerritoryRepository';

interface IPoint {
  x: number;
  y: number;
}

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
