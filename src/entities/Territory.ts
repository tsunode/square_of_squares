import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';

import SquaresPainted from './SquaresPainted';

export interface IPoint {
  x: number;
  y: number;
}

@Entity('territories')
class Territory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

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

  @OneToMany(() => SquaresPainted, squaresPainted => squaresPainted.territory)
  squaresPainted: SquaresPainted;

  @BeforeInsert()
  areaCalculator(): void {
    this.area = (this.end.x - this.start.x) * (this.end.y - this.start.y);
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Territory;
