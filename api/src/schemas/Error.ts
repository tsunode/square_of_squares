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
}

export default Error;
