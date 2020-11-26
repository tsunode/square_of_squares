import { inject, injectable } from 'tsyringe';

import IErrorRepository from '@repositories/IErrorRepository';
import Error from 'schemas/Error';

interface IRequest {
  page: number;
  take: number;
  route: string;
}

@injectable()
class ListErrorsService {
  constructor(
    @inject('ErrorRepository')
    private errorRepository: IErrorRepository,
  ) {}

  public async execute({
    page,
    take,
    route,
  }: IRequest): Promise<Error[] | undefined> {
    const errors = await this.errorRepository.findAll({
      page,
      take,
      route,
    });

    return errors;
  }
}

export default ListErrorsService;
