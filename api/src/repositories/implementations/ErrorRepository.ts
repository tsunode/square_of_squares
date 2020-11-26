import IListErrorDTO from '@errors/dtos/IListErrorDTO';
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

  public async findAll({
    page,
    take,
    route,
  }: IListErrorDTO): Promise<Error[] | undefined> {
    let errors;

    if (route) {
      errors = this.ormRepository.find({
        where: {
          route,
        },
      });
    } else {
      errors = this.ormRepository.find({
        take,
        skip: take * (page - 1),
      });
    }

    return errors;
  }
}

export default ErrorRepository;
