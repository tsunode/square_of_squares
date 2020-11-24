import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Territory from './Territory';

@Entity('squares_painted')
class SquaresPainted {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  x: number;

  @Column()
  y: number;

  @Column()
  territory_id: string;

  @ManyToOne(() => Territory)
  territory: Territory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SquaresPainted;
