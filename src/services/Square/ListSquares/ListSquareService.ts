import SquaresPainted from 'entities/SquaresPainted';
import { inject, injectable } from 'tsyringe';

import ISquareRepository from '@repositories/ISquareRepository';

interface IRequest {
  page: number;
  take: number;
  order: 'DESC' | 'ASC';
}

@injectable()
class ListSquareService {
  constructor(
    @inject('SquareRepository')
    private squareRepository: ISquareRepository,
  ) {}

  public async execute({
    page,
    take,
    order,
  }: IRequest): Promise<SquaresPainted[] | undefined> {
    const squaresPainted = await this.squareRepository.findAll({
      page,
      take,
      order,
    });

    return squaresPainted;
  }
}

export default ListSquareService;
