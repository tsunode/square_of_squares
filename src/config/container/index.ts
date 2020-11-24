import { container } from 'tsyringe';

import TerritoryRepository from '../../repositories/implementations/TerritoryRepository';
import ITerritoryRepository from '../../repositories/ITerritoryRepository';

container.registerSingleton<ITerritoryRepository>(
  'TerritoryRepository',
  TerritoryRepository,
);
