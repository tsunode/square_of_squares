import { Expose } from 'class-transformer';
import { format } from 'date-fns-tz';
import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('erros')
class Error {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  content: string;

  @Column()
  route: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'created_at_formated' })
  getCreateAtFormated(): string {
    return format(this.created_at, 'dd/MM/yyyy HH:mm', {
      timeZone: 'America/Sao_Paulo',
    });
  }
}

export default Error;
