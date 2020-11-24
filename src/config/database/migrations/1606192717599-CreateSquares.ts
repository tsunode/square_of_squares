import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSquares1606192717599 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'squares_painted',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'x',
            type: 'decimal',
            precision: 10,
            scale: 1,
          },
          {
            name: 'y',
            type: 'decimal',
            precision: 10,
            scale: 1,
          },
          {
            name: 'territory_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'PaintedSquareTerritory',
            referencedTableName: 'territories',
            referencedColumnNames: ['id'],
            columnNames: ['territory_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('squares_painted');
  }
}
