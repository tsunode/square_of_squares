import ICreateErrorDTO from '@errors/dtos/ICreateErrorDTO';
import IListErrorDTO from '@errors/dtos/IListErrorDTO';
import Error from '../schemas/Error';

export default interface IErrorRepository {
  create(data: ICreateErrorDTO): Promise<Error>;
  findAll(data: IListErrorDTO): Promise<Error[] | undefined>;
}
