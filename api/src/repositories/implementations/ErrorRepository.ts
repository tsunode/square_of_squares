import ICreateErrorDTO from '@errors/dtos/ICreateErrorDTO';
import IErrorRepository from '@repositories/IErrorRepository';
import { getMongoRepository, MongoRepository } from 'typeorm';

import Error from '../../schemas/Error';

class ErrorRepository implements IErrorRepository {
  private ormRepository: MongoRepository<Error>;

  constructor() {
    this.ormRepository = getMongoRepository(Error, 'mongo');
  }

  public async create({ content, route }: ICreateErrorDTO): Promise<Error> {
    const error = this.ormRepository.create({
      content,
      route,
    });

    await this.ormRepository.save(error);

    return error;
  }
}

export default ErrorRepository;
