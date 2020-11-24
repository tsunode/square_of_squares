import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Territory, { IPoint } from './Territory';

@Entity('squares_painted')
class SquaresPainted {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'point',
    transformer: {
      from: point => point,
      to: (point: IPoint) => `${point.x},${point.y}`,
    },
  })
  start: IPoint;

  @Column({
    type: 'point',
    transformer: {
      from: point => point,
      to: (point: IPoint) => `${point.x},${point.y}`,
    },
  })
  end: IPoint;

  @Column()
  area: number;

  @Column()
  territory_id: string;

  @ManyToOne(() => Territory)
  @JoinColumn({ name: 'territory_id' })
  territory: Territory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SquaresPainted;
