import ICreateErrorDTO from '@errors/dtos/ICreateErrorDTO';
import Error from '../schemas/Error';

export default interface IErrorRepository {
  create(data: ICreateErrorDTO): Promise<Error>;
}
