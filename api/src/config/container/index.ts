import { container } from 'tsyringe';

import TerritoryRepository from '@repositories/implementations/TerritoryRepository';
import SquareRepository from '@repositories/implementations/SquareRepository';
import ITerritoryRepository from '@repositories/ITerritoryRepository';
import ISquareRepository from '@repositories/ISquareRepository';
import IErrorRepository from '@repositories/IErrorRepository';
import ErrorRepository from '@repositories/implementations/ErrorRepository';

container.registerSingleton<ITerritoryRepository>(
  'TerritoryRepository',
  TerritoryRepository,
);

container.registerSingleton<ISquareRepository>(
  'SquareRepository',
  SquareRepository,
);

container.registerSingleton<IErrorRepository>(
  'ErrorRepository',
  ErrorRepository,
);
